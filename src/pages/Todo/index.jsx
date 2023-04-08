import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InputWrap, TodoListWrap } from './style';

const TodoList = ({ accessToken, SERVER_URI }) => {
  const [todos, setTodos] = useState([]);
  const [todosIndex, setTodosIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [editing, setEditing] = useState(true);
  const [newTodo, setNewTodo] = useState('');

  const Navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      alert('로그인이 필요한 서비스입니다.');
      Navigate('../signin');
    }
    try {
      axios
        .get(`${SERVER_URI}/todos`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => setTodos(response.data));
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }, [accessToken, SERVER_URI, Navigate]);

  const onHandleChange = (event) => {
    const {
      target: { value },
    } = event;

    setNewTodo(value);
  };

  const onRegisterTodo = async (event) => {
    event.preventDefault();

    if (newTodo === '') {
      return;
    }

    try {
      await axios
        .post(
          `${SERVER_URI}/todos`,
          { todo: `${newTodo}` },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          setTodos((prev) => [...prev, response.data]);
          setNewTodo('');
        });
    } catch (err) {
      if (err.response) {
        console.log('RegisterTodoError : ' + err.response.data.message);
      }
    }
  };

  const onDeleteTodo = async (id) => {
    try {
      await axios
        .delete(`${SERVER_URI}/todos/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          if (response.status === 204) {
            setTodos((currentTodos) =>
              currentTodos.filter((todo) => todo.id !== id)
            );
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };
  const onUpdateTodo = async (todo, id) => {
    /*     const updated = todos.map((updatedTodo) => {
      if (todo.id === id) {
        axios.put(`${SERVER_URI}/todos/${id}`, {
          todo: updatedTodo.todo,
          isCompleted: updatedTodo.isChecked,
        });
      }
    });
    try {
      await axios.put(
        `${SERVER_URI}/todos/:${id}`,
        { todo: '2222', isCompleted: true },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
    } catch (err) {
      if (err) {
        console.log(err);
      }
    } */
  };

  const onCheckedChange = () => {};

  return (
    <>
      <div className='inner'>
        <InputWrap>
          <h3>
            <span>Todo Something</span>과 함께
            <br />
            나만의 일정을 관리해보세요!
          </h3>
          <form onSubmit={onRegisterTodo}>
            <legend>투두 리스트 추가 양식</legend>
            <input
              type='text'
              value={newTodo}
              placeholder='투두 리스트를 입력해주세요.'
              data-testid='new-todo-input'
              onChange={onHandleChange}
            />
            <input
              type='submit'
              value='추가'
              data-testid='new-todo-add-button'
            />
          </form>
        </InputWrap>
        <TodoListWrap>
          <ul>
            {todos &&
              todos.map((item) => (
                <li key={item.id}>
                  {editing && (
                    <label>
                      <input
                        type='checkbox'
                        checked={item.isCompleted}
                        onChange={() => onCheckedChange(item.todo, item.id)}
                      />
                    </label>
                  )}
                  <span>{item.todo}</span>
                  <div className='editBtn'>
                    {editing ? (
                      <>
                        <label>
                          <input
                            type='button'
                            onClick={(prev) => setEditing(!prev)}
                            value='편집'
                          />
                        </label>
                        <label>
                          <input
                            type='button'
                            onClick={() => onDeleteTodo(item.id)}
                            value='삭제'
                          />
                        </label>
                      </>
                    ) : (
                      <>
                        <label>
                          <input type='button' value='수정' />
                          <input
                            type='button'
                            value='취소'
                            onClick={() => setEditing(false)}
                          />
                        </label>
                      </>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </TodoListWrap>
      </div>
    </>
  );
};

export default TodoList;
