{
    

    const generator = (number) =>{
      const random = Array(number);
      for(let i = 0; i < number; i++){
        random[i] = Math.floor(Math.random() * 100 );
      }
      return random;
    }

    console.log(generator(+prompt("Введите число: ")));
}