import React, { useEffect } from 'react';
import { Container } from './style';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ accessToken }) => {
  const Navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      alert('이미 로그인이 완료되었습니다.');
      Navigate('../todo');
    }
  }, [accessToken, Navigate]);
  return (
    <>
      <Container>
        <div className='inner'>
          <div className='title'>
            <h2>Todo Something</h2>
            <p>
              간단하게 관리하는 Todo 리스트 서비스
              <br />
              (로그인 후 이용가능한 서비스입니다.)
            </p>
          </div>

          <button>
            <Link to='/signin'>로그인</Link>
          </button>
          <button>
            <Link to='/signup'>회원가입</Link>
          </button>
        </div>
      </Container>
    </>
  );
};

export default Home;
