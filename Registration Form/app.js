const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const email = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const birthDate = document.getElementById("birthDate");


form.addEventListener('submit', e => {

    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    console.log(1);
    // trim to remove the whitespaces
    const fullNameValue = fullName.value.trim();
    if (fullNameValue === "") {

        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
        console.log(12);
    }
    console.log(12);
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}