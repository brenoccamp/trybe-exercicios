// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
const toUpperCase = (string) => string.toUpperCase();

const sliceString = (string) => string.slice(0, 1);

const concatString = (string1, string2) => string1 + string2;

module.exports = { toUpperCase, sliceString, concatString };

// 5 - Utilizando as mesmas funções deste exercício, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.