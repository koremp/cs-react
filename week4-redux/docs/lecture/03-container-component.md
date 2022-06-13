# 관심사의 분리

**각각 하나의 책임만 갖고 동작하도록 구성할 것**</br>
이것이 가장 중요한 핵심 포인트였다. 이걸 까먹고, 프론트엔드 인턴 때 TDD로 개발하는거 혼자서 다 까먹고, 관심사의 분리도 제대로 되지 않았고 프로젝트 진행이 구렸던 것 같다. 코드 퀄리티를 살리기 위해서는 지속적으로 내가 작성하고 있는 방법이 맞는가에 대해서 계속 의심하고 확인해야할 것 같다

이 내용을 계속 되뇌이고, 의식적으로 훈련한다는, TDD 훈련 이라는 것을 왜 하는지, 지금에서야 안 것 같다.

## Presentational Component, Container Component

Presentational Component와 Container Component로 분리

관심사의 분리
**각각 하나의 책임만 갖고 동작하도록 구성할 것**
ListContainer, InputContainer를 만들고 각각 redux store의 tasks / taskTitle, tasks 를 갖고 동작하고 useDispatch를 할 수 있게끔 분리한다

각각의 컨테이너 컴포넌트들에서 해당 컨테이너에서만 이 store의 상태관리를 한다.

App에서도 통합 테스트를 한다.

각각의 컨테이너에서 해당 책임의 통합 테스트를 진행한다고 생각할 수 있겠다

jest의 `fireEvent.click`를 사용하면 특정 액션이 디스패치되도록 하는 로직이 있는데, 이를 확인하기 위해서 테스트 코드에서 `dispatch`를 mocking 하여 `expect(dispatch).calledWith({type: 'specificType, payload: {specific: value}})`처럼 확인할 수 있다.
