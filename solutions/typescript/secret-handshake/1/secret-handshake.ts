export function commands(number: number): string[]{
  let operations: string[] = [];
  let binaryNumber: number[] = [];
  
  while( number > 0){
    binaryNumber.push(number % 2);
    number = Math.floor(number / 2);
  }
  
  if(binaryNumber[0] === 1)
    operations.push("wink");
  if(binaryNumber[1] === 1)
    operations.push("double blink");
  if(binaryNumber[2] === 1)
    operations.push("close your eyes");
  if(binaryNumber[3] === 1)
    operations.push("jump");
  if(binaryNumber[4] === 1)
    operations.reverse();

  return operations;
}
