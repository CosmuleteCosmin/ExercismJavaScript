//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let value = "";
  
  if(number % 10 == 1 && number % 100 != 11)
    value = "st";
  else if(number % 10 == 2 && number % 100 != 12)
    value = "nd";
  else if(number % 10 == 3 && number % 100 != 13)
    value = "rd";
  else  value = "th";

  return `${name}, you are the ${number}${value} customer we serve today. Thank you!`
};
