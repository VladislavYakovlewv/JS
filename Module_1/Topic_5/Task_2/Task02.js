{

const ModStr = (str) => {
return  str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const str = prompt('Введите строку:',' ');
console.log(ModStr(str));
}