export function isIsogram(phrase: string): boolean {
  phrase = phrase.toLowerCase();
  let arr: string[] = phrase.replace(/[- ]/g, "").split("");
  let result: boolean = true;
  
  arr.reduce((acc, value) => {
    if(acc.includes(value)) result = false;
    acc.push(value);
    return acc;
  }, [] as string[]);
  return result;
}
