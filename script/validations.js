function validateSignupForm(){
    var hasError = false;
    var emri = document.signupForm.emri.value
    var mbiemri = document.signupForm.mbiemri.value
    var email = document.signupForm.email.value
    var username = document.signupForm.username.value
    var password1 = document.signupForm.password1.value
    var password2 = document.signupForm.password2.value

    if(emri == null || emri == ""){
        document.getElementById("nameErrorValidation").innerHTML = "Ju lutem, shkruani emrin tuaj!"
        document.getElementById("nameErrorValidation").style.color = "red";
        hasError = true;
    }

    if(mbiemri == null || mbiemri == ""){
        document.getElementById("surnameErrorValidation").innerHTML = "Ju lutem, shkruani mbiemrin tuaj!"
        document.getElementById("surnameErrorValidation").style.color = "red";
        hasError = true;
    }

    document.getElementById("emailErrorValidation").style.color = "red"
    if(email == null || email == ""){
        hasError = true;
        document.getElementById("emailErrorValidation").innerHTML = "Ju lutem shkruani emailin tuaj!"
    } else if(!validateEmail(email)){
            hasError = true;
            document.getElementById("emailErrorValidation").innerHTML = "Email nuk eshte shkruar ne formen e duhur!"
    }

    if(username==null || username == ""){
        hasError = true;
        document.getElementById("usernameErrorValidation").style.color = "red";
        document.getElementById("usernameErrorValidation").innerHTML = "Ju lutem, shkruani nje emer perdoruesi!"
    }

    document.getElementById("passowrd1ErrorValidation").style.color = "red";
    if(password1 == null || password1 == ""){
        document.getElementById("passowrd1ErrorValidation").innerHTML = "Ju lutem, shkruani fjalekalimin tuaj!"
        hasError = true;
    } else if(String(password1).length < 6) {
        hasError = true;
        document.getElementById("passowrd1ErrorValidation").innerHTML = "Fjalekalimi duhet te pakten 6 karaktere!"
    }

    if(String(password1) != String(password2)) {
        hasError = true;
        document.getElementById("password2ErrorValidation").style.color = "red"
        document.getElementById("password2ErrorValidation").innerHTML = "Fjalekalimi nuk perputhet!"
    }

    if(!hasError){
        try {
            alert("Jeni regjistruar me sukses")
        }
        catch(err) {
            document.getElementById("div-for-err").innerHTML = err.message;
        }
    }

    return !hasError
}

function validateEmail(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase())
}

function validateLogInForm(){
    var hasErrorInLogin = false;
    var loginUsername = document.loginForm.username.value
    var loginPassword = document.loginForm.password.value

    if(loginUsername == null || loginUsername == ""){
        hasErrorInLogin = true;
        document.getElementById("usernameErrorValidation").style.color = "red";
        document.getElementById("usernameErrorValidation").innerHTML = "Ju lutemi shkruani emrin e perdoruesit!"
    }

    document.getElementById("passwordErrorValidation").style.color = "red";
    if(loginPassword == null || loginPassword == ""){
        document.getElementById("passwordErrorValidation").innerHTML = "Ju lutem, shkruani fjalekalimin tuaj!"
        hasErrorInLogin = true;
    } else if(String(loginPassword).length < 6) {
        hasErrorInLogin = true;
        document.getElementById("passwordErrorValidation").innerHTML = "Fjalekalimi duhet te pakten 6 karaktere!"
    }
    
    return !hasErrorInLogin
}

function validateFeedBackForm(){
    var hasErrorInFeedBackForm = false;
    var subject = document.feedbackForm.subject.value

    if(String(subject).trim().length == 0){
        hasErrorInFeedBackForm = true
        document.getElementById("textErrorValidation").style.color = "red"
        document.getElementById("textErrorValidation").innerHTML = "Nese deshironi te na dergoni feedback, atehere duhet te shkruani tekst!"
    }

    if(!hasErrorInFeedBackForm){
        try {
            alert("Ju falenderojme shume!")
        }
        catch(err) {
            document.getElementById("div-for-err").innerHTML = err.message;
        }
    }
    return !hasErrorInFeedBackForm;
}

function validateContactForm() {
    var hasErrorInContactForm = false;
    let name = document.contactForm.emri.value
    let email = document.contactForm.email.value

    if(name == null || name == ""){
        hasErrorInContactForm = true;
        document.getElementById("nameContactValidation").style.color = "red";
        document.getElementById("nameContactValidation").innerHTML = "Ju lutemi, shkruani emrin!"
    }

    document.getElementById("emailContactValidation").style.color = "red"
    if(email == null || email == ""){
        hasErrorInContactForm = true;
        document.getElementById("emailContactValidation").innerHTML = "Ju lutem shkruani emailin tuaj!"
    } else if(!validateEmail(email)){
        hasErrorInContactForm = true;
            document.getElementById("emailContactValidation").innerHTML = "Email nuk eshte shkruar ne formen e duhur!"
    }

    if(!hasErrorInContactForm){
        try {
            alert("Ju faleminderit!")
        }
        catch(err) {
            document.getElementById("div-for-err").innerHTML = err.message;
        }
    }
    
    return !hasErrorInContactForm
}