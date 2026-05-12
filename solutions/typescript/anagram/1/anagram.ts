export class Anagram {
  target: string;
  constructor(input: string) {
   this.target = input.toLowerCase();
  }

  public matches(...potentials: string[]): string[] {
    let result: string[] = [];
    for(let word of potentials){
      if(word.toLowerCase() === this.target || word.length !== this.target.length) continue;
      
      if(this.sortString(this.target) === this.sortString(word.toLowerCase()))
        result.push(word);
    }
    return result;
  }

  private sortString(string: string): string{
    return string.split("").sort().join("");
  }
}
