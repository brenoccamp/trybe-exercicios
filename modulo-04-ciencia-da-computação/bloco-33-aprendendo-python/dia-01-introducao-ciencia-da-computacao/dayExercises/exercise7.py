def define_triangle(side1, side2, side3):
  is_triangle = (
    side1 + side2 > side3 and
    side2 + side3 > side1 and
    side1 + side3 > side2
  )
  if is_triangle:
    if side1 == side2 == side3:
      return 'Triângulo Equilátero'
    elif side1 == side2 or side2 == side3 or side1 == side3:
      return 'Triângulo Isósceles'
    elif side1 != side2 != side3:
      return 'Triângulo Escaleno'
  return 'Não é um triângulo'

print(define_triangle(1, 1, 2))