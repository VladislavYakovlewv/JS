{
    const isPrime = (num) => {
        for(let i = 2, j = Math.sqrt(num); i <= j; i++) {
            if(num % i === 0){
                return false;
            }
        }
        return true;        
    }
    
    num = +prompt('Введите число для проверки:', ' ')
    
    if(num > 1){
        const result = isPrime(num);
        (result === true)? console.log('Число простое!') : console.log('Число составное!');
    }
    else{
        alert('Число не может быть меньше 1!');
    }
    

    

   
}