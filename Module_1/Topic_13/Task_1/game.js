'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const playerChange = prompt('Выберите: камень, ножницы, бумага');
      if (playerChange === null) {
        const PlayerChangeTwo = prompt('Вы точно хотите выйти?');
        if (PlayerChangeTwo === null) {
          alert(`Количество очков: \nИгрок: ${result.player} 
Компьютер: ${result.computer} `);
          return 0;
        } else {
          start();
        }
      }
      if (playerChange === '') {
        start();
      }
      const ComputerChange = FIGURES_RUS[getRandomIntInclusive(0, 2)];
      switch (playerChange) {
        case 'ножницы':
          if (ComputerChange === 'бумага') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: игрок победил');
            result.player++;
          }
          if (ComputerChange === 'камень') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: компьютер победил');
            result.computer++;
          }
          if (ComputerChange === 'ножницы') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: ничья');
          }
          start();
          break;
        case 'камень':
          if (ComputerChange === 'бумага') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: компьютер победил');
            result.computer++;
          }
          if (ComputerChange === 'камень') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: ничья');
          }
          if (ComputerChange === 'ножницы') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: игрок победил');
            result.player++;
          }
          start();
          break;
        case 'бумага':
          if (ComputerChange === 'бумага') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: ничья');
          }
          if (ComputerChange === 'камень') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
            playerChange.toLowerCase() + '\nРезультаты: игрок победил');
            result.player++;
          }
          if (ComputerChange === 'ножницы') {
            alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
        playerChange.toLowerCase() + '\nРезультаты: компьютер победил');
            result.computer++;
          }
          start();
          break;
        default:
          start();
          break;
      }
    };
  };


  window.rps = game;
})();
