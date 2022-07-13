import sys
# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.

nums = input('Escreva valores aqui, separando-os por espaço: ')
print('nums', nums)
nums_array = nums.split(' ')
print(nums_array)
sum = 0

for num in nums_array:
    try:
        int_num = int(num)
        print(type(int_num), num, sep=", ")
        sum += int_num
    except:
        print(f'Erro ao somar valores, o {num} não é um valor válido.')
        # pass

print(f'A soma dos valores válidos é {sum}')

# nums = input("Insira valores aqui, separados por espaço: ")

# numsArr = nums.split(" ")

# sum = 0
# for num in numsArr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")
