// ./index.ts
import CepService from './CepService';
import FooCepAPI from './FooCepAPI';

async function main() {
  const fooCepAPI = new FooCepAPI();
  const cepSvc = new CepService(fooCepAPI);

  console.log('get address by cep', '->', await cepSvc.addressByCep('xx.xxx-xx', 10));
  console.log('get cep by address', '->', await cepSvc.cepByAdress('street foo, between bar and baz', 10));
}

main();