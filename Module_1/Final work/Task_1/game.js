'use strict';

(() => {
  const computerAnswer = ['чётное', 'нечётное'];
  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };
  const result = {
    player: 5,
    computer: 5,
    playerMove() {
      if (result.player === 0 || result.computer === 0) {
        alert('Игра окончена!');
        alert('Количество шариков\nИгрок: ' + result.player +
        '\nКомпьютер: ' + result.computer);
        const repeat = prompt('Хотите сыграть ещё?');
        if (repeat === '') {
          result.player = 5;
          result.computer = 5;
          result.game();
        } else if (repeat === null) {
          return 0;
        } else {
          throw new Error('Stop script');
        }
      }


      alert('Количество шариков\nИгрок: ' + result.player +
      '\nКомпьютер: ' + result.computer);
      const computerChange = getRandomIntInclusive(1, result.computer);
      const playerChange = prompt('Попробуйте угадать чётное или нечётное');

      if (playerChange === null) {
        return 0;
      }

      if (playerChange === 'чётное' || playerChange === 'нечётное') {
        if (computerChange % 2 === 0 && playerChange === 'чётное') {
          alert('Вы угадали)');
          result.player += computerChange;
          result.computer -= computerChange;
          result.computerMove();
        } else if (computerChange % 2 === 1 && playerChange === 'нечётное') {
          alert('Вы угадали)');
          result.player += computerChange;
          result.computer -= computerChange;
          result.computerMove();
        } else {
          alert('Вы не угадали(');
          if (computerChange > result.player) {
            result.player = 0;
            result.computer = 10;
            result.computerMove();
          } else {
            result.player -= computerChange;
            result.computer += computerChange;
            result.computerMove();
          }
        }
      } else {
        result.playerMove();
      }
    }, computerMove() {
      if (result.player === 0 || result.computer === 0) {
        alert('Игра окончена!');
        alert('Количество шариков\nИгрок: ' + result.player +
        '\nКомпьютер: ' + result.computer);
        const repeat = prompt('Хотите сыграть ещё?');
        if (repeat === '') {
          result.player = 5;
          result.computer = 5;
          result.game();
        } else if (repeat === null) {
          return 0;
        } else {
          throw new Error('Stop script');
        }
      }

      alert('Количество шариков\nИгрок: ' + result.player +
      '\nКомпьютер: ' + result.computer);
      const playerChange =
      +prompt('Введите число от 1 до количества ваших шариков');

      if (playerChange === null) {
        return 0;
      }

      if (playerChange > 0 && playerChange <= result.player) {
        const computerChange = computerAnswer[getRandomIntInclusive(0, 1)];
        if (playerChange % 2 === 0 && computerChange === 'чётное') {
          alert('Компьютер угадал(');
          result.player -= playerChange;
          result.computer += playerChange;
          result.playerMove();
        } else if (playerChange % 2 === 1 && computerChange === 'нечётное') {
          alert('Компьютер угадал(');
          result.player -= playerChange;
          result.computer += playerChange;
          result.playerMove();
        } else {
          alert('Компьютер не угадал)');
          if (playerChange > result.computer) {
            result.player = 10;
            result.computer = 0;
            result.playerMove();
          } else {
            result.player += playerChange;
            result.computer -= playerChange;
            result.playerMove();
          }
        }
      } else {
        result.computerMove();
      }
    },
    game() {
      return function start() {
        alert('Старт игры!\n');
        const firstMove = getRandomIntInclusive(0, 1);
        if (firstMove === 0) {
          alert('По решению великого рандома первым ходит компьютер');
          result.playerMove();
        } else {
          alert('По решению великого рандома первым ходит игрок');
          result.computerMove();
        }
      };
    },
  };

  window.rps = result.game;
})();
