def solution(n):
    a, b = 1, 1

    for i in range(2, n + 1):
        temp = a + b
        a = b
        b = temp
    
    return b % 1000000007