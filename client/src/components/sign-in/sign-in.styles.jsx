import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

export const SignInButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
