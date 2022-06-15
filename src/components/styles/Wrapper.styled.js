import styled from "styled-components";

export const StyledWrapper = styled.div`
    width: 540px;
    display: flex;
    flex-direction: column;

    @media (max-width: 640px) {
    max-width: 343px;
  }
`