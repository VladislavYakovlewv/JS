'use strict';
{
  const mass = [];

  const generator = (mass) => {
    const chis = Math.floor(Math.random() * (11 - 1) + 1);
    console.log(`Сгенерированное число = ${chis}`);
    mass.push(chis);
    const result = mass.reduce((previousValue, currentValue,
        currentIndex, array) => previousValue + currentValue, 0);
    if (result < 50) {
      console.log(`Сумма массива = ${result}`);
      return generator(mass);
    } else {
      console.log(`Итоговая сумма массива = ${result}`);
      return mass;
    }
  };
  generator(mass);
}
