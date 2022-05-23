# 1주차 과제 2

## 구현할 기능

간단한 계산기 만들기

## 구현

<https://github.com/CodeSoom/react-week1-assignment-2/blob/koremp/src/index.js>

1. `render()` 함수에 관리할 상태들 (누른 숫자, 이전에 누른 숫자, 연산자, 연산 클릭 유무) 등을 인자로 주어 관리하도록 한다.
2. `render()` 함수 내 숫자와 연산자 입력시 호출될 함수들을 만들어 놓아 매번 렌더링될 때마다 다른 값이 되도록 한다.
3. 연산자(더하기, 빼기, 곱하기, 나누기)의 종류에 해당하는 객체를 만들어 개별 연산자(key)가 눌렸을 때 함수(value)가 호출이 되도록 한다.
4. 연산자를 누른 이후 처음 숫자를 누를 때의 상태관리를 위해 숫자 클릭 이벤트 함수에 if문으로 연산자 클릭 유무를 확인하도록 한다.

```js
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-unused-vars */

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
};

function render({
  currentNumber, preNumber, preOperator, isOperated,
}) {
  const handleClickNumber = (number) => {
    if (isOperated) {
      render({
        currentNumber: number, preNumber, preOperator, isOperated: false,
      });
      return;
    }

    render({
      currentNumber: currentNumber * 10 + number,
      preNumber,
      preOperator,
      isOperated,
    });
  };

  /* ... */
}

render(...)
```
