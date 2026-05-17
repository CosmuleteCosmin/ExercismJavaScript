type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

export function triplets(options: Options): Triplet[] {
  let result: Triplet[] = [];
  const min = options.minFactor ?? 1;
  const max = options.maxFactor ?? options.sum;
  
  for(let a = min; a <= options.sum / 3; a++){
    for(let b = a + 1; b <= options.sum / 2; b++){
      let c = options.sum - a - b;
      if(a ** 2 + b ** 2 === c ** 2 && c <= max){
        let triplet = new Triplet(a,b,c);
        result.push(triplet);
      }
    } 
  }
  return result;
  
}

class Triplet {
  a: number;
  b: number;
  c: number;
  constructor(a:number, b:number, c:number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray(): [number, number, number] {
   return [this.a, this.b, this.c];
  }
}
