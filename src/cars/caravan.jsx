import React from "react";
import { campcar } from "../mock/mockdata";
import {
  Button,
  ButtonWrapper,
  CardWrapper,
  Container,
} from "./caravanstyles";

const MotorComponent = () => {
  const data = campcar.maindata;
  console.log("data: ", data.length);
  return (
    
    <Container>
      
      {data.map((value, key) => {
        return (
          <CardWrapper key={key}>
            <img src={value.car.photo} alt="image" />
            <h3>{value.car.name || "no data"}</h3>
            <div>
              <div>{value.car.company || "no brand"}</div>
              <div>{value.car.rate || "0"}</div>
              <img src={value.car.rate} alt="image" />
            </div>
            <p>{value.car.cost || "no cost"}</p>

            <ButtonWrapper>
              <Button $primary>Order</Button>
              <Button>Compare</Button>
            </ButtonWrapper>
          </CardWrapper>
        );
      })}
    </Container>
  );
};

export default MotorComponent;