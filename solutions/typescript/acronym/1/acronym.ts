export function parse(phrase: string): string {
  let acronym: string = "";
  let arr: string[] = phrase.replace("-"," ").replace(/([a-z])([A-Z])/g, "$1 $2").split(/\s+/);
  for(let word of arr){
    acronym = acronym.concat(word[0].toUpperCase());
  }
  return acronym;
}
