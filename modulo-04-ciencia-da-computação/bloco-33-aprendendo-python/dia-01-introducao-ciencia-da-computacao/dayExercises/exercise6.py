def calc_amount_of_ink(size_wall):
  ink_liter_price = 80.00
  required_liter = size_wall / 3
  required_ink_liters = required_liter // 18
  if required_liter % 18:
    required_ink_liters += 1
  return required_ink_liters, required_ink_liters * ink_liter_price


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(calc_amount_of_ink(100))
test = paint_costs(100)
print(test)
print(paint_costs(100)[0])
# test = 1
print(type(test))
# test1 = (1, 2, 3)
# test1[0] = 10
