export const recite = (
  initialBottleCount: number,
  takeDownCount: number
): string[] => {
  let result: string[] = [];
  for(let i = 1; i <= takeDownCount; i++){
    result.push(`${map[initialBottleCount]} green ${initialBottleCount  === 1 ? "bottle": "bottles"} hanging on the wall,`);
    
    result.push(`${map[initialBottleCount]} green ${initialBottleCount  === 1 ? "bottle": "bottles"} hanging on the wall,`);
    
    result.push(`And if one green bottle should accidentally fall,`);
    
    result.push(`There'll be ${map[initialBottleCount - 1].toLowerCase()} green ${initialBottleCount - 1 === 1 ? "bottle": "bottles"} hanging on the wall.`);

    if (i < takeDownCount) {
      result.push(``);
    }
    
    initialBottleCount--;
  }
  return result;
}

const map: {[key: number]: string} = {
  0:"no",
  1:"One",
  2:"Two",
  3:"Three",
  4:"Four",
  5:"Five",
  6:"Six",
  7:"Seven",
  8:"Eight",
  9:"Nine",
  10:"Ten",
};
