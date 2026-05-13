export class Series {
  series: string;
  constructor(series: string) {
    if(series === "")
      throw new Error("series cannot be empty")
    this.series = series
  }

  slices(sliceLength: number): number[][] {
    if(sliceLength === 0)
      throw new Error("slice length cannot be zero");
    if(sliceLength < 0)
      throw new Error("slice length cannot be negative");
    if(sliceLength > this.series.length)
      throw new Error("slice length cannot be greater than series length");
    
    let result: number[][] = [];
    for(let i = 0; i + sliceLength <= this.series.length ; i++){
      result[i] = [];
      for(let j = 0; j < sliceLength; j++){
        result[i][j] = Number(this.series[i + j]);
      }
    }

    return result;
  }
}
