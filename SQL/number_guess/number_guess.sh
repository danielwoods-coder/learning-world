#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"
#用变量存储用户猜数的次数
NUM_OF_GUESS= 0
echo -e "\n~~~这是一个猜数字游戏~~~\n"
# 生成一个1到1000之间的随机数
RANDOM_NUM=$((RANDOM % 1000 + 1))
# echo $RANDOM_NUM

#处理用户输入逻辑
handle_input() {
	#提示输入数字
	read INPUT_NUM
	((NUM_OF_GUESS++))
	if [[ $INPUT_NUM =~ ^[0-9]+$ ]]; then

		if [[ $INPUT_NUM -gt $RANDOM_NUM ]]; then
			echo "It's lower than that, guess again:"
			handle_input
		elif [[ $INPUT_NUM -lt $RANDOM_NUM ]]; then
			echo "It's higher than that, guess again:"
			handle_input
		else
			echo You guessed it in $NUM_OF_GUESS tries. The secret number was $INPUT_NUM. Nice job!
			return
		fi

	else
		echo "That is not an integer, guess again:"
		handle_input
	fi
}

echo "Enter your username:"
read USERNAME
# 在数据库中查询用户名
QUERY_ID=$($PSQL "SELECT user_id FROM user_info WHERE name = '$USERNAME'")
# 新用户与老用户不同的数据处理
if [[ -z $QUERY_ID ]]; then
	echo Welcome, $USERNAME! It looks like this is your first time here.
	insert_username=$($PSQL "INSERT INTO user_info (name, played, best) VALUES ('$USERNAME', 0, 0)")
	USER_ID=$($PSQL "SELECT user_id FROM user_info WHERE name = '$USERNAME'")
	echo Guess the secret number between 1 and 1000:
	handle_input
	update_played=$($PSQL "UPDATE user_info SET played = 1 WHERE user_id = $USER_ID")
	update_best=$($PSQL "UPDATE user_info SET best = $NUM_OF_GUESS WHERE user_id = $USER_ID")
else
	QUERY_USER_INFO=$($PSQL "SELECT name,played,best FROM user_info WHERE user_id = '$QUERY_ID'")
	IFS="|" read -r NAME PLAYED BEST <<<"$QUERY_USER_INFO"
	echo Welcome back, $NAME! You have played $PLAYED games, and your best game took $BEST guesses.
	echo Guess the secret number between 1 and 1000:
	handle_input
	update_played=$($PSQL "UPDATE user_info SET played = played + 1 WHERE user_id = $QUERY_ID")

	if [[ $NUM_OF_GUESS -lt $BEST || $BEST -eq 0 ]]; then
		update_best=$($PSQL "UPDATE user_info SET best = $NUM_OF_GUESS WHERE user_id = $QUERY_ID")
	fi
fi