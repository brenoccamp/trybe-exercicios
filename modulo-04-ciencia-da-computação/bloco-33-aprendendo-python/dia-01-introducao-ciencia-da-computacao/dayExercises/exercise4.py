def find_biggest_name(names_list):
  biggest_name = names_list[0]
  for curr_name in names_list:
    if len(biggest_name) < len(curr_name):
      biggest_name = curr_name
  return biggest_name


print(find_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))