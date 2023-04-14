import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './style';
import axios from 'axios';

const SignIn = ({ accessToken, SERVER_URI }) => {
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

  const onHandleSubmitSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${SERVER_URI}/auth/signin`, {
        email,
        password,
      });

      localStorage.setItem('access_token', response.data.access_token);

      alert('로그인이 완료되었습니다.');

      return Navigate('../todo');
    } catch (err) {
      if (err.response.status === 401) {
        setError('이메일 또는 비밀번호를 잘못 입력하였습니다.');
      } else {
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
        <h2>로그인</h2>
        <form onSubmit={onHandleSubmitSignIn}>
          <legend>로그인 양식</legend>
          <label htmlFor='idEmail'>이메일</label>
          <input
            type='text'
            name='email'
            id='idEmail'
            defaultValue={email}
            onChange={onEmailChange}
            data-testid='email-input'
            required
            pattern='[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]*+[a-zA-Z]*+[.]*[a-zA-Z]*'
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
            data-testid='signin-button'
          >
            로그인
          </button>

          <input
            type='reset'
            value='회원가입'
            onClick={() => Navigate('../signUp')}
          />
        </form>
      </FormContainer>
    </div>
  );
};

export default SignIn;
