let generateRandom = function () {
  let randomNum = Math.floor(Math.random() * 100);
  console.log("Случайное число  " + randomNum);

  // let endА = confirm(' Игра закончена!')
  function guessNum() {
    let userInput = +prompt(" Угадай число от 1 до 100");
    console.log(" ввод пользователя:  " + userInput);
    if (userInput == false) {
      return confirm(" Игра закончена!");
    }
    if (userInput > randomNum) {
      alert(" Загаданное число меньше");
    } else if (userInput < randomNum) {
      alert(" Загаданное число больше");
    } else if (isNaN(userInput)) {
      alert(" Введи число");
    } else {
      return alert(" Поздравляю, Вы угадали");
    }
    guessNum();
  }

  guessNum();
};
generateRandom();
