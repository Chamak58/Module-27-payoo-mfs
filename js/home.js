//add money to the account:
/**
 s-1: add event handler
    prevent page reload to the account balance
 s-2: get money and pin to be added to the account
 s-3: verify pin number
 s-4: get the current balance
 s-5: add inputAddMoney with balance
 s-6: update the balance in the UI/DOM

 */

//step-1: add an event handler to the send now button inside the form
document.getElementById('btn-send-now').addEventListener('click', function(event){

    //prevent page reload after form submit 
    event.preventDefault();
    //console.log('add money button clicked')

// step-2 : get money to be added to the account
    const inputAddMoney = document.getElementById('input-add-money').value;
    console.log(inputAddMoney);
//  get the pin number provided
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);

//  verify pin number
    if(inputPinNumber === '1234'){
        console.log('adding money to your account')

        //step-4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step-5: add inputAddMoney with balance
        const addMoneyNumber = parseFloat(inputAddMoney);
        //console.log(typeof addMoneyNumber);
        const balanceNumber = parseFloat(balance);
        //console.log(typeof balanceNumber);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        
        //step-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money!')
    }



})