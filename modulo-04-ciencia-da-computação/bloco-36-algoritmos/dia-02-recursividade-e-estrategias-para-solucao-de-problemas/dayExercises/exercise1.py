# 🚀 Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).


def even_numbers(n):
    counter = 0
    for curr_n in range(1, n + 1):
        # print(curr_n)
        if curr_n % 2 == 0:
            counter += 1
    return counter


print(even_numbers(10))
