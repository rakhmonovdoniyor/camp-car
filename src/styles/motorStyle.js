import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;

  padding: 20px 15%;
`;

export const FilterWrapper = styled.div`
  flex: 2;
  border: 1px solid green;
`;

export const CatalogWrapper = styled.div`
  flex: 6;
`;

export const CarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;
export const CardContainer = styled.div`
  border-radius: 20px;
  padding: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
  h2 {
    font-size: 20px;
    color: #006dab;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  :hover {
    color: white;
    background-color: #006dab;
  }
`;

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #006dab;
  color: #006dab;
  font-size: 18px;
  cursor: pointer;
`;
