import styled from "styled-components";

export const CardsContainer = styled.div`
  margin: 5rem 0;

  .card {
    margin: 0 2%;
  }

  .infected {
    border-bottom: 1rem solid rgba(0, 0, 255, 0.5);
  }
  .recovered {
    border-bottom: 1rem solid rgba(0, 255, 0, 0.5);
  }
  .deaths {
    border-bottom: 1rem solid rgba(255, 0, 0, 0.5);
  }
`;
