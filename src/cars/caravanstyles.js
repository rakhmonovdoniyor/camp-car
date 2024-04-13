import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  /* justify-content: center; */
  gap: 50px;
  padding: 3% 15%;
  /* margin-right: 300px; */
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);

  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  /* margin-right: 50px; */
  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    color: #006dab;
    font-size: 20px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: 2px solid #006dab;
  color: ${(props) => (props.$primary ? "white" : "#006dab")};
  padding: 10px 25px;
  background-color: ${(props) => (props.$primary ? "#006dab" : "transparent")};
  font-size: 15px;
  width: 100%;
  border-radius: 10px;
 margin: 10px 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  :hover {
    background-color: #006dab;
    color: white;
  }
`;