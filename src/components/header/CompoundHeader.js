import React from "react";
import styled from "styled-components";

import brandImage from "../../images/brand-image.png";

// Import Components
import LeftNav from "./LeftNav";

const Header = () => {
  const toggleMenu = () => {
    document.querySelector(".navigation-container").classList.toggle("show");
  };
  return (
    <HeaderContainer>
      <div className='container'>
        <nav className='navbar navbar-expand-lg'>
          <a className='navbar-brand' href='#5'>
            <img src={brandImage} alt='Brand Preview' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <a className='nav-item nav-link active' href='#1'>
                Home
              </a>
              <a className='nav-item nav-link' href='#2'>
                Service
              </a>
              <a className='nav-item nav-link' href='#3'>
                About
              </a>
              <LeftNav />
            </div>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  border-bottom: 1px solid #eceef3;
  .container {
    nav {
      padding: 20px 0px;
    }
    .navbar-nav {
      display: flex;
      gap: 30px;
      align-items: center;
      .nav-item {
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        color: #333333;
        transition: ease all 1s;
        &:hover {
          font-size: 18px;
        }
      }
    }
  }
`;

export default Header;
