//! kakao - https://developers.kakao.com/
function onKakaoButtonClickHandler (event) {
    window.location.href = 'https://developers.kakao.com/';
}

//! naver - https://developers.naver.com/
function onNaverButtonClickHandler (event) {
    window.location.href = 'https://developers.naver.com/';
}

const KakaoButtonLinkElement = document.getElementById('kakao-button');
KakaoButtonLinkElement.addEventListener('click', onKakaoButtonClickHandler); 
const NaverButtonLinkElement = document.getElementById('naver-button');
NaverButtonLinkElement.addEventListener('click', onNaverButtonClickHandler);