# import bonus4
def sum_fatorial(number):
  counter = 0
  for num in range(1, number + 1):
    counter += num
  return counter

# Outra forma de somar numeros de 1 até N usando a função "sum" nativa do python:
def summation(limit):
  return sum(range(1, limit + 1))

print('bonus3', sum_fatorial(5))
print('bonus3', summation(5))
# print('bonus3', bonus4.fuel_price(10, 'G'))