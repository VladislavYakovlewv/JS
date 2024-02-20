'use strict';
{
  const chis = Math.floor(Math.random() * (101 - 1) + 1);

  const rec = (chis) => {
    const result = +prompt('Отгадайте число от 1 до 100, которое я загадал');

    if (result === '' || result === null) {
      alert('Строка не может быть пустой!');
      rec(chis);
    }

    if (result === chis) {
      alert('Правильно!');
      return 0;
    } else if (result > chis) {
      alert('Меньше!');
      rec(chis);
    } else if (result < chis) {
      alert('Больше!');
      rec(chis);
    } else {
      alert('Введите число!');
      rec(chis);
    }
  };

  rec(chis);
}
