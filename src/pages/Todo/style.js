import styled from 'styled-components';
import checked from '../../images/checked.png';
import notchecked from '../../images/notchecked.png';

export const TodoListWrap = styled.div`
  padding-bottom: 100px;
  li {
    margin-bottom: 20px;
  }

  input[type='button'] {
    padding: 0 4px;
    cursor: pointer;
    color: #666;
    transition: color 0.3s;
    position: relative;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      display: block;
      width: 100px;
      height: 5px;
      background: #000;
    }
  }

  label:nth-child(2) input[type='button'] {
    margin-left: 10px;
  }

  label input[type='text'] {
    padding: 3px 8px;
    width: 300px;
    border: 1px solid #ddd;
    margin-right: 10px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    transition: background 0.3s, color 0.3s;

    &:focus {
      outline: none;
      border: 1px solid #94a61a;
    }
  }

  input[type='button']:hover {
    color: #000;
  }

  .check {
    position: relative;
    padding-left: 22px;
  }

  .check input {
    position: absolute;
    left: 0;
    top: 55%;
    transform: translateY(-50%);
    &::before {
      position: absolute;
      left: -2px;
      top: -2px;
      display: block;
      width: 20px;
      height: 20px;
      content: '';
      background: url(${notchecked}) no-repeat;
      background-size: cover;
      transition: background 0.2s;
    }

    &:focus {
      outline: none;
      border: none;
    }

    &:checked::before {
      position: absolute;
      left: -2px;
      top: -2px;
      display: block;
      width: 20px;
      height: 20px;
      content: '';
      background: url(${checked}) no-repeat;
      background-size: cover;
    }
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
    background: rgba(255, 255, 255, 0.5);
    transition: background 0.3s, color 0.3s;
  }

  input[type='text'] {
    width: 400px;

    &:focus {
      outline: none;
      border: 1px solid #94a61a;
    }
  }

  input[type='submit']:hover {
    background: #94a61a;
    color: #fff;
    border: 1px solid #94a61a;
  }
`;
