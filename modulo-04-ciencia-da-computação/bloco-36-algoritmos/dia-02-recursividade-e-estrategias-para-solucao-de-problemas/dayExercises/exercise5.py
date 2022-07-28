# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo.


def check_is_odd(n, divisor):
    # print(n, divisor)
    if divisor == n:
        return f'{n} is odd'
    if n % divisor == 0:
        return f'{n} is not odd'
    return check_is_odd(n, divisor + 1)


def is_odd(n):
    if n == 2:
        return f'{n} is odd'
    return check_is_odd(n, 2)


print(is_odd(30))
