# 🚀 Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def find_bigger_int(int_list, list_size):
    if list_size == 1:
        return int_list[0]
    else:
        testbigger_int = find_bigger_int(int_list, list_size - 1)
        if testbigger_int > int_list[list_size - 1]:
            return testbigger_int
        else:
            return int_list[list_size - 1]


def bigger_int(int_list):
    list_size = len(int_list)
    return find_bigger_int(int_list, list_size)


print(bigger_int([7, 2, 9, 3, 1]))
