import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("${bg}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
