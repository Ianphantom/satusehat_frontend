import React from "react";
import styled from "styled-components";

import ProfileSectionItem from "../../components/user/ProfileSectionItem";

// import icon
import iconNama from "../../images/svg-icon/icon-nama.svg";
import email from "../../images/svg-icon/icon-mail.svg";
import time from "../../images/svg-icon/icon-calender.svg";
import password from "../../images/svg-icon/icon-password.svg";

const DetailPerizinan = () => {
  return (
    <DetailContainer>
      <div className='card-design'>
        <div className='status allowed'>
          <div className='waktuAkses'>ITS Medical Center</div>
          <div className='namaDokter'>Dr Sabrina Lydia Simanjuntak, Sp.KK</div>
        </div>
      </div>
      <div className='card-design'>
        <ProfileSectionItem
          icon={iconNama}
          title='Physican Name'
          desc='Dr Sabrina Lydia Simanjuntak, Sp. KK'
        />
        <ProfileSectionItem
          icon={password}
          title='Access Requested'
          desc='Read and Write Access'
        />
        <ProfileSectionItem
          icon={time}
          title='Time Requested'
          desc='13 September 2023, 10:00 am - 12:00 am'
        />
        <ProfileSectionItem
          icon={email}
          title='Reason'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit volutpat mauris. Integer quis neque tincidunt, consequat ligula vel, condimentum erat. Nunc odio nisi, tempor in augue a, maximus molestie erat. Duis non sem vel ante condimentum mollis. Phasellus augue purus, accumsan sit amet tellus eu, scelerisque venenatis dolor. Nunc elementum fringilla felis id placerat. Phasellus tincidunt felis vitae malesuada tempus'
        />
      </div>
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
`;

export default DetailPerizinan;
