import styled from "styled-components";

export const StyledBalance = styled.div`
  background-color: #ec755d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  border-radius: 20px;
  margin-bottom: 24px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding-left: 30px;
  padding-right: 40px;
  p {
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  h1 {
    color: #fffbf6;
    font-size: 32px;
    font-weight: 700;
  }
  .circles {
    width: 72px;
    height: 48px;
    position: relative;
    div {
      :first-child {
        position: absolute;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        z-index: 1;
      }
      :last-child {
        position: absolute;
        width: 48px;
        height: 48px;
        background: #382314;
        border-radius: 50%;
        right: 0px;
      }
    }
  }

  @media (max-width: 640px) {
    height: 97px;
    p {
      font-size: 15px;
    }
    h1 {
      font-size: 24px;
    }
    .circles {
      width: 60px;
      height: 40px;
      div {
        :first-child {
          width: 40px;
          height: 40px;
        }
        :last-child {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;
