# 리액트

## React.js

A JavaScript library for building user interfaces : <https://reactjs.org/>

### 리액트 탄생배경

<https://soldonii.tistory.com/100>

1. SPA

    Single Page Application은 HTML, CSS, Javascript 파일을 최초 1회만 로드하고, 이후에는 자바스크립트 파일을 통해 DOM 또는 필요한 HTML 파일을 조작하는 방식을 취한다.

2. Angular.js

    앵귤러는 작은 컨테이너들이 모여 거대한 앱을 구성하도록 설계된 프레임워크이다. (구글 제작)
    앱/사용자의 증가 -> 페이지 내 User Interaction 증가 -> 복잡성 증가 -> 데이터 플로우 파악/디버깅 난항

3. React의 등장

    동일 문제 해결 위해 페이스북이 개발. 데이터 플로우가 명확

### 리액트 핵심 개념

1. Virtual DOM

    기존 프론트엔드에서 전통적인 DOM 조작법은 명령적(Imperative)이었다. 모든 요소를 직접 명령하여 지정.
    * 명확하다는 장점
    * 각각의 변화에 대한 연관성 파악이 어렵다는 단점

    리액트는 선언적(Declarative)이다. DOM 조작은 React-DOM 라이브러리가 처리하고, 화면을 구현하는 방법

    데이터 플로우 방향과 요소들의 연관성을 파악하기 쉬워짐.

2. Components

    React는 UI들을 독립적이고 재사용할 수 있는 부분으로 나누고 각 부분을 분리하여 개발할 수 있는 컴포넌트로 만들 때 도움을 주는 라이브러리 입니다.

    리액트는 재사용이 가능한 컴포넌트를 만들고, 이 컴포넌트들이 모여 웹사이트를 구성하게 됩니다. 이 컴포넌트들은 결국 자바스크립트 함수(또는 객체)입니다. state를 세팅하고, 이를 기반으로 화면에 어떻게 보여지기 원하는지를 작성하여 하나의 컴포넌트로 구성합니다.

    이후 리액트에 내장된 Component 라이브러리의 기능을 불러온 후, 여기에 내장된 render() 메소드를 통해 ReactDOM 라이브러리에게 rendering될 컴포넌트를 전달합니다. 최종적으로 ReactDOM 라이브러리가 현재 DOM과 전달받은 컴포넌트를 비교하여 변경이 필요한 부분만 변화를 주어 화면에 보여주게 됩니다.

3. 일방향적인 데이터 플로우 - One Way(Unidirectional) Data Flow

    리액트에서 state와 자바스크립트 코드로 구성된 component는 HTML처럼 보이는 코드를 작성할 수 있도록 구성된 JSX 문법을 기반으로 한다.

    가상DOM은 실제 DOM과 유사하게 나무 구조로 된 자바스크립트 객체이다. 가상DOM과 실제 DOM의 비교는 자바스크립트 객체인 state로부터 시작되어, state를 기반으로 컴포넌트가 구성되고, 컴포넌트를 기반으로 가상 DOM을 그린후, 가상 DOM과 실제 DOM을 비교해 화면에 그리는 과정을 거치는데 이렇게 **[ state ⇒ component ⇒ 가상 DOM ⇒ 실제 DOM과 비교 ⇒ 화면에 그리기 ]** 과정이 일방향적으로 이루어진다.

## React DOM

<https://reactjs.org/docs/react-dom.html>

`react-dom` package는 앱의 최상위 레벨에서 사용할 수 있는 DOM에 특화된 메서드와 필요한 경우 React 모델 외부로 나갈 수 있는 해결책을 제공합니다. 대다수 컴포넌트는 이 모듈을 사용할 필요가 없습니다.

`render()` 함수의 경우 `React` 엘리먼트를 container DOM에 렌더링하고 컴포넌트에 대한 참조를 반환합니다(무상태 컴포넌트는 null을 반환합니다).

```html
// index.html

// ...
<div id="app"></div>
<script id="main.js"></script>
// ...
```

```js
// JSX를 React.createElement가 컴파일 할 수 있도록, React를 직접 사용하지 않더라도 임포트 해줘야 됩니다.
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <p>Hello, world!</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
```

<https://ko.reactjs.org/docs/rendering-elements.html>

### JSX 변환 - React 17 이후

<https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

옛날에는 JSX가 있는 코드라면 `React.createElement()`를 호출할 수 있게 `import React from 'react'`를 해줘야했다.
React 17에서는 JSX 변환 과정을 새로하여 React를 import하지 않아도 된다.

```js
import React from 'react';

function App() {
  return <h1>Hello World</h1>;
}
```

```js
// previous JSX Transform
import React from 'react';

function App() {
  return React.createElement('h1', null, 'Hello world');
}
```

```js
// JSX Transform After React version 17 
// Inserted by a compiler (don't import it yourself!)
import {jsx as _jsx} from 'react/jsx-runtime';

function App() {
  return _jsx('h1', { children: 'Hello world' });
}
```

## Components와 Props

