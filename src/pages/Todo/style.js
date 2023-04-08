import styled from 'styled-components';

export const TodoListWrap = styled.div`
  padding-bottom: 100px;
  li {
    padding: 8px 0;
  }

  li input[type='checkbox'] {
    margin-right: 5px;
  }

  .editBtn {
    display: inline-block;
    padding-left: 5px;
    color: #666;
    cursor: default;
  }

  .editBtn input[type='button'] {
    padding: 0 5px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .editBtn input[type='button']:hover {
    color: #000;
  }

  .editBtn input[type='checkbox'] {
    color: #000;
  }
`;

export const InputWrap = styled.div`
  padding: 70px 0 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h3 {
    width: 100%;
    text-align: center;
    padding-bottom: 50px;
  }

  h3 span {
    color: #94a61a;
    font-style: italic;
    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    font-size: 1.8rem;
    padding-right: 4px;
  }

  input[type='text'],
  [type='submit'] {
    padding: 10px 20px;
    border: 1px solid #ddd;
    margin: 0 5px;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s;
  }

  input[type='text'] {
    width: 400px;

    &:focus {
      border: 1px solid #94a61a;
    }
  }

  input[type='submit']:hover {
    background: #94a61a;
    color: #fff;
    border: 1px solid #94a61a;
  }
`;
