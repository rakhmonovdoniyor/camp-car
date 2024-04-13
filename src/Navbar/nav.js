import styled from "styled-components"
import backrasm from "../assets/imagg1.png"
export const Navbar1 =styled.div`
display: flex;
height: 90px;
`
export const Navbar2 = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex: 3;

h3{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`
export const Navbar3 = styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
flex: 1;
/* border: 1px solid red; */
h1{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left: 200px;
}
`
export const NavWrapper = styled.div`
display: flex;

align-items: center;
gap: 30px;
img{
    width: 27px;
height: 27px;
flex-shrink: 0;

}
`

export const Back =styled.div `

background-image: ${(props) => {
    if (props.$home) {
      return `url(${backrasm})`;
    // } else if (props.$rooms) {
    //   return `url(${rooms})`;
    // } else if (props.$facilities) {
    //   return `url(${faci})`;
    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};

   background-size: 100% 100%;
  background-repeat: no-repeat; 
  width: 100%;
height: 650px;
display:flex;
align-items:center;
justify-content:center; 
text-align:center; 
flex-direction: column;
color: white;
h3{
  color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h2{
  color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h1{
  color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat; */

`