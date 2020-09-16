import styled from 'styled-components'

const Container = styled.div`
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

export default Container
