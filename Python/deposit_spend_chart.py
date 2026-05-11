class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        is_check_funds = self.check_funds(amount)

        if is_check_funds:
            self.ledger.append({"amount": -amount, "description": description})
            return True
        else:
            return False

    def get_balance(self):
        balance = 0
        for dicn in self.ledger:
            balance += dicn["amount"]
        return balance

    def transfer(self, amount, other):
        is_check_funds = self.check_funds(amount)

        if is_check_funds:
            self.withdraw(amount=amount, description=f"Transfer to {other.name}")
            other.deposit(amount=amount, description=f"Transfer from {self.name}")
            return True
        else:
            return False

    def check_funds(self, amount):
        current_balance = self.get_balance()
        return False if amount > current_balance else True

    def __str__(self):
        length_of_name = len(self.name)
        if length_of_name > 30:
            print("Name should be less or equal to 30")
            self.name = self.name[:30]
        titel_left = (30 - length_of_name) // 2
        titel_right = 30 - length_of_name - titel_left
        total_str = f"{titel_left * '*'}{self.name}{titel_right * '*'}\n"

        for obj in self.ledger:
            amount_str = str(format(obj["amount"], ".2f"))
            left = (
                obj["description"][:23]
                if len(obj["description"]) >= 23
                else f"{obj['description']}{' ' * (23 - len(obj['description']))}"
            )
            right = (
                f"{amount_str[0:7]}\n"
                if len(amount_str) >= 7
                else f"{' ' * (7- len(amount_str))}{amount_str}\n"
            )
            total_str += left + right
        total_str += f"Total: {self.get_balance():.2f}"
        return total_str


def create_spend_chart(categories):
    total = 0
    for category in categories:
        for dic in category.ledger:
            if dic["amount"] < 0:
                total += -dic["amount"]

    percentage_list = []
    for category in categories:
        x = 0
        for dic in category.ledger:
            if dic["amount"] < 0:
                x += -dic["amount"]
        percentage_list.append(int(x / total * 10) * 10)
    chart_str = "Percentage spent by category"
    for i in range(100, -1, -10):
        chart_str += f"\n{i:>3}| "
        for percentage in percentage_list:
            if percentage >= i:
                chart_str += "o  "
            else:
                chart_str += "   "

    chart_str += "\n    " + "-" * (len(categories) * 3 + 1) + ""

    max_length = max([len(category.name) for category in categories])
    for i in range(max_length):
        chart_str += "\n     "
        for category in categories:
            if len(category.name) > i:
                chart_str += f"{category.name[i]}  "
            else:
                chart_str += "   "

    return chart_str
