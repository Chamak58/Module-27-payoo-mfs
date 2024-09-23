//console.log('cash out connected')
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out btn activated');

    const inputCashOut = document.getElementById('input-cash-out').value;
    console.log(inputCashOut);
    const inputCashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(inputCashOutPin)

    if(inputCashOutPin === '1234'){
        console.log('Money is deducted');

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        const balanceNumber = parseFloat(balance);
        console.log(balanceNumber);
        const inputCashOutNumber = parseFloat(inputCashOut);
        console.log(inputCashOutNumber);

        const updateBalance = balanceNumber - inputCashOutNumber;

        console.log(updateBalance);


        document.getElementById('account-balance').innerText = updateBalance;

    }

    else{
        alert('Failed to cash out');
    }

});