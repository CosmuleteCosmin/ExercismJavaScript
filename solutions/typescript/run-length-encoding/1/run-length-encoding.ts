export function encode(string:string): string {
  let result = "";

  for(let i = 0; i < string.length; i++){
    let count = 1;

    while(i + 1 < string.length && string[i] === string[i+1]){
      count++;
      i++;
    }

    result += (count > 1 ? count.toString() : "") + string[i];
  }

  return result;
}

export function decode(string:string): string {
  let result:string = "";
  
  for(let i = 0; i < string.length; i++){
    let count = 0;
    
    while(string[i] === Number(string[i]).toString()){
      count = count * 10 + Number(string[i]);
      i++;
    }
    
    if(count >= 1){
      for(let j = 0; j < count; j++)
        result += string[i];
    }
    else{
      result += string[i];
    }
  }
  
  return result;
}
