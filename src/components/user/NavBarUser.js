import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarUser = () => {
  return (
    <NavBarContainer>
      <div className='divider'>
        <Link to='dashboard'>
          <div className='navigation-container'>Dashboard</div>
        </Link>
        <hr />
        <Link to='rekam-medis'>
          <div className='navigation-container'>Rekam Medis</div>
        </Link>
        <hr />
        <Link to='/user/perizinan'>
          <div className='navigation-container'>Perizinan</div>
        </Link>
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
        font-size: 16px;
        color: #2d67f6;
      }
    }
  }

  @media (max-width: 1000px) {
    .divider {
      margin-right: 0px;
    }
  }
`;

export default NavBarUser;
