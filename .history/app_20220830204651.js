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
    flagsleft.innerHTML = bombAmount;

    const bombsArray = Array(bombAmount).fill("bomb");
    const emptyArray = Array(width * width - bombAmount).fill("valid");
    const gameArray = emptyArray.concat(bombsArray);
    const shuffleArray = gameArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      square.classList.add(shuffleArray[i]);
      grid.appendChild(square);
      squares.push(square);

      square.addEventListener("click", function (e) {
        this.click(square);
      });

      square.oncontextmenu = function (e) {
        e.preventDefault();
        addFlag(square);
      };
    }

    for (let i = 0; i < squares.length; i++) {
      let total = 0;
      const isLeftEdge = i % width === 0;
      const isRightEdge = i % width === -1;

      if (squares[i].classList.contains("valid")) {
        if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb"))
          total++;
        if (
          i > 9 &&
          !isRightEdge &&
          squares[i + 1 - width].classList.contains("bomb")
        )
          total++;
        if (i > 10 && squares[i - width].classList.contains("bomb")) total++;
        if (
          i > 11 &&
          !isLeftEdge &&
          squares[i - 1 - width].classList.contains("bomb")
        )
          total++;
        if (i < 98 && !isRightEdge && squares[i + 1].classList.contains("bomb"))
          total++;
        if (
          i < 90 &&
          !isLeftEdge &&
          squares[i - 1 + width].classList.contains("bomb")
        )
          total++;
        if (
          i < 88 &&
          !isRightEdge &&
          squares[i + 1 + width].classList.contains("bomb")
        )
          total++;
        if (i < 89 && squares[i + width].classList.contains("bomb")) total++;
        squares[i].setAttribute("data", total);
      }
    }
  }

  createBoard()

 function addFlag(square) {
  if (isGameOver) return
  if (!square.classList.contains('checked') && (flags < bombAmount)){
    if (!square.classList.contains('flag')) {
      square.classList.add('flag')
      square.innerHTML = '????'
      flags ++
      flagsleft.innerHTML = bombAmount- flags
      checkForWin()
    }else {
      square.classList.remove('flag')
      square.
    }
  }
 }
});
