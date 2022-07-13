import sys

if __name__ == "__main__":
    for argument in sys.argv:
        print(f'Received -> {argument}')

print('aqui', 'Em duas', sep=", ")
print('linhas')

print('aqui', 'na:', end=" ")
print('-', end=" ")


def teste(a):
    return a


print('mesma linha')
