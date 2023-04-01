import React from 'react';
import { IntroSection } from './style';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <IntroSection>
        <div className='inner'>
          <div className='title'>
            <h2>Todo Something</h2>
            <p>간단하게 관리하는 Todo 리스트 서비스</p>
            <p>로그인 후 이용가능한 서비스입니다.</p>
          </div>
          <button>
            <Link to='/signin'>로그인</Link>
          </button>
          <button>
            <Link to='/signup'>회원가입</Link>
          </button>
        </div>
      </IntroSection>
    </>
  );
};

export default Home;
