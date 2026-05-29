#! /bin/bash
PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ -z $1 ]]; then
	echo Please provide an element as an argument.
  exit
fi
ARG="$1"
if [[ $ARG =~ ^[0-9]+$ ]] ; then
    query_atomic_id=$($PSQL "SELECT atomic_number FROM elements WHERE atomic_number = $ARG")
else
  query_atomic_id=$($PSQL "SELECT atomic_number FROM elements  WHERE  symbol = '$ARG' OR name = '$ARG'")
fi
if [[ -z $query_atomic_id ]]; then
  echo I could not find that element in the database.
else
  query_result="$($PSQL "SELECT e.atomic_number,e.name,e.symbol,p.atomic_mass,p.melting_point_celsius,p.boiling_point_celsius,t.type FROM elements AS e JOIN properties AS p ON e.atomic_number = p.atomic_number JOIN types AS t ON p.type_id = t.type_id WHERE e.atomic_number=$query_atomic_id")"
  IFS='|' read -r ATOMIC_NUM NAME SYMBOL MASS MELT BOIL TYPE <<< "$query_result"
  echo "The element with atomic number $ATOMIC_NUM is $NAME ($SYMBOL). It's a $TYPE, with a mass of $MASS amu. $NAME has a melting point of $MELT celsius and a boiling point of $BOIL celsius."
fi