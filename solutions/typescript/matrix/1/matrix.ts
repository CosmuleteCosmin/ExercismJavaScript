export class Matrix {
  arr: number[][];
  constructor(matrix: string) {
    this.arr = matrix
      .split("\n")
      .map(row => row.trim().split(" ")
      .map((value) => Number(value)));    
  }

  get rows(): number[][] {
    return this.arr;
  }

  get columns(): number[][] {
    return this.arr[0].map((_,i) => 
      this.arr.map(row => row[i]));
  }
}
