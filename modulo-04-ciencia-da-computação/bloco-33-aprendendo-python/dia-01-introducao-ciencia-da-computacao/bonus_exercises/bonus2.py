def pyramid_draw(number):
  for num in range(1, number+1):
    print(num * '*')
  inverted_pyramid = 1
  for num in range(number, 0, -1):
    print(f'{num * " "}{inverted_pyramid * "*"}')
    inverted_pyramid += 1

print(pyramid_draw(5))