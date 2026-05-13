export class GameOfLife {
  matrix:number[][] =[];
  result:number[][] = [];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  public tick() {
    for(let i = 0; i < this.matrix.length; i++){
      this.result[i] = [];
      for(let j = 0; j < this.matrix.length; j++){
        let count = 0

        if(i > 0 && this.matrix[i - 1][j] === 1) count++;
        if(i > 0 && j > 0 && this.matrix[i - 1][j - 1] === 1) count++;
        if(i > 0 && j < this.matrix.length - 1 && this.matrix[i - 1][j + 1] === 1) count++;
        if(i < this.matrix.length - 1 && this.matrix[i + 1][j] === 1) count++;
        if(i < this.matrix.length - 1 && j >0 && this.matrix[i + 1][j - 1] === 1) count++;
        if(i < this.matrix.length - 1 && j < this.matrix.length - 1 && this.matrix[i + 1][j + 1] === 1) count++;
        if(j > 0  && this.matrix[i][j - 1] === 1) count++;
        if(j < this.matrix.length - 1 && this.matrix[i][j + 1] === 1) count++;
        
        if(count === 3) this.result[i][j] = 1;
        else if(count !== 2) this.result[i][j] = 0;
        else this.result[i][j] = this.matrix[i][j];
      }
    }
  }

  public state(): number[][] {
    return this.result;
  }
}
