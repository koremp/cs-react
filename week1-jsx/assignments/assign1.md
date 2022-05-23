# 1주차 과제 1

## 구현할 기능

```js
//
let count = 0;

function handleClick() {
  count = count + 1;
  render();
}

function render() {
  const elem = (
    /* ... */
  )
}

render()
```

에서 count 없애기

## 구현 내용

`render()` 함수에 count 인자를 주어 `onClick()` event마다 `render()` 이벤트를 호출하도록 함`

```js
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

function render(count) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => { render(count + 1); }}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => render(number)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
```
