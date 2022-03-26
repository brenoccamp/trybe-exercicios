// type Slices = 4 | 6 | 8; -> Podemos declarar um tipo para slices ou colocar direto na interface.

export default interface Pizza {
  flavor: string;
  slices: 4 | 6 | 8; // -> aqui pderíamos colocar apenas Slices em vez de 4 | 6 | 8;
}