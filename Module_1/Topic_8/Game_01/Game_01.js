{
    const chis = Math.floor(Math.random() * (100 - 1) + 1);

    while(true){

        result = prompt('Отгадайте число от 1 до 100, которое я загадал');

       if(result === null){
        break;
       }
       else if(result > chis){
        alert('Меньше!');
       }
       else if( result < chis){
        alert('Больше');
       }
       else if(result === chis){
        alert('Правильно!');
        break;
       }
       else{
        alert('Введите число!');
       }
    }
    
}