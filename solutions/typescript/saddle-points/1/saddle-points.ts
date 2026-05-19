interface Position{
  row:number;
  column:number;
}

export function saddlePoints(arr: number[][]): Position[] {
  let result: Position[] = [];
  if (arr.length === 0 || arr[0].length === 0) {
    return result;
  }
  
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
      let isMax: boolean = arr[i][j] === Math.max(...arr[i]);
      let isMin: boolean = arr[i][j] === Math.min(...arr.map(row => row[j]))
      if(isMax && isMin){
        result.push({row: i + 1, column: j + 1});
      }
    }
  }

  return result;
}


