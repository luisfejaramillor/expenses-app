import React from "react";
import { data } from "../data/data";
import { StyledExpenses } from "./styles/Expenses.styled";

export const Balance = () => {
  
  
  
  return (
    <StyledExpenses data={data} >
      <div className="first">
        <p>Spending - Last 7 days</p>
      </div>
      <div className="second">
        <ul>
          <li>
            <div className="value" >
              <p>$52.30</p>
            </div>
            <div className="graph mon">
              <div></div>
            </div>
            <p className="day">mon</p>
          </li>
          <li>
            <div className="value" >
              <p>$52.30</p>
            </div>
            <div className="graph tue">
              <div></div>
            </div>
            <p className="day">tue</p>
          </li>
          <li>
            <div className="value" >
              <p>$52.30</p>
            </div>
            <div className="graph wed">
              <div></div>
            </div>
            <p className="day">wed</p>
          </li>
          <li>
            <div className="value" >
              <p>$52.30</p>
            </div>
            <div className="graph thu">
              <div></div>
            </div>
            <p className="day">thu</p>
          </li>
          <li>
            <div className="value" >
              <p>$52.30</p>
            </div>
            <div className="graph fri">
              <div></div>
            </div>
            <p className="day">fri</p>
          </li>
          <li>
            <div className="value" >
              <p>$52.30</p>
            </div>
            <div className="graph sat">
              <div></div>
            </div>
            <p className="day">sat</p>
          </li>
          <li>
            <div className="value" >
              <p>$52.30</p>
            </div>
            <div className="graph sun">
              <div></div>
            </div>
            <p className="day">sun</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="total-balance" >
        <div className="total-month" >
          <p>Total this month</p>
          <p>$478.33</p>
        </div>
        <div className="porcentage-last-month" >
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </StyledExpenses>
  );
};
