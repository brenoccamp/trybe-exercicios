def calc_media(num_list):
  media = 0
  for num in num_list:
    media += num
  return media / len(num_list)

print(calc_media([2, 2, 2]))