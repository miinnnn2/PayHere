# 페이히어 과제

### 개발 스택

- React
- Typescript
- Styled-component
- fetch API

### 프로젝트 실행 방법
- 토큰이 노출되면 GitHub에서 자동적으로 토큰을 폐기하는 것 같습니다.
  번거로우시겠지만 'src/api/index.ts' 폴더에서 Authorization 헤더 내 'Bearer' 이하에 직접 토큰을 넣어서 테스트해주시면 감사하겠습니다.
```shell
# run
npm run dev
```

### 구현 사항

- localStorage와 fetch API만 사용하여 Loading 상태, 무한 스크롤을 구현하였습니다.
