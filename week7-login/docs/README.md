# 로그인

## HTTPie

HTTP 클라이언트 CLI 도구입니다. 간단한 데이터 조회 및 전송을 테스트해볼 수 있습니다. 우리가 자주 사용하는 `curl`로도 테스트할 수 있지만 사용하기 불편한 점이 있고, 또 Postman을 사용할 수도 있지만 간단하게 테스트할 때는 HTTPie로 해보는 것도 좋을 것 같습니다.

<https://httpie.io/>

## Authorization 헤더

HTTP Authorization 요청 헤더는 유저 에이전트에서 서버에 인증정보를 전달하기 위해 사용됩니다.

```txt
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

서버에 type과 credentials을 전달해야 하는데 강의에서는 Bearer 타입을 사용하고 있습니다.

<https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication>

<https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Authorization>

## LocalStorage

LocalStorage는 브라우저에 데이터를 저장하기 위해 사용됩니다. localStorage는 저장된 데이터의 만료기간이 없고, key와 value는 항상 문자열로 저장됩니다.

<https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage>

## 영상 강의

### 1. 로그인

<https://github.com/reduxjs/redux-mock-store>

axios, form, etc

LoginPage에서 redux 관련 의존성이 있어서 테스트 코드랑 컴포넌트 코드에서 리덕스를 사용함.

### 2. 리뷰 작성하기

Authenthication -> Authorization
httpie에서 `Authorization: Bearer ${AccessToken}`

### 3. 로그인 로컬 스토리지
