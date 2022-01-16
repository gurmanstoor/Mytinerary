
import React, { useState } from "react";
import styled from "styled-components";
import  LogoIcon from "../assets/Logo.png";
import { render } from "react-dom";
import {Link} from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Nav>
          <Container>
              <Link to="/"> <Logo img src = {LogoIcon}/> </Link>
              
              <Hamburger onClick={() => setIsOpen(!isOpen)}>
              <span />
              <span />
              <span />
              </Hamburger>
              <Menu isOpen={isOpen}>
                  <Link className ="Link" to ="/GetStarted"> <MenuLink>Get Started</MenuLink> </Link>
                  <Link className ="Link" to ="/AboutUs"> <MenuLink>About Us</MenuLink></Link>
              </Menu>
          </Container>
        </Nav>
    ) 
    
  
};

export default Navbar;


const Button = styled.button`
  font-size: 0.8rem;
  background: #f774c5;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }

  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

const Logo = styled.img`
    height: 2rem;
    cursor: pointer;
`;



const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin: auto;
  width: 100%;
  padding: 2rem;

  png {
    height: 1.4rem;
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 0rem 0 rem 1 rem 0rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuLink = styled.div`
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #e63737;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;