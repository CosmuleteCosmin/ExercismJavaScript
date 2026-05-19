interface Input {
  maxFactor: number
  minFactor?: number
}

export function generate(params: Input): unknown {
  const min = params.minFactor ?? 1;
  const max = params.maxFactor;

  if (min > max) {
    throw new Error('min must be <= max');
  }
  
  let smallest: number = Infinity;
  let largest: number = -Infinity;
  let smallFactors: number[][] = [];
  let  largeFactors: number[][] = [];
  
  for(let a = min; a <= max; a++){
    for(let b = a; b <= max; b++){
      const product = a * b;
      
      if (product > smallest && product < largest) {
        continue;
      }
      
      if(isPalindrom(product)){
        if(product < smallest){
          smallest = product;
          smallFactors.length = 0;
          smallFactors.push([a, b]);
        }
        else if(product === smallest){
          smallFactors.push([a, b]);
        }
        if(product > largest){
          largest = product;
          largeFactors.length = 0;
          largeFactors.push([a, b]);
        }
        else if(product === largest){
          largeFactors.push([a, b]);
        }
      }
    }
  }

  return {
    smallest: {
      value: smallest === Infinity ? null : smallest,
      factors: smallest === Infinity ? [] : smallFactors,
    },
    largest: {
      value: largest === -Infinity ? null : largest,
      factors: largest === -Infinity ? [] : largeFactors,
    },
  };
}

function isPalindrom(number:number): boolean {
  let numbers:string[] = number.toString().split('');
  for(let i = 0; i < numbers.length / 2; i++){
    if(numbers[i] != numbers[numbers.length - 1 - i]){
      return false;
    }
  }
  return true;
}
