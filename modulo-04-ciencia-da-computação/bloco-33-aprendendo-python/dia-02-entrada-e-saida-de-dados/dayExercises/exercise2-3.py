# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".
# import csv
import random

inputed = input('Escreva algumas palavras separadas por espaço: ')
words = inputed.split(" ")

with open('words.txt', 'w') as file:
    word_per_line = []
    for word in words:
        # print('first print: ', word)
        line = f"{word}\n"
        word_per_line.append(line)
    # print(words)
    file.writelines(word_per_line)

shufflered_words = []

with open('words.txt', mode='r') as file:
    read = file.read().split("\n")
    while ("" in read):
        read.remove("")
    # print('list: ', read)
    selected_word = random.choice(read)
    # print('sw: ', selected_word)
    shufflered_word = "".join(random.sample(selected_word, len(selected_word)))
    # print('shuf word: ', shufflered_word)

for attempt in range(3):
    attempted = input(f'Advinhe a palavra {shufflered_word}: ')
    if attempted == selected_word:
        print('Ṕarabéns, você é um newbie!')
        break
