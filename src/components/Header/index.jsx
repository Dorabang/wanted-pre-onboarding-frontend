import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, Container } from './style';

const Header = ({ children, isLoggedIn }) => {
  return (
    <>
      <HeaderStyle>
        <div className='inner'>
          <h1>
            <Link to='/'>Todo Something</Link>
          </h1>
        </div>
      </HeaderStyle>

      <Container>{children}</Container>
    </>
  );
};

export default Header;
