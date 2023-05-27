import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './style';
import axios from 'axios';

const SignUp = ({ accessToken, SERVER_URI }) => {
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [pwdCheck, setPwdCheck] = useState(false);
  const [error, setError] = useState('');

  const Navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      alert('이미 로그인이 완료되었습니다.');
      Navigate('../todo');
    }
  }, [Navigate, accessToken]);

  const onSignUpSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${SERVER_URI}/auth/signup`, {
        email,
        password,
      });

      alert('회원가입이 완료되었습니다.');
      Navigate('../signin');
    } catch (err) {
      if (err?.response) {
        setError(err.response.data.message);
      }
    }
  };

  const onEmailChange = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === 'email') {
      setEmail(value);
      if (value.includes('@')) {
        setEmailCheck(true);
      } else {
        setEmailCheck(false);
      }
    }
  };

  const onPwdChange = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === 'password') {
      setPassword(value);
      if (value.length >= 8) {
        setPwdCheck(true);
      } else {
        setPwdCheck(false);
      }
    }
  };

  return (
    <div className='inner'>
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
            onChange={onEmailChange}
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
            onChange={onPwdChange}
            data-testid='password-input'
            required
            minLength={8}
            placeholder='8자 이상의 비밀번호를 입력해주세요.'
          />

          <input
            type={error === '' ? 'hidden' : 'text'}
            disabled
            value={`📛 ${error}`}
            id='ErrorMsg'
          />

          <button
            type={!emailCheck && !pwdCheck ? 'button' : 'submit'}
            data-testid='signup-button'
          >
            회원가입
          </button>

          <input
            type='reset'
            value='회원가입 취소'
            onClick={() => {
              Navigate(-1);
            }}
          />
        </form>
      </FormContainer>
    </div>
  );
};

export default SignUp;
