import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftNav = () => {
  const isLogged = true;
  return (
    <LeftNavContainer>
      {isLogged ? (
        <>
          <Link className='nav-item nav-link' to='/user/dashboard'>
            Dashboard
          </Link>
          <Link to='/logout' className='button-container'>
            Logout
          </Link>
        </>
      ) : (
        <Link to='/login' className='button-container'>
          Login
        </Link>
      )}
    </LeftNavContainer>
  );
};

const LeftNavContainer = styled.div`
  display: flex;
  align-items: center;

  .button-container {
    cursor: pointer;
    padding: 12px 24px;
    background-color: #2d67f6;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;

export default LeftNav;
