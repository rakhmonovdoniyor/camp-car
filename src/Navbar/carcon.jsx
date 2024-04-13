import React from 'react'
import {BrandText, Allp, BrandItems, BrandWrap, Flex, FlexCaravan, FlexInput, Hash, InputAll, Inputwrap, Inputwrap2, Line, TwoButton, TwoButton1, MiniWrap, Minip, Farline, Farline2 } from './car'
// import icon from "../assets/grommet-icons_form-next.png"
import minicar from "../assets/Rectangle 705.png"
import MotorComponent from '../cars/caravan'
import { Flex1, Flex2 } from './style'
export const Car = () => {
  return (
    <Flex>

        <FlexInput>
        <Inputwrap>

<Hash>Cost of car</Hash> 
<Line></Line> <br /> <br />


<Inputwrap2>

<div>
<p>from</p>
<input  type="text" />
</div>
<p></p>

<div>
<p>to</p>
<input type="text" />
</div>


</Inputwrap2>



</Inputwrap>

<BrandWrap> 
<BrandText>
<h3>Brand</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>Company</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>
{/* 
            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>

            </BrandItems> */}
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>License type</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>Number of travelers</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>Location</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <TwoButton>
            <TwoButton1>Cancel</TwoButton1>
            <TwoButton1 $btn2>Serach</TwoButton1 >
        </TwoButton>



        <MiniWrap>
            <Minip>
            <p>Compare</p>
            </Minip>
            <div>
            <img src={minicar} alt="" />
            <img src={minicar} alt="" />
            <img src={minicar} alt="" />
            </div>

        </MiniWrap>

        </FlexInput>
              <Flex1>
                <h1>uihojk;l,</h1>
                
              </Flex1>
              <Flex2>
                <h1>gfctrgyhbujnk</h1>
              </Flex2>
        <FlexCaravan>
      
            <MotorComponent/>
        </FlexCaravan>
        
       
    </Flex>
  )
}
