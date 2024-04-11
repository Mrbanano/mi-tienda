import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }

  @media (min-width: 1200px) {
    gap: 40px;
  }

  @media (min-width: 1440px) {
    gap: 50px;
  }
`;