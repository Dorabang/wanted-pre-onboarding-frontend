import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { FormContainer } from './style';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const SERVER_URL = 'https://pre-onboarding-selection-task.shop';

  const Navigate = useNavigate();

  const onHandleSubmitSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${SERVER_URL}/auth/signin`, {
        email,
        password,
      });

      localStorage.setItem('userToken', response.data.access_token);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      }
    }

    alert('로그인이 완료되었습니다.');

    return Navigate('../todo');
  };

  const onHandleChangeValue = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
      <FormContainer>
        <h2>로그인</h2>
        <form onSubmit={onHandleSubmitSignIn}>
          <legend>로그인 양식</legend>
          <label htmlFor='idEmail'>이메일</label>
          <input
            type='text'
            name='email'
            id='idEmail'
            defaultValue={email}
            onChange={onHandleChangeValue}
            data-testid='email-input'
            required
            pattern='[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*'
            placeholder='이메일을 입력해주세요.'
          />
          <label htmlFor='pw'>비밀빈호</label>
          <input
            type='password'
            name='password'
            id='pw'
            defaultValue={password}
            onChange={onHandleChangeValue}
            data-testid='password-input'
            required
            minLength={8}
            placeholder='8자 이상의 비밀번호를 입력해주세요.'
          />

          <input
            type={error === '' ? 'hidden' : 'text'}
            disabled
            value={error}
            id='ErrorMsg'
          />
          {password === '' && email === '' ? (
            <div className='btn'>로그인</div>
          ) : (
            <input type='submit' value='로그인' data-testid='signin-button' />
          )}
          <input
            type='button'
            value='회원가입'
            onClick={() => Navigate('../signUp')}
          />
        </form>
      </FormContainer>
    </>
  );
};

export default SignIn;
