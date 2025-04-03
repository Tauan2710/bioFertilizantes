import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const CardsContainer = styled.div`
  width: 45%;
`;
export const DefaultLink = styled(Link)`
  text-decoration: none;
`;
