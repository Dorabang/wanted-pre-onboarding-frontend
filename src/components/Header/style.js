import styled from 'styled-components';

export const HeaderStyle = styled.header`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .inner {
    height: 80px;
    position: relative;
  }

  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  h1 a {
    font-size: 2rem;
    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    font-style: italic;
    color: #94a61a;
  }

  ul {
    display: flex;
  }

  ul li.LogOutBtn {
    cursor: pointer;
    margin: 0 20px;
    color: #999;
    transition: color 0.3s;
  }

  .LogOutBtn:hover {
    color: #000;
  }

  ul li a {
    margin: 0 20px;
    color: #999;
    transition: color 0.3s;
    cursor: pointer;
  }

  ul li a:hover {
    color: #000;
  }
`;

export const Container = styled.main`
  section .inner {
    width: 62.5%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    section .inner {
      width: 92.187%;
    }
  }

  @media (max-width: 768px) {
    section .inner {
      width: 94.791%;
    }
  }
`;
