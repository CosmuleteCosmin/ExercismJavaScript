export const toRoman = (arabic: number) => {
  let roman: string = "";
  
  while(arabic >= 1000){
    arabic -= 1000;
    roman += 'M';
  }
  
  if(arabic >= 900){
    arabic -= 900;
    roman += "CM";
  }
  
  if(arabic >= 500)
  {
    arabic -= 500;
    roman += "D";
  }

  if(arabic >= 400){
    arabic -= 400;
    roman += "CD";
  }

  while(arabic >= 100){
    arabic -= 100;
    roman += "C";
  }

  if(arabic >= 90){
    arabic -= 90;
    roman += "XC";
  }
  
  if(arabic >= 50)
  {
    arabic -= 50;
    roman += "L";
  }

  if(arabic >= 40){
    arabic -= 40;
    roman += "XL";
  }

  while(arabic >= 10){
    arabic -= 10;
    roman +="X";
  }

  if(arabic >= 9){
    arabic -= 9;
    roman += "IX";
  }

  if(arabic >= 5)
  {
    arabic -= 5;
    roman += "V";
  }

  if(arabic >= 4){
    arabic -= 4;
    roman += "IV";
  }

  while(arabic >= 1){
    arabic -= 1;
    roman +="I";
  }

  return roman;
}
