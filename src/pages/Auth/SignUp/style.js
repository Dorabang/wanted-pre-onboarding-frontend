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

    &:focus {
      outline: none;
      border: 1px solid #94a61a;
    }
  }

  input[type='submit'],
  [type='reset'],
  .btn {
    padding: 10px 30px;
    border-radius: 5px;
    margin: 0 5px;
    border: 1px solid #ddd;
    color: #999;
    transition: background 0.3s, color 0.3s, border 0.3s;
  }

  .btn {
    cursor: default;
  }

  input[type='submit']:hover {
    background: #94a61a;
    color: #fff;
    border: 1px solid #94a61a;
  }

  input[type='reset']:hover {
    color: #000;
    border: 1px solid #999;
  }

  #ErrorMsg {
    border: none;
    background: none;
    text-align: center;
    margin: 0 0 20px;
    color: #ea2f1c;
  }
`;
