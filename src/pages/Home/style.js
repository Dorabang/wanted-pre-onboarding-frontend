import styled from 'styled-components';

export const Container = styled.div`
  .inner {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 200px;
  }

  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }

  .title h2 {
    font-family: 'Noto Serif KR', serif;
    font-size: 3.2rem;
    font-weight: 900;
    font-style: italic;
    color: #94a61a;
    padding-bottom: 10px;
  }
  .title p {
    color: #333;
  }

  button {
    padding: 10px 40px;
    border: 1px solid #94a61a;
    color: #94a61a;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s, border 0.3s;
  }

  button:nth-of-type(1) {
    margin-right: 10px;
  }

  button:hover {
    border: 1px solid #94a61a;
    color: #fff;
    background: #94a61a;
  }

  @media (max-width: 500px) {
    .title h2 {
      font-size: 2.4rem;
      font-weight: 900;
      font-style: italic;
      color: #94a61a;
      padding-bottom: 10px;
    }

    button {
      padding: 8px 32px;
    }
  }
`;
