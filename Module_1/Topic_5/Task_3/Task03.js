{

    const ReverseStr = (str) => {
    return  str.split("").reverse().join("");
    }
    
    const str = prompt('Введите строку:',' ');
    console.log(ReverseStr(str));
    }