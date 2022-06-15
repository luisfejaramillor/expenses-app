import styled from "styled-components";

export const StyledExpenses = styled.div`
  background-color: #fffbf6;
  border-radius: 20px;
  padding: 32px 40px 40px 40px;
  height: 100%;

  .first {
    height: 42px;
    margin-bottom: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #382314;
  }
  .second {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 17px;

    .graph {
      color: #fff;
      font-size: 20px;
      display: flex;
      flex-flow: column-reverse nowrap;
      width: 50.36px;
      max-height: 228px;
      height: 228px;

      .value {
        padding: 9px;
        max-height: 40px;
        max-width: 75px;
        width: 75px;
        background: #382314;
        border-radius: 5px;
        color: #fffbf6;
        margin-bottom: 8px;
        position: relative;
        right: 15px;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        &.disable {
          display: none;
        }
      }

      .bar {
        max-height: 150px;
        height: 150px;
        background: #ec755d;
        border-radius: 5px;
        ${({ data }) => {
          return data.map(
            (e) => `
          &.${e.day}{           
              height: ${e.amount}px;           
          }`
          );
        }}
        cursor: pointer;
        :hover {
          background: #ff9b86;
        }
        &.current-day {
          background: #76b5bc;
        }
        &.hovered-current-day {
          background: #b4e0e5;
        }
      }
    }
    .day {
      line-height: 20px;
      text-align: center;
      height: 20px;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      text-align: center;
      color: #92857a;
      margin-top: 8px;
    }
  }

  hr {
    margin: 32px 0px;
    border: 1px solid #f8e9dd;
  }
  .total-balance {
    display: flex;
    height: 87px;
    .total-month {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      p:first-child {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #92857a;
      }
      p:last-child {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 62px;
        color: #382314;
      }
    }
    .porcentage-last-month {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      p:first-child {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #382314;
      }
      p:last-child {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #92857a;
      }
    }
  }

  @media (max-width: 375px) {
    padding: 24px 20px;

    .first {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .second {
      gap: 12px;
      .graph {
        max-height: 199px;
        height: 199px;
        width: 33px;
        .value {
          font-size: 13px;
          max-width: 47px;
          padding: 2px;
          right: 8px;
          width: 47px;
        }
      }
    }
    .total-balance {
      .total-month p:first-child {
        font-size: 15px;
      }
      .total-month p:last-child {
        font-size: 30px;
      }
      .porcentage-last-month p:last-child {
        font-size: 15px;
      }
    }
  }
`;
