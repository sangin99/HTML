/*
    객체 : 키(key) 와 값(value)로 구성된 속성들의 집합
    - 메서드를 가질 수 있음
*/

/*
    객체 리터럴 : 자바스크립트에서 가장 일반적 객체 생성 방법
    - { }를 사용하여 객체를 생성
*/
const emptyObject = {};
const hongGildong = {
    name: "홍길동", 
    age: 20,
    address: "서울특별시",
    greating: function () {
        console.log(`안녕 난 ${this.name} 이야!`);
    }
};
//! 접근하기
console.log(hongGildong);
console.log(hongGildong.name);
hongGildong.greating();

//! goJong 의 변수만들기
const name = '고종';
const age = 40;
const address = '서울특별시';

const goJong = {
    name: name,
    age,
    address 
};    //* 선언된 것이 선언하려는 것과 동일하다면 따로 적지 않아도, / 변수이름이 키로 들어가고, 값이 들어간다 (생략가능)
console.log(goJong);

console.log('==============================');

/*
    Object 생성자 : Object 클래스의 생성자로 빈 객체({ }) 생성 가능
*/
const emptyObjectByConstructor = new Object();
console.log(emptyObjectByConstructor);


console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능 
*/
function Person (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
const goGildong = new Person('고길동', 30 , '인천광역시');
console.log(goGildong);
console.log(goGildong.name);

console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유효한 이름 (=변수 이름으로 사용가능한 이름) 일 경우에는 따옴표를 생략할 수 있음
    - <> 유효한 이름이 아니면 반드시 따옴표를 포함해서 작성해야함
*/
const jungSangin = {
    'first name' : 'sangin',
    'last-name' : 'jung' ,
    gender : 'male',
    age : 26
};
console.log(jungSangin);


console.log('==============================');

/*
    속성 값 읽기 : 
    - . 표기법과 [] 표기법으로 접근 가능
    - . 표기법은 유효한 이름일 때 사용
    - [] 표기법은 유효한 이름이 아닐 때와 접근할 속성이 동적으로 변할 때
        ([] 안에 반드시 문자열로 지정해야함)
    - 객체에 존재하지 않는 속성에 접근하면 undefined 를 반환
*/
console.log(jungSangin.age);
// console.log(jungSangin.last-name);   -> 접근 불가
console.log(jungSangin["last-name"])

let A = 'first name';
console.log(jungSangin[A]);

console.log('==============================');

/*
    속성 값 변경 : 
    - 객체 속성에 접근하여 새로운 값을 할당하여 변경 가능
    - 만약, 존재하지 않는 속성에 값을 할당하면 새로운 속성이 생성
*/
goJong.name = '이형';   //! 수정
goJong.birth = '1850.01.01';    //! 추가

console.log(goJong);

console.log('==============================');

/*
    속성 삭제 :
    - delete 연산자를 사용하여 객체 속성 제거 가능
*/
delete goJong.birth;
console.log(goJong);


console.log('==============================');

/*
    for-in 문 : 
    - for-in 문으로 객체에 포함되어 있는 키를 순화해서 접근 가능
    - 반환되는 값은 문자열 타입의 키가 반환
*/
//! 작업 시 X / 속성 검사의 목적으로 사용
for (const key in goJong) {
    console.log(`${key} : ${goJong[key]}`);
}


console.log('==============================');

let sunJong = goJong;   // const
sunJong.name = '이척';

console.log(sunJong.name);
console.log(goJong.name);       //? 원본도 변경된다

//! 복사를 해서 값을 넣기 (원본은 그대로두고)
    //? 방법 1
sunJong = goJong;
    sunJong = {
        name: goJong.name,
        age: goJong.age,
        address: goJong.address
    };

    //? 방법 2
    sunJong = {};
    for (const key in goJong) {
    sunJong[key] = goJong[key];
};
console.log(sunJong);

sunJong = {};
console.log(sunJong);

//? name, age, address
sunJong = {...goJong};  // 새로운 객체 만들기 // 새로운 주소값을 받고, 새로운 공간을 만들어 공간에 주소값을 복붙(...)을 해놓은 것이다.
console.log(sunJong);  

//! 그래서, goJung 만 변경된다 
goJong.name = '이형';
console.log(goJong.name);
console.log(sunJong.name);
//* 데이터 값이 변경된 것이 아니라, 바라보는 것이 달라진 것이다! 