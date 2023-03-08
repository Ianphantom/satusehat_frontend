import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CardInformation from "../../components/user/CardInformation";

// import icon
import iconNama from "../../images/svg-icon/icon-nama.svg";
import email from "../../images/svg-icon/icon-mail.svg";
import time from "../../images/svg-icon/icon-calender.svg";
import password from "../../images/svg-icon/icon-password.svg";
import warning from "../../images/svg-icon/icon-warning.svg";
import goBack from "../../images/svg-icon/icon-goBack.svg";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

const DetailPerizinan = () => {
  // make dummy status
  // const getRandomStatus = () => {
  //   const listStatus = ["allowed", "blocked", "waiting"];
  //   return listStatus[Math.floor(Math.random() * 3)];
  // };
  // const status = getRandomStatus();
  const status = "waiting";

  const [cardShow, setCardShow] = useState(true);

  const showOtherCard = () => {
    setCardShow(!cardShow);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <DetailContainer>
      <div className='card-design' data-aos='fade-up' data-aos-duration='1500'>
        <div className={`status ${status}`}>
          <div className='waktuAkses'>ITS Medical Center</div>
          <div className='namaDokter'>Dr Sabrina Lydia Simanjuntak, Sp.KK</div>
        </div>
      </div>
      {cardShow && (
        <div
          className='card-design'
          data-aos='fade-up'
          data-aos-duration='1500'
          data-aos-delay='300'
        >
          <CardInformation
            icon={iconNama}
            title='Physican Name'
            desc='Dr Sabrina Lydia Simanjuntak, Sp. KK'
          />
          <CardInformation
            icon={password}
            title='Access Requested'
            desc='Read and Write Access'
          />
          <CardInformation
            icon={time}
            title='Time Requested'
            desc='13 September 2023, 10:00 am - 12:00 am'
          />
          <CardInformation
            icon={email}
            title='Reason'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit volutpat mauris. Integer quis neque tincidunt, consequat ligula vel, condimentum erat. Nunc odio nisi, tempor in augue a, maximus molestie erat. Duis non sem vel ante condimentum mollis. Phasellus augue purus, accumsan sit amet tellus eu, scelerisque venenatis dolor. Nunc elementum fringilla felis id placerat. Phasellus tincidunt felis vitae malesuada tempus'
          />
          {/* button for granting access */}
          {status === "waiting" ? (
            <div className='button-container'>
              <div className='button' onClick={showOtherCard}>
                Grant Access
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {!cardShow && (
        <div
          className='card-design question'
          data-aos='fade-up'
          data-aos-duration='500'
        >
          <div className='top-question'>
            {/* <div className='title'>Are You Absolutely Sure?</div> */}
            <div className='warning'>
              <div className='icon-warning'>
                <img src={warning} alt='warning-icon' />
              </div>
              <div className='warning-text'>
                Unexpected bad things will happen if you don't read this!
              </div>
            </div>
            <div className='previous' onClick={showOtherCard}>
              <img src={goBack} alt='Go Back Icon' />
            </div>
          </div>

          <div className='text'>
            This action <span>cannot be undone</span>. This will temporaly give
            the pyhsican access until the requested time. Giving access to
            untrust person can harm your medical records.
          </div>
          <div className='text'>
            Please type <span>Username/Sabrina</span> to confirm
          </div>
          <div className='input-user'>
            <input type='text' placeholder='Enter the requested text' />
            <textarea
              name='private key'
              id='privatekey'
              value={"Masukkan Private key"}
            ></textarea>
            <div className='button'>
              I understand the consequences, grant access
            </div>
          </div>
        </div>
      )}
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
  .card-design {
    border-radius: 8px;
    background: white;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
    margin-bottom: 20px;
  }

  .status {
    padding: 16px 16px;
    border-radius: 8px;

    .waktuAkses {
      font-weight: 400;
      font-size: 11px;
      line-height: 15px;
      margin-bottom: 5px;
    }
    .namaDokter {
      font-weight: 500;
      font-size: 14px;
      line-height: 16p x;
    }
    &.allowed {
      background: #e6ffe5;
      border-left: 3px solid #038c00;
      .waktuAkses {
        color: rgba(13, 78, 43, 0.7);
      }
      .namaDokter {
        color: #038c00;
      }
    }
    &.blocked {
      background: #ffecec;
      border-left: 3px solid #ff0000;
      .waktuAkses {
        color: rgba(255, 0, 0, 0.7);
      }
      .namaDokter {
        color: #ff0000;
      }
    }
    &.waiting {
      background: #fff7e7;
      border-left: 3px solid #ff6b00;
      .waktuAkses {
        color: rgba(255, 107, 0, 0.7);
      }
      .namaDokter {
        color: #ff6b00;
      }
    }
  }

  .button-container {
    cursor: pointer;
    width: fit-content;
    padding: 16px 16px;
    margin-left: auto;
    .button {
      padding: 12px 24px;
      background-color: #2d67f6;
      border-radius: 5px;
      color: #ffffff;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
  }

  .question {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #001737;

    .top-question {
      padding: 16px 16px;
      border-bottom: 1px solid #eff2f7;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      .warning {
        color: rgba(255, 0, 0, 0.7);
        font-weight: 600;

        display: flex;
        align-items: center;
        gap: 10px;
      }
      .previous {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 400;
        font-size: 13px;
      }
    }

    .text {
      padding: 0px 16px;
      padding-bottom: 10px;
      font-weight: 400;
      span {
        font-weight: 600;
      }
    }

    .input-user {
      padding: 16px 16px;
      padding-top: 0px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #eff2f7;
        padding: 10px 10px;
      }

      textarea {
        padding: 10px 10px;
        border-radius: 8px;
        border: 1px solid #eff2f7;
        color: #666666;
      }

      .button {
        text-align: center;
        padding: 12px 24px;
        background-color: #2d67f6;
        border-radius: 5px;
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        cursor: pointer;
      }
    }
  }
`;

export default DetailPerizinan;
