import { Link } from "react-router-dom";
import styled from "styled-components";
import motorBg from "../assets/imagg1.png";

export const Container = styled.div`
  display: flex;
  padding: 10px 50px;
`;

export const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
`;

export const NavMiddle = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    cursor: pointer;
  }
`;

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  img {
    margin-right: 10px;
    cursor: pointer;
  }
  p {
    cursor: pointer;
  }
`;
export const NavLink = styled(Link)`
  color: black;
  font-weight: 600;
  text-decoration: none;
`;

export const BgWrapper = styled.div`
  background-image: url(${motorBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    font-size: 70px;
    font-weight: 600;
  }
  h2 {
    font-size: 30px;
  }
`;
