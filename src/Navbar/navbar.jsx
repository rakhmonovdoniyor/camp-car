import React from 'react'


    
        
import  {  NavWrapper, Navbar1, Navbar2, Navbar3, Back } from './nav'
import shoplogo from "../assets/clarity_shopping-cart-solid.png"
import contactslogo from "../assets/bx_bxs-user.png"
import iconopen from  "../assets/grommet-icons_form-next.png"
// import { Navinput } from './navinput'
import { Car } from './carcon'
import  { Footer } from '../footer/footer'
// import {  Index } from '.'
// import MotorComponent from '../components/main/motors'
// import { NavMini } from './backround'


export const Navbar = () => {
  return (
    <div>
      <Navbar1>

      
        <Navbar3>
            <h1>Camper</h1>
        </Navbar3>

        <Navbar2>
            <h3>Motor <img src={iconopen} alt="Iconsnextpage" /> </h3> 
            <h3>Motor <img src={iconopen} alt="Iconsnextpage" /> </h3>
            <h3>Motor <img src={iconopen} alt="Iconsnextpage" /> </h3>
            <h3>Motor <img src={iconopen} alt="Iconsnextpage" /> </h3>
            <h3>Motor <img src={iconopen} alt="Iconsnextpage" /> </h3>

            <NavWrapper>
            <img src={shoplogo} alt="" />
            <img src={contactslogo} alt="" />
            <h3>ENG <img style={{paddingTop: 10}} src={iconopen} alt="Iconsnextpage" /> </h3>
            </NavWrapper>
            
        </Navbar2>

        </Navbar1>

        <Back $home>
          <h3> Home / Motors</h3> <br /> <br />
          <h2>Our ranges</h2> <br /> <br />
          <h1>Motors</h1> <br /> <br />

        </Back>

       
        
        {/* <Navinput/> */}
        {/* <Index/> */}
        <Car/>
        <Footer/>


       
    </div>
  


        
  )
};
