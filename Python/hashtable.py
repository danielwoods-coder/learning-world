class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, string):

        sum = 0
        for char in string:
            sum += ord(char)
        return sum

    def add(self, key, value):
        hashed_key = self.hash(key)
        if hashed_key in self.collection:
            self.collection[hashed_key].update({key: value})
        else:
            self.collection[hashed_key] = {key: value}

    def remove(self, key):
        hashed_key = self.hash(key)
        if hashed_key in self.collection:
            if key in self.collection[hashed_key]:
                del self.collection[hashed_key][key]
        else:
            return

    def lookup(self, key):
        hashed_key = self.hash(key)
        if hashed_key in self.collection:
            if key in self.collection[hashed_key]:
                return self.collection[hashed_key][key]
            else:
                return None
        else:
            return None


table = HashTable()
table.add("dear", "friend")
table.add("read", "book")
table.remove("read")
print(table.collection)
