// ./CepService.ts
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor() {
    this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;