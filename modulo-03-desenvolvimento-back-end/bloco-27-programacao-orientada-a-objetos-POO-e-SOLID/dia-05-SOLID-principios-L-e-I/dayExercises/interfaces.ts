export interface CepAPI {
  getAddressByCEP(cep: string, num: number): Promise<string>;
  getCepByAddress(address: string, number: number): Promise<string>;
}

export interface ILandVehicle {
  drive(): void;
}

export interface IAirVehicle {
  fly(): void;
}

export interface IFuturisticVehicle extends ILandVehicle, IAirVehicle {}