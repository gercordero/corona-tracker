import styled from "styled-components";

export const CardContainer = styled.div`
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

  @media (max-width: 770px) {
    .card {
      margin: 2% 0;
    }
  }
`;
