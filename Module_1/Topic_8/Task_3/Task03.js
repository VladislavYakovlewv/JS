{
    const generator = (number, m, n, stroka) =>{
        const random = Array(number);

        for(let i = 0; i < number; i++){
            random[i] = Math.floor(Math.random() * (m - n) + n );

        }
        if(stroka === 'even'){
           const randoms = random.filter(function (num) {
            return num % 2 === 0
          })

           return randoms;

        }
        else if(stroka === 'odd'){
            const randoms = random.filter(function (num) {
                return num % 2 !== 0
              })
    
            return randoms;
        }
        else{
            return alert('Нет такой команды!')
        }
      }
  
      console.log(generator(+prompt("Введите количество элементов массива: "), +prompt("Введите первую границу: "), +prompt("Введите вторую границу: "), prompt("Введите команду even или odd: ") ));
    
}