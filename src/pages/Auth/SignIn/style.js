import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 100px 0;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 20px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    padding: 40px 30px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  label {
    width: 100%;
    text-align: left;
  }

  input[type='text'],
  [type='password'] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px;
    background: transparent;

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid #94a61a;
    }
  }

  button[type='submit'],
  button[type='button'],
  [type='reset'] {
    padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid #ddd;
    color: #999;
    transition: background 0.3s, color 0.3s, border 0.3s;
    cursor: pointer;
  }

  button[type='button'] {
    cursor: default;
  }

  button[type='submit']:hover {
    background: #94a61a;
    color: #fff;
    border: 1px solid #94a61a;
  }

  input[type='reset'] {
    margin-left: 10px;
  }

  input[type='reset']:hover {
    color: #000;
    border: 1px solid #999;
  }

  #ErrorMsg {
    border: none;
    background: rgba(234, 47, 28, 0.08);
    padding: 12px 0;
    text-align: center;
    margin: 0 0 20px;
    color: #ea2f1c;
    width: 100%;
    font-size: 1.4rem;
  }

  @media (max-width: 500px) {
    width: 100%;

    button[type='submit'],
    input:disabled,
    [type='reset'] {
      padding: 10px 24px;
    }

    [type='password'] {
      margin-bottom: 30px;
    }
  }
`;
