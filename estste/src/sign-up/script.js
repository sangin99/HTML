const ID = 'userIdentity';
const PASSWORD = 'P!A!SS!WORD';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';

const idInputElement = document.getElementById('id');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const emailMessageElement = document.getElementById('email-message');
const checkAuthNumberMessageElement = document.getElementById('auth-number-message');

function onIdInputHandler (event) {
    const value = event.target.value;

    //? 멘트 지우기
    // idMessageElement.className = 'input-message';
    // idMessageElement.textContent = '';
    //?

    if (value) checkDuplicateButtonElement.className = 'input-primary-button';
    else checkDuplicateButtonElement.className = 'input-disable-button';
}

function onEmailInputHandler (event) {
    const value = event.target.value; 

    if (value) checkEmailButtonElement.className = 'input-primary-button';
    else checkEmailButtonElement.className = 'input-disable-button';
}

function onAuthNumberInputHandler (event) {
    const value = event.target.value;

    if (value) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}


idInputElement.addEventListener('input', onIdInputHandler);

emailInputElement.addEventListener('input', onEmailInputHandler);

authNumberInputElement.addEventListener('input', onAuthNumberInputHandler);

//!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>!//
function onCheckDuplicateClickHandler (event) {
    const idValue = idInputElement.value;
    if (!idValue) return;   //입력값 없는 상태에서도 동작하는 걸 제한하기

    const isDuplicate = idValue === ID;

    if (isDuplicate) {
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
    } else {
        idMessageElement.className = 'input-message primary';
        idMessageElement.textContent = '사용 가능한 아이디 입니다.';
    }
}

function onCheckEmailClickHandler (event) {
    const emailValue = emailInputElement.value;
    if (!emailValue) return;

    // 이메일 형식이 아닌 것에 대한 작업 _ 이매일 정규식 작성
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmail = emailReg.test(emailValue);

    if (!isEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    } 

    const isDuplicateEmail = emailValue === EMAIL;
    if (isDuplicateEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }

    emailMessageElement.className = 'input-message primary'
    emailMessageElement.textContent = '인증번호가 전송되었습니다.'
}

function onCheckAuthNumberClickHandler (event) {
    const authNumberValue = authNumberInputElement.value;
    if (!authNumberValue) return;

    const isEqualAuthNumber = authNumberValue === AUTH_NUMBER;
    if (!isEqualAuthNumber) {
        checkAuthNumberMessageElement.className = 'input-message error';
        checkAuthNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        return;
    }

    checkAuthNumberMessageElement.className = 'input-message primary';
    checkAuthNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
}

// 동작 명령어
checkDuplicateButtonElement.addEventListener('click' , onCheckDuplicateClickHandler);
checkEmailButtonElement.addEventListener('click' , onCheckEmailClickHandler);
checkAuthNumberButtonElement.addEventListener('click' , onCheckAuthNumberClickHandler);

