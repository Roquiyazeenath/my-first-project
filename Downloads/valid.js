var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

function validated() {
    let valid = true;

    // Validate email input
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        valid = false;
    } else {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }

    // Validate password input
    if (password.value.length < 9) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        valid = false;
    } else {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }

    return valid;
}

function email_Verify() {
    if (email.value.length >= 9) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }
}

function pass_Verify() {
    if (password.value.length >= 9) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }
}
