[youtube](https://youtube.com/playlist?list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0&si=HFG1VeYSj1hRnQ3e)

# TypeScript 명령어 가이드

## 설치하기

### 로컬 설치 (권장)
```bash
# typescript는 개발과정에서만 필요하므로 배포판에 포함되지 않도록 --save--dev옵션으로 설치
npm install --save-dev typescript

# 또는 정확한 버전 지정 설치
npm install --save-dev typescript@5.8.3
```

### 전역 설치
```bash
npm install -g typescript
```

## 버전 확인

### 로컬 설치 버전 확인
```bash
npx tsc --version
```

### 전역 설치 버전 확인
```bash
tsc --version
# 또는
npm list -g typescript
```

## npx를 사용한 로컬 명령어

### TypeScript 컴파일
```bash
# 모든 .ts 파일 컴파일
npx tsc

# 특정 파일 컴파일
npx tsc 파일이름.ts

# 감시 모드로 컴파일 (변경사항 자동 감지)
npx tsc -w
# 또는
npx tsc --watch
```

### tsconfig.json 생성
```bash
npx tsc --init
```

### 도움말 보기
```bash
npx tsc --help
```

## package.json 스크립트 등록 예시
```json
{
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "check-types": "tsc --noEmit"
  }
}
```

사용 예:
```bash
npm run build    # 빌드
npm run watch    # 감시 모드
npm run check-types  # 타입 체크만 실행
```

## TypeScript 파일 실행하기

### 컴파일 후 실행 (2단계)
```bash
# 1. TypeScript를 JavaScript로 컴파일
npx tsc 파일이름.ts

# 2. 생성된 JavaScript 실행
node 파일이름.js
```

### ts-node로 한 번에 실행
```bash
# ts-node 설치 (필요한 경우)
npm install -D ts-node

# TypeScript 파일 직접 실행
npx ts-node 파일이름.ts
```

### ts-node 장점
- 별도의 컴파일 단계 없이 TypeScript 파일을 직접 실행
- 개발 중 빠른 테스트에 유용
- 소스맵을 자동으로 처리하여 디버깅이 용이

## TypeScript 컴파일 결과 확인
```bash
# 컴파일된 JavaScript 파일 확인
cat 파일이름.js
```

## 주의사항
- `--save-dev`로 설치한 경우 `npx`를 사용하거나 `./node_modules/.bin/tsc`로 실행해야 합니다.
- 프로젝트별로 다른 TypeScript 버전을 사용할 수 있도록 로컬 설치를 권장합니다.
- `ts-node`는 개발 환경에서만 사용하고, 프로덕션에서는 컴파일된 JavaScript를 사용하세요.
