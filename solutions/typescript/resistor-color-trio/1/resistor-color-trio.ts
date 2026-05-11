const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export function decodedResistorValue(colors: string[]): string {
  const firstValue: number  = COLORS.indexOf(colors[0]);
  const secondValue: number = COLORS.indexOf(colors[1]);
  const zeroes: number = COLORS.indexOf(colors[2]);
  
  const result: number = (firstValue * 10 + secondValue) * (10 ** zeroes);
  if (result >= 1_000_000_000) {
    return `${result / 1_000_000_000} gigaohms`;
  }
  if (result >= 1_000_000) {
    return `${result / 1_000_000} megaohms`;
  }
  if(result >= 1_000){
    return `${result / 1_000} kiloohms`;
  }
  return `${result} ohms`
  
}
