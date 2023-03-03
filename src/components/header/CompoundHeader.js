import React from "react";
import styled from "styled-components";

import brandImage from "../../images/brand-image.png";

const Header = () => {
  return (
    <HeaderContainer className='container'>
      <div className='brand-container'>
        <img src={brandImage} alt='Brand Preview' />
      </div>
      <div className='navigation-container'>
        <div className='nav-item'>Home</div>
        <div className='nav-item'>Service</div>
        <div className='nav-item'>FAQs</div>
        <div className='nav-item'>About</div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 25px 0px;
`;

export default Header;
