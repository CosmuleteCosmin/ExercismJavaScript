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
    const digits = this.series.split("").map(Number);
    for(let i = 0; i + sliceLength <= digits.length ; i++){
      result.push(digits.slice(i, i + sliceLength));
    }

    return result;
  }
}
