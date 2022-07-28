# Exercício 7: Escreva um algoritmo recursivo que resolva o problema da torre de hanoi, seguindo as instruções:
# Assim como na imagem abaixo, a torre deve conter 3 discos, e três colunas;
# Os discos começam alinhados na primeira coluna, e devem ser organizados respeitando a ordem de tamanho, na última coluna.


def torres_hanoi(numero_de_discos, a, b, c):
    if numero_de_discos == 1:
        print("Move disco %d de %s para %s" % (numero_de_discos, a, c))
    else:
        torres_hanoi(numero_de_discos - 1, a, c, b)
        print(
            "Move disco %d de %s para %s" % (numero_de_discos, a, c)
        )
        torres_hanoi(numero_de_discos - 1, b, a, c)


print(torres_hanoi(3, a="primeiro", b="meio", c="fim"))
