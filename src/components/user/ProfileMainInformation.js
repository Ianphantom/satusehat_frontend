import React from "react";
import styled from "styled-components";

const ProfileMainInformation = ({ icon, isVerified, text, result }) => {
  return (
    <MainInformationContainer>
      <div className='left'>
        <img src={icon} alt='icon-user' />
      </div>
      <div className='right'>
        <div className='result'>{result}</div>
        <div className='text'>{text}</div>
      </div>
    </MainInformationContainer>
  );
};

const MainInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .left {
    padding: 13px 13px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 24px;
  }

  .right {
    .text {
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      color: #8392a5;
    }
    .result {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #001737;
    }
  }
`;

export default ProfileMainInformation;
