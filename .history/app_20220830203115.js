document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const flagsleft = document.querySelector("#flags-left");
  const result = document.querySelector("#result");
  let width = 10;
  let bombAmount = 20;
  let flags = 0;
  let squares = [];
  let isGameOver = false;


  // create Board 

  function createBoard() {
    flagsleft.innerHTML = bombAmount

    const bombArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width*width - bombAmount)
  }
});
