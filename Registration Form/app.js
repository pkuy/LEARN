const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const birthDay = document.getElementById("birthDay");
const d = new Date();
var currentYear = parseInt(d.getFullYear());

form.addEventListener('submit', e => {

    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    // trim to remove the whitespaces
    const fullNameValue = fullName.value.trim();
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const birthDayValue = birthDay.value.trim();

    // check validation fullname
    if (fullNameValue === '') {
        setErrorFor(fullName, 'Họ tên không được để trống');
    } else if (!checkCapitalizeTheFirstLetterOfEachWord(fullNameValue)) {
        setErrorFor(fullName, 'Họ tên phải viết hoa chữ đầu');
    } else {
        setSuccessFor(fullName);
    }

    // check validation userName
    if (userNameValue === '') {
        setErrorFor(userName, 'Tên đăng nhập không được để trống');
    } else if (isUserName(userNameValue)) {
        setSuccessFor(userName);
    }


    // check validation email

    if (emailValue === '') {
        setErrorFor(email, 'Email không được để trống');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email không phù hợp ');
    } else {
        setSuccessFor(email);
    }


    // check validation phoneNumber

    if (phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'Số điện thoại dược để trống');
    } else if (isPhoneNumber(phoneNumberValue)) {
        setSuccessFor(phoneNumber);
    }


    // Check validation birthDay

    if (birthDayValue === '') {
        setErrorFor(birthDay, 'Ngày sinh không được để trống');
    } else if (isbirthDay(birthDayValue)) {
        setSuccessFor(birthDay);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function checkCapitalizeTheFirstLetterOfEachWord(words) {

    for (var i = 0; i < words.length - 1; i++) {

        if (i == 0) {
            if (words[0] != words[0].toUpperCase()) {
                return false;
            }
        }

        if (words[i] === ' ') {
            if (words[i + 1] != words[i + 1].toUpperCase()) {
                return false;
            }
        }
    }
    return true;
}


function isEmail(email) {
    return /^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(email);
}
//|^[^_]\w+@\w+\.com$/i


function isUserName(userN) {
    var userNamePattern = /^[a-zA-Z]+\w+$/i.test(userN);

    if (!userNamePattern) {

        var temp = userN.charCodeAt(0);

        if (48 <= temp && temp <= 57) {
            setErrorFor(userName, 'Kí tự đầu phải khác kí tự số');
            return false;
        }

        for (var i = 1; i < userN.length; i++) {
            if (userN[i] == " ") {
                setErrorFor(userName, 'Tên đăng nhập không chứa khoảng trắng');
                return false;
            }
        }

    }
    return true;
}

function isPhoneNumber(phone) {

    var phoneNumberPattern = /^[0]\d{2}[-\s]*?\d{3}[-\s]*?\d{4}$/.test(phone);

    if (!phoneNumberPattern) {
        var phoneNumberLength = phone.length;
        if (parseInt(phone[0]) != 0) {
            setErrorFor(phoneNumber, "Chữ số đầu tiên phải là số 0");
            return false;
        } else if (10 < phoneNumberLength) {
            setErrorFor(phoneNumber, "Số điện thoại lớn hơn 10 số ");
            return false;
        } else if (phoneNumberLength < 10) {
            setErrorFor(phoneNumber, "Số điện thoại nhỏ hơn 10 số ");
            return false;
        }
    }
    return true;
}

function isbirthDay(dateOfBirth) {

    var dateOfBirthPattern = /^\d{2}[-/\s]*?\d{2}[-/\s]*?\d{4}$/.test(dateOfBirth);
    // console.log(parseInt(dateOfBirth.substring(0, 2)));
    //month = parseInt(dateOfBirth.substring(3, 5));

    if (!dateOfBirthPattern) {
        setErrorFor(birthDay, "Vui lòng nhập theo đúng cú pháp, ngày và tháng gồm 2 chữ số, năm 4 chữ số");
    } else {
        var date = parseInt(dateOfBirth.substring(0, 2));
        var month = 1;
        var temp = dateOfBirth.charCodeAt(2);
        var year = parseInt(dateOfBirth.substring(dateOfBirth.length - 4));
        var yearsOld = currentYear - year;



        if (yearsOld < 0) {
            setErrorFor(birthDay, "Năm không hợp lệ");
            return false;
        }
        if (48 <= temp && temp <= 57) {
            month = parseInt(dateOfBirth.substring(2, 4));
        } else {
            month = parseInt(dateOfBirth.substring(3, 5));
        }

        if (month < 1 || month > 12) {
            setErrorFor(birthDay, "Tháng không hợp lệ");
            //console.log(12);
            return false;
        }


        if (month == 2) {
            console.log(21);
            if (year % 4 == 0 && date > 29) {
                setErrorFor(birthDay, "Ngày không hợp lệ");
                return false;
            } else if (year % 4 != 0 && date > 28) {
                setErrorFor(birthDay, "Ngày không hợp lệ");
                return false;
            }
        }

        if (date < 1) {
            setErrorFor(birthDay, "Ngày không được nhỏ hơn 1");
            return false;
        } else if (date > 30) {

            if (date > 31) {
                setErrorFor(birthDay, "Ngày không hợp lệ");
                return false;
            } else if ((date == 31) && (month == 4 || month == 6 || month == 9 || month == 11)) {
                setErrorFor(birthDay, "Ngày không hợp lệ");
                return false;
            }
        }

        return true;

    }

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}