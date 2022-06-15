import React, { useState } from "react";
import { data } from "../data/data";
import { StyledExpenses } from "./styles/Expenses.styled";

console.log(data)

export const Balance = () => {
  const [{ expenses, activeObject }, setExpenses] = useState({
    activeObject: null,
    expenses: data,
  });

  const getDate = () => {
    const date = new Date();
    return date.getUTCDay() - 1;
  };

  const getHigherNumber = () => {
    const amounts = data.map((e) => e.amount);
    const sorted = amounts.sort((a, b) => a - b);
    const higerValue = sorted[sorted.length - 1];
    return higerValue;
  };

  const modifyData = (value) => {
    return data.map(e => {
      return { ...e, amount: (150 * parseInt((e.amount * 100) / value)) / 100 };
    });
  };

  const handleHover = (index) => {
    setExpenses((object) => ({
      ...object,
      activeObject: expenses[index].day,
    }));
  };

  const reduceAmount = () => {
    return data
      .map((e) => e.amount)
      .reduce((total, amount) => {
        return total + amount;
      }, 0);
  };

  const higerValue = getHigherNumber();
  const actualDay = getDate();
  const totalAmount = reduceAmount();

  return (
    <StyledExpenses data={modifyData(higerValue)}>
      <div className="first">
        <p>Spending - Last 7 days</p>
      </div>

      <div className="second">
        {expenses.map((e, index) => (
          <div className="graph" key={e.day}>
            <div className="day">{e.day}</div>
            <div
              className={`bar ${e.day} ${actualDay === index && "current-day"}
              ${
                actualDay === index && activeObject === e.day
                  ? "hovered-current-day"
                  : ""
              }
              `}
              onMouseEnter={() => handleHover(index)}
            ></div>
            <div
              className={`value ${
                activeObject === e.day ? "hovered" : "disable"
              }`}
            >{`$${e.amount}`}</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="total-balance">
        <div className="total-month">
          <p>Total this month</p>
          <p>${parseFloat(totalAmount).toFixed(2)} </p>
        </div>
        <div className="porcentage-last-month">
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </StyledExpenses>
  );
};
