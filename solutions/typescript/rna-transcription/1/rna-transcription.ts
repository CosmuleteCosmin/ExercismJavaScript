export function toRna(dna: string): string {
  let result: string = "";
  for(let char of dna){
    switch(char){
      case "G":{
        result += "C";
        break;
      }
      case "C":{
        result += "G";
        break;
      }
      case "T":{
        result += "A";
        break;
      }
      case "A":{
        result += "U";
        break;
      }
      default:{
        throw new Error("Invalid input DNA.");
        break;
      }
    } 
  }
  return result;
}
