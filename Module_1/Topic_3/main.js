{
    const ProductName = "PC";
    const Quantity = 12;
    const Category = "electronics";
    const Cost = 60000;
    
    console.log('Наименование товара: ', ProductName);
    console.log('Общая стоймость товаров:', Cost * Quantity);
}

{
    const ProductName = "Camera";
    const Quantity = 7;
    const Category = "electronics";
    const Cost = 8000;
}

{

    const ProductName = prompt('Введите наименование товара: ', '');
    const Quantity = +prompt('Введите количество товара: ', '');
    const Category = prompt('Введите категорию товара: ', '');
    const Cost = +prompt('Введите цену товара: ', '');

    console.log('Наименование: ', typeof ProductName);
    console.log('Категория: ', typeof Category);
    console.log('Количество товара: ', typeof Quantity);
    console.log('Цена: ', typeof Cost);
    console.log(`На складе ${Quantity} единицы товара "${ProductName}" на сумму ${Cost * Quantity} рублей`);

    
}