컴포넌트도 자바스크립트 함수입니다. 그래서 입력값과 반환값이 있습니다. 여기서 입력값을 리액트에서는 props라고 부릅니다. 컴포넌트의 반환값은 화면에 어떤 엘레먼트를 보여줄지 결정합니다.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## React Hook Links

* <https://ko.reactjs.org/docs/hooks-intro.html>
* <https://ko.reactjs.org/docs/hooks-overview.html>
* <https://ko.reactjs.org/docs/hooks-state.html>
* <https://ko.reactjs.org/docs/hooks-effect.html>
* <https://ko.reactjs.org/docs/hooks-rules.html>
* <https://ko.reactjs.org/docs/hooks-customs.html>
* <https://ko.reactjs.org/docs/hooks-references.html>

## React Hook

* <https://ko.reactjs.org/docs/hooks-intro.html>
* <https://ko.reactjs.org/docs/hooks-overview.html>

Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수입니다. Hook은 class 안에서는 동작하지 않습니다. 대신 class 없이 React를 사용할 수 있게 해주는 것입니다. (하지만 이미 짜놓은 컴포넌트를 모조리 재작성하는 것은 권장하지 않습니다. 대신 새로 작성하는 컴포넌트부터는 Hook을 이용하시면 됩니다.)

Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수입니다. Hook은 class 안에서는 동작하지 않습니다. 대신 class 없이 React를 사용할 수 있게 해주는 것입니다. (하지만 이미 짜놓은 컴포넌트를 모조리 재작성하는 것은 권장하지 않습니다. 대신 새로 작성하는 컴포넌트부터는 Hook을 이용하시면 됩니다.)

Hook은 그냥 JavaScript 함수이지만, 두 가지 규칙을 준수해야 합니다.
<https://ko.reactjs.org/docs/hooks-rules.html>

* 최상위(at the top level)에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
* React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 됩니다. (Hook을 호출할 수 있는 곳이 딱 한 군데 더 있습니다. 바로 직접 작성한 custom Hook 내입니다. 이것에 대해서는 나중에 알아보겠습니다.)

### useState

* <https://ko.reactjs.org/docs/hooks-state.html>

**useState를 호출하는 것은 무엇을 하는 걸까요?** “state 변수”를 선언할 수 있습니다. 위에 선언한 변수는 count라고 부르지만 banana처럼 아무 이름으로 지어도 됩니다. useState는 클래스 컴포넌트의 this.state가 제공하는 기능과 똑같습니다. 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않습니다.

**useState의 인자로 무엇을 넘겨주어야 할까요?** useState()Hook의 인자로 넘겨주는 값은 state의 초기 값입니다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있습니다. 위의 예시는 사용자가 버튼을 얼마나 많이 클릭했는지 알기를 원하므로 0을 해당 state의 초기 값으로 선언했습니다. (2개의 다른 변수를 저장하기를 원한다면 useState()를 두 번 호출해야 합니다.)

**useState는 무엇을 반환할까요?** state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환합니다. 이것이 바로 const [count, setCount] = useState()라고 쓰는 이유입니다. 클래스 컴포넌트의 this.state.count와 this.setState와 유사합니다.

#### `createState` vs `useState`

왜 `createState`가 아닌, `useState`로 이름을 지었을까요?

컴포넌트가 렌더링할 때 오직 한 번만 생성되기 때문에 “Create”라는 이름은 꽤 정확하지 않을 수 있습니다. 컴포넌트가 다음 렌더링을 하는 동안 useState는 현재 state를 줍니다. Hook 이름이 항상 use로 시작하는 이유도 있습니다. 이름은 반드시 use로 시작해야 하는데 그래야만 한눈에 보아도 Hook 규칙이 적용되는지를 파악할 수 있기 때문입니다.

<https://ko.reactjs.org/docs/hooks-custom.html>

## 선언형 프로그래밍

<https://en.wikipedia.org/wiki/Declarative_programming>

프로그래밍 패러다임 중 하나입니다.

선언형 프로그래밍은 정확하게 어떤 명령 혹은 단계들이 실행될지 묘사하지 않고, 프로그램에서 원하는 것 목표만을 기술합니다. 즉 목표만 있을 뿐 어떻게 목표를 달성하는지 기술하지 않는 것입니다.

선언형 프로그래밍의 예로는 데이터베이스 Query language(SQL), Regular expression, 설정 파일, 함수형 프로그래밍 등이 있습니다.

## 관심사의 분리

컴퓨터 프로그램을 구별된 부분으로 분리시키는 디자인 원칙으로, 각 부문은 개개의 관심사를 해결합니다. 각 부문의 관심사를 분리하면 코드를 이해하고 보수 하기 훨씬 더 쉬워집니다. 기존의 웹 개발 방식은 관심사의 분리보단 마크업, 디자인, 로직을 분리하는 기술의 분리에 가까웠습니다. 반면 리액트는 컴포넌트별로 관심사를 분리하여 재사용성과 확장성을 높여서 개발을 더 쉽게 해줍니다.
