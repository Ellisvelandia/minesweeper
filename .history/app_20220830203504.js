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

    const bombsArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width*width - bombAmount).fill('valid')
    const gameArray = emptyArray.concat(bombsArray)
    const shuffleArray = gameArray.sort(() => Math.random() - 0.5)

    for (let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
  square.set      
    }
  }
});
