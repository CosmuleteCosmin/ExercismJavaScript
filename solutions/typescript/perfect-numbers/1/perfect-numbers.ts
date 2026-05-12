export function classify(num: number):string {
  if(num < 1)
    throw new Error("Classification is only possible for natural numbers.");
  if(num === 1)
    return "deficient"
  let sum = aliquotSum(num);
  if(num === sum)
    return "perfect";
  if(num < sum)
    return "abundant";
  return "deficient"
  
}

function aliquotSum(num: number):number {
  let sum = 1;
  for(let d = 2; d <= Math.sqrt(num); d++){
    if(num % d === 0){
      sum += d;
      if(d * d < num)
        sum += num / d;
    }
  }
  return sum;
}
