// document.getElementById('btn-login').addEventListener('click', function(){
//     console.log('I am clicked');
// })

//console.log('I am clicked');

// step-1 : set event handler
document.getElementById('btn-login')
.addEventListener('click', function(event){
    
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    //console.log('checked');

    //step-3: get the phone number and pin number
    const phoneNumber = document.getElementById('phn-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    //step-4: validate phone and pin
    //this is temporary used
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('Correct login');
        window.location.href = '/home.html';
    }
    else{
        console.log('Incorrect login')
    }




})