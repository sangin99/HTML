const ID = 'userIdentity';
const PASSWORD = 'P!A!SS!WORD';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';

//! 모든 확인 값 (아이디 값, 중복확인, 비밀번호.이메일.인증번호 값.확인)이 되었을 때!
let id = ' ' , password = ' ' , passwordCheck = ' ' , email = ' ' , authNumber = ' ';
let isDuplicate = true, isPasswordPatton = false, isEqualPassword = false , isEmail = false,  
isDuplicateEmail = true, isEqualAuthNumber = false; 

const idInputElement = document.getElementById('id');
const passwordInputElement = document.getElementById('password');
const passwordCheckInputElement = document.getElementById('password-check');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const passwordMessageElement = document.getElementById('password-message');
const passwordCheckMessageElement = document.getElementById('password-check-message');
const emailMessageElement = document.getElementById('email-message');
const authNumberMessageElement = document.getElementById('auth-number-message');

const signUpButtonElement = document.getElementById('sign-up-button');
const signInLinkElement = document.getElementById('sign-in-link');

function onIdInputHandler (event) {
    id = event.target.value;
    isDuplicate = true;

    //? 멘트 지우기
    // idMessageElement.className = 'input-message';
    // idMessageElement.textContent = '';
    //?

    if (id) checkDuplicateButtonElement.className = 'input-primary-button';
    else checkDuplicateButtonElement.className = 'input-disable-button';
}

function onPasswordInputHandler (event) {
    password = event.target.value;

    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,13}$/;
    isPasswordPattern = passwordReg.test(password);

    if (!isPasswordPattern) {
        passwordMessageElement.className = 'input-message error';
        passwordMessageElement.textContent = '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요';
        return;
    }
    passwordMessageElement.className = 'input-message';
    passwordMessageElement.textContent = '';
}

function onPasswordCheckInputHandler (event) {
    isEqualPassword = password === passwordCheck;
    if (!isEqualPassword) {
        passwordCheckMessageElement.className = 'input-message error';
        passwordCheckMessageElement.textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }
    passwordCheckMessageElement.className = 'input-message';
    passwordCheckMessageElement.textContent = '';
}

function onEmailInputHandler (event) {
    email = event.target.value; 
    isEmail = false;
    isDuplicateEmail = true;

    if (email) checkEmailButtonElement.className = 'input-primary-button';
    else checkEmailButtonElement.className = 'input-disable-button';
}

function onAuthNumberInputHandler (event) {
    authNumber = event.target.value;
    isEqualAuthNumber = false;

    if (authNumber) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}


idInputElement.addEventListener('input', function (event) {
    onIdInputHandler(event);
    setSignUpButton();
});

passwordInputElement.addEventListener('input', function (event) {
    onPasswordInputHandler(event);
    setSignUpButton();
});

passwordCheckInputElement.addEventListener('input', function (event) {
    onPasswordCheckInputHandler(event);
    setSignUpButton();
});

emailInputElement.addEventListener('input', function (event) {
    onEmailInputHandler(event);
    setSignUpButton();
});

authNumberInputElement.addEventListener('input',  function (event) {
    onAuthNumberInputHandler(event);
    setSignUpButton();
});

//!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>!//
function onCheckDuplicateClickHandler (event) {
    if (!id) return;   //입력값 없는 상태에서도 동작하는 걸 제한하기

    isDuplicate = id === ID;

    if (isDuplicate) {
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
        return;
    } 
        idMessageElement.className = 'input-message primary';
        idMessageElement.textContent = '사용 가능한 아이디 입니다.';
}

function onCheckEmailClickHandler (event) {
    if (!email) return;

    // 이메일 형식이 아닌 것에 대한 작업 _ 이매일 정규식 작성
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    isEmail = emailReg.test(email);

    if (!isEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    } 

    isDuplicateEmail = email === EMAIL;
    if (isDuplicateEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }

    emailMessageElement.className = 'input-message primary'
    emailMessageElement.textContent = '인증번호가 전송되었습니다.'
}

function onCheckAuthNumberClickHandler (event) {
    if (!authNumber) return;

    isEqualAuthNumber = authNumber === AUTH_NUMBER;
    if (!isEqualAuthNumber) {
        authNumberMessageElement.className = 'input-message error';
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        return;
    }

    authNumberMessageElement.className = 'input-message primary';
    authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
}

// 동작 명령어
checkDuplicateButtonElement.addEventListener('click' ,  function (event) {
    onCheckDuplicateClickHandler(event);
    setSignUpButton();
});
checkEmailButtonElement.addEventListener('click' ,  function (event) {
    onCheckEmailClickHandler(event);
    setSignUpButton();
});
checkAuthNumberButtonElement.addEventListener('click' , function (event) {
    onCheckAuthNumberClickHandler(event);
    setSignUpButton();
});

// 회원가입 > 로그인 버튼 동작 : 누르면 로그인 페이지로 이동
function onSignInLinkClickHandler (event) {
    window.location.href = '../sign-in';
}
signInLinkElement.addEventListener('click' , onSignInLinkClickHandler);

//! 모든 확인 값 (아이디 값, 중복확인, 비밀번호.이메일.인증번호 값.확인)이 되었을 때!
function setSignUpButton () {
    const isPrimaryButton =
        id && password && passwordCheck && email && authNumber && !isDuplicate && isPasswordPatton 
        && isEqualPassword && isEmail && !isDuplicateEmail && isEqualAuthNumber;

    if (isPrimaryButton) signUpButtonElement.className = 'primary-button full-width';
    else signUpButtonElement.className = 'disable-button full-width';
    }
