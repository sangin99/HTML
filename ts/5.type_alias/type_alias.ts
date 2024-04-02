/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법으로 인터페이스와 유사하게 사용됨
    - type 키워드를 사용
*/
// let gender: '남' | '여';

type Gender = '남' | '여';
let gender: Gender = '남';
// let gender: Gender = '남자';

type CustomText = string;

type King = {
    name: string,
    tombName : string,
    birth : string,
    death : string
};
const taejo : King = {
    name : '이성계',
    tombName : '태조',
    birth : '1335-11-04',
    death : '1408-06-27'
};


// 인터페이스 : 다른 요소들 간에 인터페이스의 목적 (dto ..)
// type : 실제 사용되는 형태에 사용

console.log('==================================================');
