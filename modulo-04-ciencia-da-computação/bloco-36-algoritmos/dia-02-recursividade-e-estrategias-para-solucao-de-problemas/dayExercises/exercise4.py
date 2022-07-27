# 🚀 Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.


# def find_mdc_recursive(n1, n2, max_mdc):
#     if max_mdc == 1:
#         return 1
#     if n1 % max_mdc == 0 and n2 % max_mdc == 0:
#         return max_mdc
#     else:
#         return find_mdc_recursive(n1, n2, max_mdc - 1)


# def find_mdc(n1, n2):
#     max_mdc = n1
#     if n1 > n2:
#         max_mdc = n2
#     return find_mdc_recursive(n1, n2, max_mdc)


#Outra forma mais suscinta de resolver o problema:
def mdc(a, b):
    # print('primeira linha: ', a, b, a % b)
    if b == 0:
        # print('if: ', 'a: ', a, 'b: ', b)
        return a
    # print('a: ', a, 'b: ', b)
    return mdc(b, a % b)


# print(find_mdc(100000000, 223000000))
print(mdc(3, 9))
