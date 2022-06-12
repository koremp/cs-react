# App.jsx 리팩토링하기

적극적인 관심사의 분리
App은 `handleChangeTitle`, `handleAddTask`, `handleDeleteTask`이 어떻게 동작하는지 몰라도 된다.

## 기존

```jsx
import { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  const { newId, taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    });
  }

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
```

## 적극적인 관심사의 분리 이후

```jsx
import { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function changeTaskTitle(state, value) {
  return {
    ...state,
    taskTitle: event.target.value,
  }
}

function addTask(state) {
  const { newId, taskTitle, tasks } = state;

  return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    }
}

function deleteTask(state, value) {
  const { tasks } = state;

  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  }
}

export default function App() {
  const [state, setState] = useState(initialState);

  const { taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState(updateTaskTitle(state, event.target.value));
  }

  function handleClickAddTask() {
    setState(addTask(state));
  }

  function handleClickDeleteTask(id) {
    setState(deleteTask(state, id));
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
```

## Redux를 사용한 리팩토링

### install redux

```bash
npm i react-redux redux
```

### actions.js

```js
// actions.js

export function updateTaskTitle(taskTitle) {
  return {
    type: "updateTaskTitle",
    payload: {
      taskTitle,
    }
  };
};

export function deleteTask(id) {
  return {
    type: "deleteTask",
    payload: {
      id
    }
  };
};

export function addTask() {
  return {
    type: "addTask"
  };
};
```

### store.js

```js
//store.js
import { configureStore } from 'redux';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'changeTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}

const store = configureStore(reducer);

export default store;
```

### index.jsx에 추가 Provider, store 추가

```jsx
// index.jsx
// 생략 
  <Provider store={store}>
    <App/>
  </Provider>
// 대충 생략
```

### App.jsx 리팩토링

```jsx
//App.jsx
import React from 'react';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask
} from './actions'



export default function App() {
  const { taskTitle, tasks } = useSelector((state) => ({
     taskTitle: state.taskTitle,
     tasks: state.tasks,
   })

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value))
  }

  function handleClickAddTask() {
    dispatch(addTask())
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id))
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
```

## 테스트 리팩토링

### react-redux mock

프로젝트의 루트 디렉토리에 `./__mocks__`를 생성하고, 다음과 같이 `react-redux.js` 파일을 생성한다.

```js
export function useSelector = jest.fn();

export function useDispatch = jest.fn();
```

### App.test.jsx

App.jsx에 `jest.mock('react-redux)`를 입력하면 react-redux의 useSelector, useDispatch를 모킹하여 사용할 수 있다.

```jsx
//App.test.jsx

import { render } from '@testing-library/react';

import App from './App';

import { useSelector } from 'react-redux'

jest.mock('react-redux')

test('App', () => {
  const tasks = [
    {id: 1, title: 'aaaaa'},
    {id: 2, title: 'bbbbb'},
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render({
    <App/>
  })

  expect(getByText(/aaaa/)).not.toBeNull();
});

```

