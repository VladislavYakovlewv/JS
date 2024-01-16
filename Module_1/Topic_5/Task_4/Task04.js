{

    const calculate = (TotalSum, Quantity, Promo) =>{
        if(Quantity > 10){
            TotalSum = TotalSum * 0.97;
        }
        if(TotalSum > 30000){
            TotalSum = 30000 + ((TotalSum - 30000) * 0.85);

        }
        if(Promo === 'METHED'){
            TotalSum = TotalSum * 0.90;
        }
        if(Promo === 'G3H2Z1' && TotalSum > 2000){
            TotalSum = TotalSum - 500;
        }
        return TotalSum;
    }
    
    const TotalSum = +prompt('Введите общую сумму корзины:', ' ');
    const Quantity = +prompt('Введите количество товаров в корзине:', ' ');
    const Promo = prompt('Введите промокод:', ' ');

    console.log(calculate(TotalSum,Quantity,Promo));
}