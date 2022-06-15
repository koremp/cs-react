# Redux 적용하기

<https://redux.js.org/tutorials/fundamentals/part-1-overview>

redux의 fundamentals tutorials의 문서를 다 읽어보자.

## Flux Architecture

이전엔 App 컴포넌트에서 상태 관리를 모두 담당했었습니다. 이번엔 Redux를 통해서 App에서 상태 관리를 분리하는 방법을 배웁니다.

* <https://haruair.github.io/flux/docs/overview.html>
* <https://facebook.github.io/flux/docs/in-depth-overview/>

Flux는 페이스북이 제시한 클라이언트 웹 애플리케이션 아키텍쳐입니다. 위의 문서를 반드시 정독해주세요. 아마 여러 가지로 어려운 내용이 있을 겁니다. 실제 Redux는 구현이 좀 다른 부분이 있기 때문에 각 항목에 대해 디테일하게 모두 숙지하실 필요는 없습니다. 다만, 단방향 데이터 Flow란 점과 Action이 Dispatcher를 통해 Store에 전달되는 흐름이 핵심이란 걸 기억해야 합니다.

## Redux - Flux Architecture의 구현체

Redux로 상태 관리를 하는 이유와 이로 인해 얻어지는 이점은 다음과 같습니다.

* 상태 관리는 사실 리액트의 관심사가 아니다.
* App은 상태가 어떻게 처리되는지 모르게 한다.
* App은 View가 어떻게 그려지는지만 **관심**을 갖게 한다.
* App은 상태 관리(store)와 View를 연결만 해준다.
* App은 상태 관리 로직이 어떻게 구현됐는지는 모른다.
* 상태 관리 로직 변경의 영향이 View로 전파되지 않는다.

## Redux 설치

```bash
npm i redux react-redux
```

### 3가지 원칙

3가지 원칙 - 리덕스 공식 문서에서는 리덕스를 사용할 때 따라야 할 3가지 원칙을 제시합니다.

<https://redux.js.org/understanding/thinking-in-redux/three-principles>

* 전체 상태값을 하나의 객체에 저장한다.
* 상태값은 불변 객체다.
* 상태값은 순수 함수에 의해서만 변경되어야 한다.

### Action

* <https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow>

상태값은 오직 액션 객체에 의해서만 변경되어야 합니다.

* type: (string)
* payload(object): { taskTitle }

액션 객체에는 type, payload 속성으로 구성되는데 type은 어떤 액션인지 구별할 수 있는 문자열 값이며 payload 안에는 변경할 상태값(불변 객체)이 전달됩니다. Redux에서 상태값을 수정하는 유일한 방법은 액션 객체와 함께 dispatch 메서드를 호출하는 겁니다.

#### 불변객체의 의미

redux의 state에 배열인 `arr`이 있다고 봅시다. 또, 이 state를 변경하는 `someAction`이 있다고 봅시다.

```js
const state = {
  arr: [],
};

function reducer(state=initialState, action) {
  if(action.type === 'someAction') {
    return state;
  }

  return state;
}
```

이 state의 배열인 `arr`을 변경하는 `someAction`에서 `push()`, `append()` 등의 방식으로 변경해서는 안된다는 것이다.

틀린 방법

```js
// 틀린 방법

function reducer(state=initialState, action) {
  if(action.type === 'wrongAction') {
    const { arr } = state;
    arr.push(123);
    
    return {
      ...state,
      arr,
    };
  }

  return state;
}
```

맞는 방법

```js
// 맞는 방법

function reducer(state=initialState, action) {
  if(action.type === 'someAction') {
    const { arr } = state;
    
    return {
      ...state,
      arr: [...arr, 123],
    };
  }

  return state;
}
```


### Reducer

* <https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers>

리덕스에선 기존 상태를 다른 상태로 변경하는 함수를 리듀서(reducer)라고 합니다. reducer의 구조는 다음과 같습니다.

```js
function reducer(state, action) {
  // ...

  return state;
}
```

reducer는 이전 상태값과 액션 객체를 입력으로 받아서 새로운 상태값을 만드는 **순수 함수**입니다. 순수 함수는 부수 효과(함수 외부의 상태를 변경시키는 것)를 발생시키지 않아야 합니다. 순수 함수는 같은 입력값에 대해 항상 같은 값을 반환합니다.

* <https://en.wikipedia.org/wiki/Pure_function>

### Store

store는 리덕스의 상태값을 갖는 객체입니다. 액션의 발생은 store의 dispatch 메서드로 시작됩니다. 스토어는 액션이 발생하면 미들웨어 함수(이번 주엔 등장하지 않음)를 실행하고, reducer를 실행해서 상태값을 새로운 값으로 변경합니다. 첫 번째 원칙에서 말한 애플리케이션의 전체 상태값을 저장하는 하나의 객체가 바로 store입니다.

<https://redux.js.org/tutorials/fundamentals/part-4-store>

### Provider

문서는 무언가 복잡한 설명을 하는 것 같습니다. 단순하게 정리하면 React로 작성된 컴포넌트들을 Provider안에 넣으면 하위 컴포넌트들이 Provider를 통해 redux store에 접근이 가능해집니다.

<https://react-redux.js.org/api/provider>

### react-redux hook

Hook 등장 이전에는 `mapDispatchToProps`, `mapStateToProps` 와 `connect` 라는 함수를 이용해서 상당히 많은 코드를 작성해야 했으나 Redux에서도 Hook을 제공하면서 상당히 깔끔한 코드를 작성할 수 있게 됐습니다. Redux Hook 중 가장 중요한 Hook 은 **useDispatch** 와 **useSelector**입니다. 이에 대한 설명은 아래 문서를 읽어주세요.

* <https://react-redux.js.org/api/hooks#usedispatch>
* <https://pks2974.medium.com/redux-hook-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-3b92b4d75466>

## React에서 Redux 사용하기

<https://redux.js.org/tutorials/fundamentals/part-5-ui-react>

Presentational Components

* redux를 알지 못함.
* 보이는 것(View)에만 집중함.

Container Components

* redux를 알고 있음.
* 데이터를 가져오고 상태를 업데이트함.

기존에는 상태를 한 곳에서 관리했다면 이제는 Redux에서 모든 상태를 관리하게 됩니다.
