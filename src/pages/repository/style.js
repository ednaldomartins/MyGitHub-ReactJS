import styled from 'styled-components'

export const Loading = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #302099;
    font-size: 14px;
    text-decoration: none
  }

  img {
    width: 128px;
    border-radius: 50%;
    margin-top: 16px;
  }

  h1 {
    margin-top: 8px;
    font-size: 16px;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    color: #446;
    line-height: 1.2;
    text-align: center;
    max-width: 360px
  }
`;
