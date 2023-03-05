import React from "react";
import styled from "styled-components";

const NavBarUser = () => {
  return (
    <NavBarContainer>
      <div className='divider'>
        <div className='navigation-container'>Dashboard</div>
        <hr />
        <div className='navigation-container'>Rekam Medis</div>
        <hr />
        <div className='navigation-container'>Perizinan</div>
      </div>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 100%;

  .divider {
    margin-top: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
    padding: 16px 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    font-size: 14px;
    .navigation-container {
      cursor: pointer;
      color: black;
      transition: 1s ease all;
      &:hover {
        font-size: 18px;
      }
    }
  }
`;

export default NavBarUser;
