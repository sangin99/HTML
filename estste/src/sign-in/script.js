// js -> 14.Fetch -> 이벤트객체 자료 참고

const ID = 'userIdentity';
const PASSWORD = 'P!A!SS!WORD'

//! 로그인 조작
function onSignInButtonClickHandler(event) {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    if (id === ID && password === PASSWORD)  {          // 풀이 : 사용자가 가진 아이디와 비밀번호가 같다면 , 올바른 입력
        alert('로그인 성공!');
    } else {
        const signInMessageElment = document.getElementById('sign-in-message');
        signInMessageElment.textContent = '로그인 정보가 일치하지 않습니다.'
    }
}

//! 회원가입 버튼 조작
function onSignUpLinkClickHandler (event) {
    window.location.href = 'https://google.com';
}

const signUpLinkElement = document.getElementById('sign-up-link');
signUpLinkElement.addEventListener('click', onSignUpLinkClickHandler);

//! kakao - https://developers.kakao.com/
function onKakaoButtonClickHandler (event) {
    window.location.href = 'https://developers.kakao.com/';
}

//! naver - https://developers.naver.com/
function onNaverButtonClickHandler (event) {
    window.location.href = 'https://developers.naver.com/';
}

const KakaoButtonLinkElement = document.getElementById('sign-up-link-K');
KakaoButtonLinkElement.addEventListener('click', onKakaoButtonClickHandler); 
const NaverButtonLinkElement = document.getElementById('sign-up-link-N');
NaverButtonLinkElement.addEventListener('click', onNaverButtonClickHandler);



// textContent : 요소 안에 텍스트를 작성하기 위한 명령어
// window.location.href : 새로운 페이지로 이동한다 / 속성 / 주소 히스토리가 기록된다