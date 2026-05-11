import re


def verify_card_number(s: str) -> str:
    # 清理输入，去除空格和连字符
    clean_str = re.sub(r"[-\s]", "", s)

    # 验证输入是否全为数字
    if not clean_str.isdigit():
        return "INVALID! (非数字字符)"

    # 验证卡号长度
    if len(clean_str) < 13 or len(clean_str) > 19:
        return "INVALID! (长度不正确)"

    total = 0
    # 从右向左计算
    for i in range(len(clean_str) - 1, -1, -1):
        digit = int(clean_str[i])
        # 从倒数第二位开始，每隔一位数字乘以2
        if (len(clean_str) - i) % 2 == 0:
            doubled = digit * 2
            total += doubled - 9 if doubled > 9 else doubled
        else:
            total += digit

    return "VALID!" if total % 10 == 0 else "INVALID!"


# 测试用例（使用标准长度的卡号）
print(verify_card_number("4539 1488 0343 6467"))  # 有效的Visa卡号
print(verify_card_number("1234567890123456"))  # 无效卡号
