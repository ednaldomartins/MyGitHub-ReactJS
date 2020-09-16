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

export const IssueList = styled.ul`
  padding-top: 16px;
  margin-top: 16px;
  border-top: 2px solid #eef;
  list-style: none;

  li {
    display: flex;
    padding: 8px 16px;
    border: 1px solid #eef;
    border-radius:4px;
    align-items: center;

    & + li {
      margin-top: 8px;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #eef;
    }

    div {
      flex: 1;
      margin-left: 16px;

      strong {
        font-size: 18px;

        a {
          text-decoration: none;
          color: #223;

          &:hover {
            color: #302099
          }
        }
      }

      p {
        margin-top: 2px;
        font-size: 12px;
        color: #779;
      }
    }

  }
`;
