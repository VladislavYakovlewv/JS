
{
    const Account = +prompt('Enter how much money you want to withdraw: ', '');
    if((Account % 100) === 0){
        console.log('An ATM can issue money');
    }
    else{
        console.log('ATM cannot issue money');
    }
}