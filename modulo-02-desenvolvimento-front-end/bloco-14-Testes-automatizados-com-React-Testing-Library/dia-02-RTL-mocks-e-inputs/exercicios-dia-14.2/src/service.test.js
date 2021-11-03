const service = require('./service');

afterEach(() => jest.clearAllMocks());

describe('Testando implementação do arquivo service.js', () => {

  it('Testando função generateRandomNumber: qual seu retorno, se foi chamada e quantas vezes foi chamada', async () => {
    let randomNumber = service.generateRandomNumber;
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber(1)).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(1);
  });

  it('Mockando e testando mock da função generateRandomNumber', () => {
    let randomNumber = service.generateRandomNumber;
    randomNumber = jest.fn()
      .mockImplementationOnce((a, b) => a / b)
      .mockReturnValue(10);
    
    expect(randomNumber(10, 5)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(10, 5);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(randomNumber).toHaveBeenCalledWith();
  });

  it('Testando se a implementação com 3 parâmetros multiplica os três, resetando a implementação e criando uma nova que recebe 1 parametro e multiplica por 2', () => {
    let randomNumber = service.generateRandomNumber;
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(2, 2, 2)).toBe(8);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 2, 2);

    randomNumber.mockReset();
    expect(randomNumber).toHaveBeenCalledTimes(0);

    randomNumber.mockImplementation(a => a * 2);

    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2);
  });

  it('Testa uma nova implementação para cada uma das seguintes funções: toUpperCase, returnFirstLetter, concatStrings', () => {
    let toUpperCase = service.toUpperCase;
    let returnFirstLetter = service.returnFirstLetter;
    let concatStrings = service.concatStrings;

    expect(toUpperCase('breno')).toBe('BRENO');
    expect(returnFirstLetter('breno')).toBe('b');
    expect(concatStrings('breno', 'cunha')).toBe('brenocunha');

    toUpperCase = jest.fn().mockImplementation((string) => string.toLowerCase());
    returnFirstLetter = jest.fn().mockImplementation((string) => string.split('')[string.length -1]);
    concatStrings = jest.fn().mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    expect(toUpperCase('BRENO')).toBe('breno');
    expect(toUpperCase).toHaveBeenCalled();
    expect(toUpperCase).toHaveBeenCalledTimes(1);
    expect(toUpperCase).toHaveBeenCalledWith('BRENO');

    expect(returnFirstLetter('BRENO')).toBe('O');
    expect(returnFirstLetter).toHaveBeenCalled();
    expect(returnFirstLetter).toHaveBeenCalledTimes(1);
    expect(returnFirstLetter).toHaveBeenCalledWith('BRENO');

    expect(concatStrings('Breno', ' Cunha', ' Campanha')).toBe('Breno Cunha Campanha');
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledTimes(1);
    expect(concatStrings).toHaveBeenCalledWith('Breno', ' Cunha', ' Campanha');

    // toUpperCase.mockRestore();

    // expect(toUpperCase).toHaveBeenCalledTimes(0);
    // expect(toUpperCase('breno')).toBe('BRENO');
    // expect(toUpperCase).toHaveBeenCalled();
    // expect(toUpperCase).toHaveBeenCalledTimes(1);
    // expect(toUpperCase).toHaveBeenCalledWith('breno');
  });
});

describe('Testando mock da função dogAPI', () => {
  service.dogAPI = jest.fn();
  it('Testando casos de sucesso da requisição', async () => {
    service.dogAPI.mockResolvedValue('request success');

    service.dogAPI();
    expect(service.dogAPI).toHaveBeenCalled();
    expect(service.dogAPI).toHaveBeenCalledTimes(1);
    await expect(service.dogAPI()).resolves.toBe('request success');
    expect(service.dogAPI).toHaveBeenCalledTimes(2);
  });

  it('Testando casos de rejeição da requisição', async () => {
    service.dogAPI.mockRejectedValue('request failed');

    expect(service.dogAPI).toHaveBeenCalledTimes(0);
    await expect(service.dogAPI()).rejects.toBe('request failed');
    expect(service.dogAPI).toHaveBeenCalledTimes(1);
  });
});