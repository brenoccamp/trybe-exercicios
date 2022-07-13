characters_file = open('my-favorite-characters', mode='w')

print('teste', file=characters_file)
characters_file.write('Batman\n')
characters_file.write('Neo\n')
characters_file.write('J. W. Bush\n')
characters_file.write('Chaves\n')

print('Iron Man\n', 'Chorao', file=characters_file, sep='')

print('linha1', 'linha2', file=characters_file)

more_characters = ['Madruguinha\n', 'Florinda\n']

characters_file.writelines(more_characters)

characters_file.close()