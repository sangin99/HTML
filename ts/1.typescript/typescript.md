## Typescript
- 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어
- 마이크로소프트에서 개발 및 유지하며 엄격한 문법을 지원
- 컴파일러 제공으로 정적 타입을 지원해줘서 프로그래밍의 안정성을 지원

### 개발환경 구축
- TypeScript 는 브라우저에서 동작하지 않으므로 TypeScript 로 작성된 코드를 JavaScript 로 변환하는 컴파일러가 필요

```bash
npm install -g typescript
tsc --version
```

- 파일의 확장자 명을 .ts 로 작성
- .ts 파일을 .js 파일로 컴파일 후 실행

```bash
tsc typescript.ts
node typescript.js
```

- 단순히 tsc 로 컴파일 시 ES5 로 변환
- TypeScript 컴파일 설정을 위해서 tsconfig 사용

```bash
tsc --init
```

- TypeScript 를 바로 실행하기 위해선 ts-node 설치

```bash
npm install -g ts-node
```