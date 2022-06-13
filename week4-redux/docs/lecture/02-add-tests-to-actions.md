# Actions에 테스트들 추가하기

describe 중첩하여 actions마다 작업들을 처리한다

test를 우선적으로 만들면서 리듀서의 액션의 구현에 문제가 있는지 확인하고, 보완해가며 액션들을 만든다.

context를 사용하여 액션의 사용용도를 보려고 (like cheat sheet) 상세하게 기록해놓자.

jest의 mockImplementation을 통해 useSelector로 주는 store의 state들을 테스트에서 처리할 수 있다

jest의 테스트 코드 실행시 임포트하는 라이브러리를 찾는 우선순위로 인해 루트 디렉토리에서 `__mocks__`디렉토리를 만들어, 해당 디렉토리에 mocking할 라이브러리의 이름으로 파일을 만들고, 라이브러리의 모킹할 함수를 `const functionToMock() = jest.fn()`으로 작성하면 jest 테스트 실행시 해당 라이브러리를 모킹할 수 있다.

```js
//__mocks__/react-redux.js
const useSelector = jest.fn();

const useDispatch = jest.fn();
```