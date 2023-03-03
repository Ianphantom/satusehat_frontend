import React from "react";
import styled from "styled-components";

const LeftNav = () => {
  return (
    <LeftNavContainer>
      <div className='button-container'>Login</div>
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
