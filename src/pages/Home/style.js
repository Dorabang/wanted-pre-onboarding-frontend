import styled from 'styled-components';

export const Container = styled.div`
  .inner {
    position:absolute;
    left:50%;
    top:30%;
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
  }

  .title h2 {
    font-family: 'Noto Serif KR', serif;
    font-size: 3.6rem;
    font-weight: 900;
    font-style: italic;
    color: #94a61a;
    padding-bottom: 10px;
  }

  p + p {
    padding-top:5px;
  }

  button {
    padding 10px 40px;
    border: 2px solid #94a61a;
    color: #94a61a;
    border-radius: 5px;
    margin: 40px 5px 0;
    transition: background 0.3s, color 0.3s, border 0.3s;
  }

  button:hover {
    padding 10px 40px;
    border: 2px solid #94a61a;
    color: #fff;
    background: #94a61a;
  }
`;
