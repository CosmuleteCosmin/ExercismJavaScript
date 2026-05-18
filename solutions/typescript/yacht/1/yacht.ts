//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const enum Category {
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXES,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  LITTLE_STRAIGHT,
  BIG_STRAIGHT,
  CHOICE,
  YACHT,
}

export const score = (dice: number[], category: Category): number => {
  switch(category){
    case Category.ONES:
      return countSingle(dice,1);
      break;
    case Category.TWOS:
      return countSingle(dice,2);
      break;
    case Category.THREES:
      return countSingle(dice,3);
      break;
    case Category.FOURS:
      return countSingle(dice,4);
      break;
    case Category.FIVES:
      return countSingle(dice,5);
      break;
    case Category.SIXES:
      return countSingle(dice,6);
      break;
    case Category.FULL_HOUSE:
      return fullHouse(dice);
      break;
    case Category.FOUR_OF_A_KIND:
      return fourOfAKind(dice);
      break;
    case Category.LITTLE_STRAIGHT:
      return littleStraight(dice);
      break;
    case Category.BIG_STRAIGHT:
      return bigStraight(dice);
      break;
    case Category.CHOICE:
      return choice(dice);
      break;
    case Category.YACHT:
      return yacht(dice);
      break;
    default:
      return 0;
  }
}

const countSingle = (dice:number[], target: number): number => {
  return dice.filter((value) => value === target).length * target;
}

const fullHouse = (dice:number[]):number => {
  const counts: Record<number, number> = {};
  for(const die of dice){
    counts[die] = (counts[die] || 0) + 1;
  }

  const frequencies = Object.values(counts);
  if(frequencies.includes(3) && frequencies.includes(2))
   return dice.reduce((sum, current) => sum + current, 0);
  return 0;
}

const fourOfAKind = (dice:number[]):number => {
  dice = dice.sort();
  
  if( (dice[0] === dice[1] || dice[3] === dice[4]) && dice[1] === dice[2] && dice[2] === dice[3])
    return dice[2] * 4;
  return 0;
}

const littleStraight = (dice:number[]):number => {
  dice.sort();
  for(let i = 0; i < 5; i++){
    if(dice[i] !== i + 1) return 0;
  }
  return 30;
}

const bigStraight = (dice:number[]):number => {
  dice = dice.sort();
  for(let i = 0; i < 5; i++){
    if(dice[i] !== i + 2) return 0;
  }
  return 30;
}

const choice = (dice:number[]):number => {
  return dice.reduce((acc,value:number) => acc + value, 0);
}

const yacht = (dice:number[]):number => {
  if(dice.every((value) => value === dice[0])) return 50;
  return 0;
}
