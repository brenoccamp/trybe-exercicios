# Exercício: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.


# def recursive_sum(n):
#     if n == 0:
#         return n
#     return n + recursive_sum(n - 1)


# print(recursive_sum(4))


def iterative_factorial(n):
    fact = 1
    for i in range(1, n):
        fact *= i
        print('i: ', i)
    print(fact)
    return fact


iterative_factorial(5)
