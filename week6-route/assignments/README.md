# 레스토랑 상세 페이지 구현하기

## File 구조 - 관심사의 분리

* ~~Page
  * Router에 대해 알고있음
* ~~Container
  * Redux에 대해 알고있음.
  * useDispatch, useSelector에 대한 테스트 구현
* ~~Detail
  * ex) RestaurantDetail
  * Presentational Component
  * 표현하는데 집중
  * 나눌 수 있는 테스트는 나눠서
    * ex) restaurant's menu items
    * 메뉴 아이템이 있을 때
    * 메뉴 아이템이 없을 때

## TDD

`beforeEach`를 사용해서 `describe-it`을 사용할 때, `useSelector`, `useDispatch`에 대한 설정을 초기화시켜준다.
redux에 대한 액션과 테스트들에 대해 구조를 생각하고 테스트가 깨지는 Red 사이클에 jsx파일을 보여주고 test에 대해 보여준 뒤, Green 사이클에 test에 맞게 간단한 구조로 만들면서 Refactor 사이클에서 리팩토링을 하고 컴포넌트를 나눈다.

Restaurant 페이지를 만들고, 컨테이너를 만들고, 디테일을 만들고, 해당 컴포넌트들에 대한 테스트들을 나눠가며 구현한다.

관심사의 분리에 맞게 컴포넌트 분리를 한다.

Restaurant Detail, 즉 Presentational Component에서도 컴포넌트의 크기가 커짐에 따라 컴포넌트를 테스트할 크기로 분류함.

