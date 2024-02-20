'use strict';
{
  const cart = {
    items: [],
    count: 0,
    discount: 0,
    get TotalPrice() {
      return console.log(
        `Общая стоймость товаров: ${this.calculateItemPrice()}`);
    },
    set setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount = 15;
      } else if (promocode === 'NEWYEAR') {
        this.discount = 21;
      } else {
        this.discount = 0;
      }
    },
    // getTotalPrice (){
    // console.log(`Общая стоймость товаров: ${this.TotalPrice}`);
    // },

    add(name, cost, countItem) {
      const product = {};
      product.name = name;
      product.cost = cost;
      product.countItem = countItem;

      this.items.push(product);
      this.increaseCount(product.countItem);
    },

    increaseCount(number) {
      this.count += number;
    },

    calculateItemPrice() {
      return (1 - (this.discount / 100)) *
      (this.items.reduce((previousValue, currentValue) =>
        previousValue + (currentValue.cost * currentValue.countItem), 0));
    },

    clear() {
      this.items = [];
      this.count = 0;
    },

    print() {
      const CartStr = JSON.stringify(cart.items);
      console.log('CartStr:', CartStr);
      cart.TotalPrice;
      this.getTotalCount();
    },
    // Для себя
    getTotalCount() {
      console.log(`Общее количество товаров: ${this.count}`);
    },

  };

  cart.setDiscount = 'METHED';
  console.log(`Скидка = ${cart.discount}%`);
  cart.add('Игра', 1000, 2);
  cart.add('Фильм', 2000, 3);
  cart.add('Сериал', 500, 5);
  cart.print();
  console.log(' ');
  cart.add('Книга', 300, 4);
  cart.print();
  console.log(' ');
  cart.clear();
  cart.print();
}
