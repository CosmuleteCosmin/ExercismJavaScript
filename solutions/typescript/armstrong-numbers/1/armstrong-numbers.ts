export function isArmstrongNumber(number: bigint | number): boolean {
  number = BigInt(number);
  let aux: bigint = number;
  let power:bigint = BigInt(number.toString().length);
  let sum:bigint = 0n;
  
  while(aux > 0n){
    sum += (aux % 10n) ** power;
    aux = aux / 10n;
  }

  return sum === number;
}
