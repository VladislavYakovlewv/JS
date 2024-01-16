
{
    const Math = +prompt('Enter the number of math scores: ', '');
    const RussianLanguage = +prompt('Enter the number of Russian language scores: ', '');
    const informatic = +prompt('Enter the number of informatic scores: ', '');

    if(Math + RussianLanguage + informatic >= 265){
        console.log('Congratulations, you have entered the budget!');
    }else{
        console.log('Unfortunately, you did not pass(');
    }


}