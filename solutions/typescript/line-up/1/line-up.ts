export function format(name: string, number: number): string {
  let value:string;
  if(number % 10 == 1 && number % 100 != 11){
    value = `${number}st`;
  }
  else if(number % 10 == 2 && number % 100 != 12){
    value = `${number}nd`;
  }
  else if(number % 10 == 3 && number % 100 != 13){
    value = `${number}rd`;
  }
  else{
    value = `${number}th`;
  }
  return name + ", you are the " + value + " customer we serve today. Thank you!"
}
