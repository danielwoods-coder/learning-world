class Planet:
    def __init__(self, name, planet_type, star):
        """
        Initialize a Planet instance.

        Args:
            name: The name of the planet (non-empty string)
            planet_type: The type of the planet (non-empty string)
            star: The star the planet orbits (non-empty string)

        Raises:
            TypeError: If any argument is not a string
            ValueError: If any argument is empty or contains only whitespace
        """
        if (
            not isinstance(name, str)
            or not isinstance(planet_type, str)
            or not isinstance(star, str)
        ):
            raise TypeError("name, planet_type, and star must be strings")
        if not name.strip() or not planet_type.strip() or not star.strip():
            raise ValueError("name, planet_type, and star must be non-empty strings")
        self.name = name.strip()
        self.planet_type = planet_type.strip()
        self.star = star.strip()

    def orbit(self):
        return f"{self.name} is orbiting around {self.star}..."

    def __str__(self):
        return f"Planet: {self.name} | Type: {self.planet_type} | Star: {self.star}"


planet_1 = Planet("地球", "行星", "太阳")
planet_2 = Planet("火星", "行星", "太阳")
planet_3 = Planet("月球", "行星", "地球")

print(str(planet_1))
print(planet_2)
print(planet_3)

print(planet_1.orbit())
print(planet_2.orbit())
print(planet_3.orbit())
