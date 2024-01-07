
const prompt = require('prompt-sync')();

const deposite = ()=> {

    while(true){
        const depositAmount = prompt("Enter a deposite amount: ")
        const numberDepositeAmount = parseFloat(depositAmount);
           
        if(isNaN(numberDepositeAmount) || numberDepositeAmount <= 0){
                console.log("Invalid deposite amount, try again.")
            }else{
                return numberDepositeAmount;
            }
    }
   

}

const depositAmount = deposite();
console.log(depositAmount)