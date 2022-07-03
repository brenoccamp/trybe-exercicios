def final_price(fuel_liters, fuel_type):
  fuel_types = { 'G': 2.50, 'A': 1.90 }
  total_price = fuel_liters * fuel_types[fuel_type]
  discount = {
    'A': total_price * (3 / 100) if fuel_liters <= 20 else total_price * (5 / 100),
    'G': (total_price * (4 / 100)) if fuel_liters <= 20 else total_price * (6 / 100),
  }

  return total_price - discount[fuel_type]


def fuel_price(type, liters):
  if type == "A":
      price = 1.90
      discount = 0.03
      if liters > 20:
          discount = 0.05
  elif type == "G":
      price = 2.50
      discount = 0.04
      if liters > 20:
          discount = 0.06
  total = price * liters
  total -= total * discount
  return total


print('bonus4', final_price(10, 'G'))
print('bonus4', fuel_price('G', 10))
