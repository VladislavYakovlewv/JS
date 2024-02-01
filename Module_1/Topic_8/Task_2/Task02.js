{
    const generator = (number, n, m) =>{
        const random = Array(number);
        for(let i = 0; i < number; i++){
          random[i] = Math.floor(Math.random() * (m - n) + n );
        }
        return random;
      }
  
      console.log(generator(+prompt("Введите количество элементов массива: "), +prompt("Введите первую границу: "), +prompt("Введите вторую границу: ")));
}