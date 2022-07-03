def smaller_element(elements):
  smaller = elements[0]
  for element in elements:
    if element < smaller:
      smaller = element
  return smaller

# Outra solução utilizando função nativa do python:
def find_smaller_number(numbers):
  return min(numbers)


print(smaller_element([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
print(find_smaller_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))