import re


def verify_card_number(s: str) -> str:
    clean_str = re.sub("[-\s]", "", s)
    total = 0
    for i in range(len(clean_str)):
        if (len(clean_str) - i) % 2 != 0:
            total += int(clean_str[i])
        else:
            if int(clean_str[i]) * 2 > 9:
                total += int(clean_str[i]) * 2 - 9
            else:
                total += int(clean_str[i]) * 2

    return "VALID!" if total % 10 == 0 else "INVALID!"


print(verify_card_number("453914889"))
