import { IAirVehicle } from "./interfaces";

export default class AirPlane implements IAirVehicle {
  fly(): void {
    console.log('The Vehicle is Flying!');
  }
}