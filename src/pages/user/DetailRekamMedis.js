import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CryptoJS from "crypto-js";

// import dummystate
import dummyData from "../../dummy";

// import component
import DeskripsiRekamMedis from "../../components/user/DeskripsiRekamMedisComponent";
import CardInformation from "../../components/user/CardInformation";
import ProfileCardHeader from "../../components/user/ProfileCardHeader";

// import icon
import healthHistory from "../../images/svg-icon/icon-healthHistory.svg";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

const DetailRekamMedis = () => {
  const [encrypted, setEncrypted] = useState(true);
  const [key, setKey] = useState("");

  //dummy data encryption
  const plainText = JSON.stringify(dummyData());
  const encryptedText = CryptoJS.AES.encrypt(
    plainText,
    "SecretKey123"
  ).toString();

  const inputHandler = (e) => {
    setKey(e.target.value);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <DetailRekamMedisContainer>
      <div className='alert alert-primary  fade show' role='alert'>
        <strong>ITS Medical Center!</strong> 19 January 2023, 15:00 WIB
      </div>
      <div className='data-sementara'>
        <div>
          <div
            className='card-design'
            data-aos='fade-left'
            data-aos-duration='800'
          >
            <ProfileCardHeader
              title='Medical Record'
              desc='This is your encrypted medical record. Enter your signature key to decrypt'
            />
            <CardInformation
              icon={healthHistory}
              title='Health History'
              desc={`Your data is still encrypted. Please provide signature key to decrypt your data`}
            />
          </div>
        </div>
        <div className='key-container'>
          <input
            value={key}
            onChange={inputHandler}
            type='text'
            className='keyInput'
            placeholder='Enter your signature key'
          />
        </div>
        <div className='button'>
          <div className='text'>Enter Key</div>
        </div>
      </div>
      {/* <DeskripsiRekamMedis /> */}
    </DetailRekamMedisContainer>
  );
};

const DetailRekamMedisContainer = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
  .card-design {
    border-radius: 8px;
    background: white;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
    margin-bottom: 20px;
  }

  .key-container {
    width: 100%;
    input {
      border-radius: 8px;
      border: none;
      width: 100%;
      padding: 15px 15px;
      background: white;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
      color: #000000;
    }
  }

  .button {
    margin-top: 10px;
    cursor: pointer;
    /* background-color: #407eb4; */
    display: flex;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    .text {
      padding: 15px 15px;
      border-radius: 8px;
      color: white;
      width: fit-content;
      background: #2d67f6;
    }
  }
`;

export default DetailRekamMedis;
