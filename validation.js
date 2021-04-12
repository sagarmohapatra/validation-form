let validateForm = () => {
    let isFormValid = validateUserName()
        && validateEmail()
        && validatePassword()
        && validateConfirmPassword()
        && passwordMatch();
    if (isFormValid) {
        alert('Form Is Submitted Successfully');
        return true;
    }
    else {
        return false;
    }
}

//validate Username

let validateUserName = () => {
    let inputElement = document.querySelector('#username');
    if (inputElement.value === '') {
        applyColors(inputElement, 'orangered');
        displayErrorMsg('Username Is Required');
        return false;
    }
    else {
        applyColors(inputElement, 'limegreen');
        return true;

    }

}

//validate Email

let validateEmail = () => {
    let inputElement = document.querySelector('#email');

    if (inputElement.value === '') {
        applyColors(inputElement, 'orangered');
        displayErrorMsg('Email Is Required');
        return false;
    }
    else {
        applyColors(inputElement, 'limegreen');
        return true;
    }
}

//validate Password

let validatePassword = () => {
    let inputElement = document.querySelector('#password');

    if (inputElement.value === '') {
        applyColors(inputElement, 'orangered');
        displayErrorMsg('Password Is Required');
        return false;
    }
    else {
        applyColors(inputElement, 'limegreen');
        return true;
    }
}


//validate Confirm Password

let validateConfirmPassword = () => {
    let inputElement = document.querySelector('#c_password');

    if (inputElement.value === '') {
        applyColors(inputElement, 'orangered');
        displayErrorMsg('Confirm Password Is Required');
        return false;
    }
    else {
        applyColors(inputElement, 'limegreen');
        return true;
    }
}

//password Match

let passwordMatch = () => {
    let password = document.querySelector('#password');
    let cPassword = document.querySelector('#c_password');
    if (password.value === cPassword.value) {
        applyColors(password, 'limegreen');
        applyColors(cPassword, 'limegreen');
        return true;
    }
    else {
        displayErrorMsg('Passwords Are Not Matched');
        applyColors(password, 'orangered');
        applyColors(cPassword, 'orangered');
        return false;
    }
}

//apply colors

let applyColors = (inputElement, color) => {
    inputElement.style.borderColor = color;
    inputElement.style.boxShadow = `0 0 10px ${color}`;
}

//displayErrormsg

let displayErrorMsg = (message) => {
    let errMsg = document.querySelector('#error-msg');
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = message;
    errMsg.appendChild(h3Tag);
    setTimeout(removeElement, 2000);
}


//remove tag

let removeElement = () => {
    document.querySelector('#error-msg').remove();
}