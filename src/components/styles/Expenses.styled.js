import styled from "styled-components";

export const StyledExpenses = styled.div`
  background-color: #fffbf6;
  border-radius: 20px;
  padding: 40px;
  height: 100%;

  .first {
    height: 42px;
    margin-bottom: 66px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #382314;
  }
  .second {
    height: 178px;

    ul {
      list-style: none;
      display: flex;
      height: 100%;
      gap: 18px;
      li {
        width: 50px;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;

        .value {
          display: flex;
          max-width: 75px;
          width: 71px;
          height: 100%;
          align-items: flex-end;

          position: relative;
          p {
            position: absolute;
            height: 40px;
            background: #382314;
            border-radius: 5px;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #fffbf6;
            padding: 9px;
            left: -15px;
          }
        }

        .graph {
          display: flex;
          flex-direction: column-reverse;
          margin-top: 8px;

          div {
            background: #ec755d;
            border-radius: 5px;
            max-height: 110px;
          }
        }

        ${({ data }) => {
          return data.map(
            (e) => `
          .${e.day}{
            div{
              height: ${e.amount}px
            }
          }         
         `
          );
        }}

        .day {
          height: 20px;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          text-align: center;
          color: #92857a;
          margin-top: 8px;
        }
      }
    }
  }

  hr {
    margin: 32px 0px;
    border: 1px solid #f8e9dd;
  }
  .total-balance {
    display: flex;
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
`;
