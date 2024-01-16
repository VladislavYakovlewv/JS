{
    const ProductName = "PC";
    const Quantity = 12;
    const Category = "electronics";
    const Cost = 60000;
    
    console.log('Product name: ', ProductName);
    console.log('General сost of products:', Cost * Quantity);
}

{
    const ProductName = "Camera";
    const Quantity = 7;
    const Category = "electronics";
    const Cost = 8000;
}

{

    const ProductName = prompt('Enter the product name: ', '');
    const Quantity = +prompt('Enter the quantity of the product: ', '');
    const Category = prompt('Enter the product category: ', '');
    const Cost = +prompt('Enter the price of the product: ', '');

    if(Number.isInteger(Quantity) && Number.isInteger(Cost) ){
    console.log('ProductName: ', typeof ProductName);
    console.log('Category: ', typeof Category);
    console.log('Quantity: ', typeof Quantity);
    console.log('Cost: ', typeof Cost);
    console.log(`In the warehouse ${Quantity} product units "${ProductName}" for the amount of ${Cost * Quantity} rubles`);
    }
    else{
        console.log('Вы ввели некорректные данные');
    }

    

    
}