# 레스토랑 정보 확인 및 예약 시스템 구축하기

## 과제 목표

* TDD로 기능 구현
* 레스토랑 목록 보기 기능
* 레스토랑 추가 기능

## Hint

이번 과제를 위해선 App 컴포넌트에서 아래와 같이 초기 데이터를 불러오기 위해 `useEffect`를 사용해야 합니다. 아래 문서를 참고하여 `useEffect`를 학습해주세요.

<https://ko.reactjs.org/docs/hooks-effect.html>

```jsx
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import {
  setRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}
```
