// Código base para os exercícios 2 e 3:
// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .
const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.
describe('Verifica se getUserName retorna o resultado esperado', () => {
  // Fazendo o teste para promises utilizando a sintaxe ASYNC/AWAIT
  describe('Verifica o comportamento de getUserName quando o retorno é RESOLVE', () => {
    it('getUserName retorna Mark quando o parâmetro recebido for 1', async () => {
      const userName = await getUserName(1);
      expect(userName).toBe('Mark');
    });
    it('getUsername retorna Paul quando o parâmetro recebido for 2', async () => {
      const userName = await getUserName(2);
      expect(userName).toBe('Paul');
    });
  });

  describe('Verifica o comportamento de getUserName quando o retorno é REJECT', () => {
    it('getUserName retorna Error quando cair em REJECT', async () => {
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toBe(`User with 3 not found.`);
      }
    });
  });
});

// Fazendo o teste para promises utilizando a sintaxe EXPECT.ASSERTIONS()
describe('Verifica os retornos de getUserName', () => {
  describe('Verifica o retorno getUserName com RESOLVE', () => {
    it('getUserName retorna Mark quando recebe 1 como parâmetro', () => {
      expect.assertions(1);
      return getUserName(1).then((name) => {
        expect(name).toBe('Mark');
      });
    });
    it('getUserName retorna Paul quando recebe 2 como parâmetro', () => {
      expect.assertions(1);
      return getUserName(2).then((name) => {
        expect(name).toBe('Paul');
      });
    });
  });

  describe('Verifica o retorno de getUserName com REJECT', () => {
    it('getUserName retorna Error quando cair em REJECT', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) => {
        expect(error.message).toBe(`User with 3 not found.`);
      });
    });
  })

});
