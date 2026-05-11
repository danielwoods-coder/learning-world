def add_setting(dic, tup):
    add_key = tup[0].lower()
    add_value = tup[1].lower()
    for key in dic:
        if key == add_key:

            return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    dic[add_key] = add_value
    return f"Setting '{add_key}' added with value '{add_value}' successfully!"


def update_setting(dic, tup):
    up_key = tup[0].lower()
    up_value = tup[1].lower()
    for key in dic:
        if key == up_key:
            dic[key] = up_value
            return f"Setting '{key}' updated to '{up_value}' successfully!"
    return f"Setting '{up_key}' does not exist! Cannot update a non-existing setting."


def delete_setting(dic, key):
    lower_key = key.lower()
    for prop in dic:
        if prop == lower_key:
            del dic[prop]
            return f"Setting '{prop}' deleted successfully!"
    return "Setting not found!"


def view_settings(dic):
    if not dic:
        return "No settings available."
    else:
        view_str = "Current User Settings:"
        for key, value in dic.items():
            view_str += "\n" + key.capitalize() + ": " + value
        return view_str


# Example usage:
test_settings = {
    "color": "blue",
    "font": "Arial",
    "theme": "dark",
    "language": "English",
    "size": "medium",
}

print(add_setting(test_settings, ("name", "John Doe")))
#print(update_setting(test_settings, ("qas", "Times New Roman")))
#print(delete_setting(test_settings, "Theme"))
print(view_settings(test_settings))
