# Exercício 6: Escreva um algoritmo que recebe uma lista e retorne-a na ordem reversa.


def make_reverse(n, list, list_length):
    if n == list_length - 1:
        return list
    else:
        first_pos = list.pop(list_length - 1)
        list.insert(n, first_pos)
        return make_reverse(n + 1, list, list_length)


def reverse_list(list):
    list_length = len(list)
    return make_reverse(0, list, list_length)


print(reverse_list([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))