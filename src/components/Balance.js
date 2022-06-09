import React from "react";
import { StyledBalance } from "./styles/Balance.styled";



export const Expenses = () => {
  return (
    <StyledBalance>
      <div>
        <p>My balance</p>
        <h1>$921.48</h1>
      </div>
      <div className="circles">
        <div></div>
        <div></div>
      </div>
    </StyledBalance>
  );
};
