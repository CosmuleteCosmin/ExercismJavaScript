export function steps(count: number): number {
  let steps: number = 0;
  if(count <= 0 || Math.floor(count) !== count){
    throw new Error('Only positive integers are allowed');
  }
  while( count !== 1){
    if(count % 2 === 0){
      count = Math.floor(count / 2);
    }
    else{
      count = count * 3 + 1;
    }
    steps++;
  }
  return steps;
}
