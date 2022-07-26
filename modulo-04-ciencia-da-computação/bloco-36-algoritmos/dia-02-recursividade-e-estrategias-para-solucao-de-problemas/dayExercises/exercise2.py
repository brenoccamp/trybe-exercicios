# 🚀 Exercício 2: Transforme o algoritmo criado no exercicio 1 em recursivo.


def even_numbers(n):
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + even_numbers(n - 1)
    else:
        return even_numbers(n - 1)


print(even_numbers(10))
