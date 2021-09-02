function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear Text 
    inputField.value ="";
    return amountValue;
}

function updateTotalField(totalFieldId, newDepositAmount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newDepositTotal = previousTotal + newDepositAmount
    totalElement.innerText = newDepositTotal;

}
function getCurrentBalance(){
    const depositBalance = document.getElementById('total-balance ');
    const depositBalanceText = depositBalance.innerText;
    const totalBalance =parseFloat(depositBalanceText);
    return totalBalance;

}


function updateBalance(newDepositAmount, isAdd){
    const depositBalance = document.getElementById('total-balance ');
    // const depositBalanceText = depositBalance.innerText;
    // const totalBalance =parseFloat(depositBalanceText);
    const totalBalance = getCurrentBalance();

    if(isAdd == true){
        const newBalance = totalBalance + newDepositAmount;
        depositBalance.innerText = newBalance;

    }else{
        const newBalance = totalBalance - newDepositAmount;
        depositBalance.innerText = newBalance;

    }


}


// handle deposit button

document.getElementById('deposit-btn').addEventListener('click', function(){
    // Get the Deposit amount 
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);

    }
    



    // get and Update Deposit total
   /*  const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal; */
    // depositInput.value ="";
    

    // Update account balance
    /* const depositBalance = document.getElementById('total-balance ');
    const depositBalanceText = depositBalance.innerText;
    const totalBalance =parseFloat(depositBalanceText);
    const newBalance = totalBalance + newDepositAmount;
    depositBalance.innerText = newBalance; */
   
});

// Withdraw buttton update

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);  
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false)
    }if(newWithdrawAmount > currentBalance){
        window.alert('Youe can not withdraw mote thad what your account balance')
    }
    

    //get and Update withdraw total

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */

    

    // Clear with draw input
    // withdrawInput.value ="";

    // Update Balance
    /* const balanceTotal = document.getElementById('total-balance ');
    const prefviousBalanceText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(prefviousBalanceText);
    const newBalanceTotal = previouseBalanceTotal -newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */
    

});