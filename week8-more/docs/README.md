# Week8

## Emotion

### CSS-in-JS

이전까진 CSS를 `xxx.css` 와 같이 별도의 문서로 관리했지만 요즘은 자바스크립트 코드에서 CSS를 작성합니다. CSS-in-JS라는 명칭은 방법론입니다. 실제로 작성을 돕는 라이브러리는 매우 많습니다. 대표적으로 `styled-components`와 `emotion`이 있습니다. 이번 교육에서는 `emotion`을 사용합니다.

<https://d0gf00t.tistory.com/22>
<https://emotion.sh/docs/introduction>

## 리덕스 툴킷

<https://redux-toolkit.js.org/>

지금까지 redux를 이용해서 개발하실 때 다들 `아 너무 복잡하다. 무슨 코드가 이렇게 많아야 하지?` 란 생각을 하셨을 겁니다. 어플리케이션이 복잡해질수록 다양한 액션과 리듀서에 대한 관리가 복잡해지며 편의를 위한 패키지 추가가 많이 필요했습니다. immer, ducks pattern 등을 공식적으로 지원합니다. redux-thunk가 비동기 처리를 위해 기본으로 포함됐습니다.

* ducks pattern: redux를 사용할 때 action과 reducer를 하나의 파일에서 사용하는 패턴. redux-toolkit은 이를 slice.js 란 파일에 모아둡니다.

그냥 사용해보시면 딱 느껴지실 겁니다.

> 와... 편하다!

redux의 악명 높았던 사용법이 정말 많이 개선된 걸 느낄 수 있습니다. 또한 입맛에 따라 `redux-saga`, `redux-observable`와 같은 비동기 처리 패키지를 추가할 수 있습니다.

### configureStore

Redux의 `createStore` 함수에서 개발을 더 쉽게 하게 도와주는 기본 설정들이 들어있는 스토어 생성 함수입니다. `configureStore`를 사용하면 기본으로 Redux thunk가 추가됩니다.

## PureComponent

<https://ko.reactjs.org/docs/react-api.html#reactpurecomponent>
<https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98>
<https://ui.toast.com/weekly-pick/ko_20190731>
<https://ko.reactjs.org/docs/hooks-reference.html#usecallback>
