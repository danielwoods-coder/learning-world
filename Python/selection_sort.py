def selection_sort(arr):
    for i in range(len(arr) - 1):
        min_idx = i + arr[i:].index(min(arr[i:]))
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr


print(selection_sort([4, 99, 0, 58]))
