function showSecondCard() {
    document.getElementById('stayUpdatedCard').classList.add('hidden');
    document.getElementById('thankYouCard').classList.remove('hidden');
    
}
function dismissThankYouCard() {
    document.getElementById('thankYouCard').classList.add('hidden');
}
function validateEmail(event){
    event.preventDefault();

    var emailInput = document.getElementById("userEmail");
    var email = emailInput.value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)){
        emailInput.classList.add('error');
        document.getElementById("email-error").style.display = "block";
    } 
    else{
        emailInput.classList.remove('error');
        document.getElementById("email-error").style.display = "none";
        showSecondCard();
    }
}