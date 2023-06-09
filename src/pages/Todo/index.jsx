import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InputWrap, TodoListWrap } from './style';

const TodoList = ({ SERVER_URI }) => {
  const accessToken = localStorage.getItem('access_token');
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [newTodo, setNewTodo] = useState('');
  const [modifyTodo, setModifyTodo] = useState('');

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

  const toggleEditing = (id) => {
    setEditIndex(id);
    setEditing((prev) => !prev);
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

  const onUpdateTodo = (e, id) => {
    e.preventDefault();
    const todoObj = { ...todos.filter((todo) => todo.id === editIndex)[0] };
    axios
      .put(
        `${SERVER_URI}/todos/${id}`,
        {
          todo: modifyTodo,
          isCompleted: todoObj.isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        const updatedTodo = response.data;
        setTodos((currentTodo) => {
          const updatedTodoIndex = currentTodo.findIndex(
            (todo) => todo.id === updatedTodo.id
          );
          const updatedTodos = [
            ...currentTodo.slice(0, updatedTodoIndex),
            updatedTodo,
            ...currentTodo.slice(updatedTodoIndex + 1),
          ];
          return updatedTodos;
        });
      })
      .catch((err) => console.log(err));
    setEditing((prev) => !prev);
    setModifyTodo('');
  };

  const onUpdateChecked = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
        axios
          .put(
            `${SERVER_URI}/todos/${id}`,
            {
              todo: updatedTodo.todo,
              isCompleted: updatedTodo.isCompleted,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => console.log(response.data))
          .catch((err) => console.log(err));
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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
          <h3>Todo List</h3>
          <ul>
            {todos &&
              todos.map((item) => (
                <li key={item.id}>
                  {editing && item.id === editIndex ? (
                    <>
                      <label
                        className='check'
                        htmlFor={`checkingbox${item.id}`}
                      >
                        <input
                          type='checkbox'
                          id={`checkingbox${item.id}`}
                          defaultChecked={item.isCompleted ? true : false}
                          onChange={(e) =>
                            onUpdateChecked(item.id, e.target.checked)
                          }
                        />
                      </label>
                      <label>
                        <input
                          type='text'
                          value={modifyTodo}
                          data-testid='modify-input'
                          onChange={(e) => setModifyTodo(e.target.value)}
                        />
                      </label>
                      <label>
                        <input
                          type='submit'
                          value='제출'
                          data-testid='submit-button'
                          onClick={(e) => onUpdateTodo(e, item.id)}
                        />
                      </label>
                      <label>
                        <input
                          type='button'
                          value='취소'
                          data-testid='cancel-button'
                          onClick={() => setEditing(false)}
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <label
                        className='check2'
                        htmlFor={`checkingbox${item.id}`}
                      >
                        <input
                          type='checkbox'
                          defaultChecked={item.isCompleted ? true : false}
                          id={`checkingbox${item.id}`}
                          onChange={(e) =>
                            onUpdateChecked(item.id, e.target.checked)
                          }
                        />
                        {item.todo}
                      </label>
                      <label>
                        <input
                          type='submit'
                          value='수정'
                          data-testid='modify-input'
                          onClick={(e) => toggleEditing(item.id)}
                        />
                      </label>
                      <label>
                        <input
                          type='button'
                          value='삭제'
                          data-testid='delete-button'
                          onClick={() => onDeleteTodo(item.id)}
                        />
                      </label>
                    </>
                  )}
                </li>
              ))}
          </ul>
        </TodoListWrap>
      </div>
    </>
  );
};

export default TodoList;
