export const gamestate = (board: string[]): string => {
  let winner: string | null = null;
  const acc = board.reduce((count, row) => {
    for (const char of row) {
      if (char === "X") count.X++;
      if (char === "O") count.O++;
    }
    return count;
  }, { X: 0, O: 0 });

  if (acc.X - acc.O > 1) throw new Error("Wrong turn order: X went twice");
  if (acc.O > acc.X) throw new Error("Wrong turn order: O started");

  const checkWin = (value: string) => {
      if (winner && winner !== value) {
        throw new Error("Impossible board: game should have ended after the game was won");
      }
      winner = value;
    };
    
  for (let i = 0; i < 3; i++) {
      if (board[i][0] !== " " && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        checkWin(board[i][0]);
      }
      if (board[0][i] !== " " && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        checkWin(board[0][i]);
      }
    }
    
  if (board[1][1] !== " ") {
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) checkWin(board[1][1]);
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) checkWin(board[1][1]);
    }
  
  if (winner === "X" && acc.X === acc.O) {
    throw new Error("Impossible board: game should have ended after the game was won");
  }
  if (winner === "O" && acc.X > acc.O) {
    throw new Error("Impossible board: game should have ended after the game was won");
  }
  
  if (winner) return "win";
  
  return board.some(row => row.includes(" ")) ? "ongoing" : "draw";
}

