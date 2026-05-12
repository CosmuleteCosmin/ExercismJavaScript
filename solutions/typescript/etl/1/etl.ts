export function transform(old: {[key: string]: string[]}): {[key: string]: number} {
  let result :{[key: string]: number} = {};
  for(let key in old){
    for(let letter of old[key]){
      result[letter.toLowerCase()] = Number(key);
    }
  }
  return result;
}
