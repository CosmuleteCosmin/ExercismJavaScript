export class Squares {
  count: number;
  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    let sum = 0;
    for(let i = 1; i <= this.count; i++){
      sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum(): number {
    let square = 0;
    for(let i = 1; i <= this.count; i++){
      square += i;
    }
    return square ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
