// Code your JavaScript / jQuery solution here
var currentGame = 0;
var turn = 0;

var WIN_COMBOS = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
  ]

  function player() {
    return turn % 2 ? "O" : "X"
  }

  function updateState() {
    
  }
