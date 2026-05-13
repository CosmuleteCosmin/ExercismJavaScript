export const gamestate = (board: string[]): string => {
  let player = "";
  let acc = board.reduce(
    (acc, row) => {
      for(let i = 0; i < 3; i++){
        if(row[i] === "X"){
          acc.X++;
        }
        if(row[i] === "O"){
          acc.O++;
        }
      }
      return acc;
    }, {X : 0, O : 0});

  if(acc.X - acc.O > 1)
    throw new Error("Wrong turn order: X went twice");
  if(acc.X - acc.O === -1)
    throw new Error("Wrong turn order: O started");
  
  for(let i = 0; i < 3; i++){
    if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] != " ")
      player = verifyWin(board[i][0], player);
    if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] != " ")
      player = verifyWin(board[0][i], player);
  }
  
  if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] != " ")
    player = verifyWin(board[0][0], player);

  if(board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] != " ")
    player = verifyWin(board[1][1], player);
  
  if(player != "")
    return "win";
  for(let row of board){
    if(row.includes(" "))
      return "ongoing";
  }
  return "draw";
}

function verifyWin(value:string, player:string): string{
  if(player === ""){
      player = value;
  }
  else if(player != value){
      throw new Error('Impossible board: game should have ended after the game was won');
  }
  return player;
}
