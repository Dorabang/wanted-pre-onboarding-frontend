import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './style';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const SERVER_URL = 'https://pre-onboarding-selection-task.shop';

  const Navigate = useNavigate();

  const onSignUpSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(`${SERVER_URL}/auth/signup`, {
        email,
        password,
      })
      .catch((e) => {
        if (e.response) {
          setError(e.response.data.message);
        }
      });

    // alert('회원가입이 완료되었습니다.');
    // Navigate('../signin');
  };

  const onValueChange = (event) => {
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
        <h2>회원가입</h2>
        <form onSubmit={onSignUpSubmit}>
          <legend>회원가입 양식</legend>
          <label htmlFor='idEmail'>이메일</label>
          <input
            type='text'
            name='email'
            id='idEmail'
            defaultValue={email}
            onChange={onValueChange}
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
            onChange={onValueChange}
            data-testid='password-input'
            required
            minLength={8}
            placeholder='비밀번호를 8자 이상 입력해주세요.'
          />

          <input
            type={error === '' ? 'hidden' : 'text'}
            disabled
            value={error}
            id='ErrorMsg'
          />

          <input type='submit' value='회원가입' data-testid='signup-button' />

          <input
            type='reset'
            value='회원가입 취소'
            onClick={() => {
              Navigate(-1);
            }}
          />
        </form>
      </FormContainer>
    </>
  );
};

export default SignUp;
