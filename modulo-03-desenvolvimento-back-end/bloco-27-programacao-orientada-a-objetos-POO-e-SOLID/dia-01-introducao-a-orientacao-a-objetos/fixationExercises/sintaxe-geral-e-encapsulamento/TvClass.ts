class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resol: string, connec: string[]) {
    console.log(`Creating a new ${brand} Tv!`);
    this._brand = brand;
    this._size = size;
    this._resolution = resol;
    this._connections = connec;
  }

  turnOn(): void {
    console.log(`Turn on the ${this._brand} size ${this._size}"
    with resolution ${this._resolution} and available connections ${this._connections}`);
  }

  get connected(): any {
    return this._connectedTo;
  }

  set connected(device: string) {
    this._connectedTo = device;
    if (this._connections.includes(device)) {
      console.log(`Tv is now connecting to ${device}`);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const samsungTv = new Tv(
  'Samsung',
  42,
  '4k',
  ['HDMI', 'Ethernet', 'Wi-fi', ' and Bluetooth'],
);


samsungTv.turnOn();
samsungTv.connected = 'Wi-fi';
console.log(samsungTv.connected);