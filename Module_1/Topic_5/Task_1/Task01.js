{
    const ConvertEurToRub = (euro) =>{
        if(euro > 0){
            return euro * 95;
        }
        else{
            alert("Число меньше или равно 0!");
        }
    }

    const money = +prompt('Введите сколько евро вы хотите перевести в рубли:',' ');
    console.log(ConvertEurToRub(money));
   
    
}