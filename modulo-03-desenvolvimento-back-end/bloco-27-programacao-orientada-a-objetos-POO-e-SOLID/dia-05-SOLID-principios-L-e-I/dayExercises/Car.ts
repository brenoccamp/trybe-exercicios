import { ILandVehicle } from "./interfaces";

export default class Car implements ILandVehicle {
  drive(): void {
    console.log(`The car is moving.`);
  }
}