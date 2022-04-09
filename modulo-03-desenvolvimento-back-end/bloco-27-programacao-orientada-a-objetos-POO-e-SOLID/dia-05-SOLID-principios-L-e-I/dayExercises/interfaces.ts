export interface CepAPI {
  getAddressByCEP(cep: string, num: number): Promise<string>;
  getCepByAddress(address: string, number: number): Promise<string>;
}