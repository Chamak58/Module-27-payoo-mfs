//add money to the account:
/**
 s-1: add event handler
    prevent page reload to the account balance
 s-2: get money and pin to be added to the account


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

})