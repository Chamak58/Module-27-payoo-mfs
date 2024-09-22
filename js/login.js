// document.getElementById('btn-login').addEventListener('click', function(){
//     console.log('I am clicked');
// })

//console.log('I am clicked');

// step-1 : set event handler
document.getElementById('btn-login')
.addEventListener('click', function(event){
    
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('checked');

    //step-3: get the phone number
    const phoneNumber = document.getElementById('phn-number').value;
    console.log(phoneNumber);
})