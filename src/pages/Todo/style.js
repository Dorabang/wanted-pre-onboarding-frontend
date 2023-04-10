import styled from 'styled-components';
import checked from '../../images/checked.png';
import notchecked from '../../images/notchecked.png';

export const TodoListWrap = styled.div`
  padding-bottom: 100px;

  ul {
    padding: 0 50px;
  }

  h3 {
    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-style: italic;
    border-top: 1px dashed #94a61a;
    padding: 20px 0;
    color: #94a61a;
  }

  li {
    margin-bottom: 20px;
  }

  input[type='button'],
  input[type='submit'] {
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

  label:nth-child(2) input[type='submit'] {
    margin-left: 20px;
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

  input[type='submit']:hover,
  input[type='button']:hover {
    color: #000;
  }

  .check,
  .check2 {
    position: relative;
    padding-left: 24px;
  }

  .check2 {
    &::after {
      position: absolute;
      right: -14px;
      top: 53%;
      transform: translateY(-50%);
      content: '';
      display: inline-block;
      width: 2px;
      height: 16px;
      background: #999;
    }
  }

  .check input,
  .check2 input {
    position: absolute;
    left: 0;
    top: 52%;
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
  padding: 70px 0 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  form {
    width: 100%;
    text-align: center;
  }

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
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    transition: background 0.3s, color 0.3s;
  }

  input[type='text'] {
    width: 400px;
    margin-right: 10px;

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

  @media (max-width: 500px) {
    input[type='text'] {
      width: calc(100% - 80px);
    }
  }
`;
