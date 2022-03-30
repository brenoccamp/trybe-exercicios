class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  // connectedTo: string;

  constructor(brand: string, size: number, resol: string, connec: string[]) {
    console.log(`Creating a new ${brand} Tv!`);
    this.brand = brand;
    this.size = size;
    this.resolution = resol;
    this.connections = connec;
  }

  turnOn(): void {
    console.log(`Turn on the ${this.brand} size ${this.size}"
    with resolution ${this.resolution} and available connections ${this.connections}`);
  }
}

const samsungTv = new Tv(
  'Samsung',
  42,
  '4k',
  ['HDMI', 'Ethernet', 'Wi-fi', ' and Bluetooth'],
);

samsungTv.turnOn();