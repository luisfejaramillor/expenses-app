import React from "react";
import { Expenses } from "./components/Balance";
import { Balance } from "./components/Expenses";
import { Container } from "./components/styles/Container.styled";
import { StyledWrapper } from "./components/styles/Wrapper.styled";

export const ExpensesApp = () => {
  return (
    <Container>
      <StyledWrapper>
        <Expenses />
        <Balance />
      </StyledWrapper>
    </Container>
  );
};
