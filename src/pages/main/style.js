import styled, { keyframes, css } from 'styled-components'

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

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs( props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #302099;
  border: 0;
  padding: 0 8px;
  margin-left: 8px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite
      }
    `
  }
`;

export let List = styled.ul`
  list-style: none;
  margin-top: 24px;

  li {
    padding: 8px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eef;
    }

    a {
      color: #302099;
      text-decoration: none;
    }
  }
`;
