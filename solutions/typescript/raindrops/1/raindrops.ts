export function convert(num: number):string {
  let result: string = "";
  if(num % 3 === 0){
    result = result.concat("Pling");
  }
  if(num % 5 === 0){
    result = result.concat("Plang");
  }
  if(num % 7 === 0){
    result = result.concat("Plong");
  }
  if(result === ""){
    result = num.toString();
  }

  return result;
}
