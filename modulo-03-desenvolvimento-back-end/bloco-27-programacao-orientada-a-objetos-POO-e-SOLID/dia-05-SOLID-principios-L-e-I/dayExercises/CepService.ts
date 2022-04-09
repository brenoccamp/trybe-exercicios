// ./CepService.ts
import { CepAPI } from './interfaces';

class CepService {
  constructor(private readonly cepApi: CepAPI) { }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;