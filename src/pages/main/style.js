import styled from 'styled-components'

export const Container = styled.form`
  max-width: 720px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 24px;
  margin: 32px auto;

  h1 {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 16px
    }
  }
`;

export const Form = styled.form`
  margin-top: 8px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 2px solid #eef;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background: #302099;
  border: 0;
  padding: 0 8px;
  margin-left: 8px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
