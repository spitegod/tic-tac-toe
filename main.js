var board = document.getElementById("board");
var cells = board.getElementsByClassName("cell");
var currentPlayer = "X";

function handleCellClick() {
  if (this.innerHTML !== "") {
    return;
  }
  
  this.innerHTML = currentPlayer;
  
  if (checkForWinner()) {
    alert(currentPlayer + " победил!");
    resetBoard();
    return;
  }
  
  if (checkForDraw()) {
    alert("Ничья!");
    resetBoard();
    return;
  }
  
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWinner() {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (var i = 0; i < winningCombinations.length; i++) {
    var combo = winningCombinations[i];
    
    if (cells[combo[0]].innerHTML === currentPlayer &&
        cells[combo[1]].innerHTML === currentPlayer &&
        cells[combo[2]].innerHTML === currentPlayer) {
      return true;
    }
  }
  
  return false;
}

function checkForDraw() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      return false;
    }
  }
  
  return true;
}

function resetBoard() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  
  currentPlayer = "X";
}

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleCellClick);
}
