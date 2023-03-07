import React, { useEffect } from "react";
import styled from "styled-components";

// import components
import ProfileCardHeader from "../../components/user/ProfileCardHeader";
import ProfileSectionItem from "../../components/user/ProfileSectionItem";
import ProfileMainInformation from "../../components/user/ProfileMainInformation";

// import icon
import iconNama from "../../images/svg-icon/icon-nama.svg";
import calendar from "../../images/svg-icon/icon-calender.svg";
import email from "../../images/svg-icon/icon-mail.svg";
import phone from "../../images/svg-icon/icon-phone.svg";
import password from "../../images/svg-icon/icon-password.svg";
import settings from "../../images/svg-icon/icon-settings.svg";
import id from "../../images/svg-icon/icon-id.svg";

// import profile default
import profileDefault from "../../images/profile-default.png";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ProfileContainer>
      <div className='profileTop'>
        <div className='profileUser'>
          <div className='photo-user'>
            <img src={profileDefault} alt='User-Profile' />
          </div>
          <div className='user-name'>Ian Felix Jonathan S</div>
        </div>
        <div className='main-information'>
          <div className='main-information-data'>
            <ProfileMainInformation
              icon={id}
              text='BPJS ID'
              result='05311940000008'
              isVerified={false}
            />
            <ProfileMainInformation
              icon={id}
              text='BPJS ID'
              result='05311940000008'
              isVerified={false}
            />
          </div>
          <div className='main-information-data'>
            <ProfileMainInformation
              icon={id}
              text='BPJS ID'
              result='05311940000008'
              isVerified={false}
            />
            <ProfileMainInformation
              icon={id}
              text='BPJS ID'
              result='05311940000008'
              isVerified={false}
            />
          </div>
        </div>
      </div>
      <div className='card-design' data-aos='fade-up' data-aos-duration='2000'>
        <ProfileCardHeader
          title='Informasi Pribadi'
          desc='Data yang umumnya ditampilkan pada aplikasi satu sehat'
        />
        <ProfileSectionItem
          icon={iconNama}
          title='Nama'
          desc='Ubah nama lengkap dan nama panggilan'
        />
        <ProfileSectionItem
          icon={calendar}
          title='Tanggal Lahir'
          desc='Melihat tanggal lahir'
        />
      </div>
      <div
        className='card-design'
        data-aos='fade-up'
        data-aos-duration='2000'
        data-aos-delay='300'
      >
        <ProfileCardHeader title='Kontak' desc='Ubah email dan nomor ponsel' />
        <ProfileSectionItem
          icon={email}
          title='Email'
          desc='Perbarui dan verifikasi email'
        />
        <ProfileSectionItem
          icon={phone}
          title='Nomor Ponsel'
          desc='Perbarui dan verifikasi nomor telepon'
        />
      </div>
      <div
        className='card-design'
        data-aos='fade-up'
        data-aos-duration='2000'
        data-aos-delay='500'
      >
        <ProfileCardHeader
          title='Informasi Pribadi'
          desc='Data yang umumnya ditampilkan pada aplikasi satu sehat'
        />
        <ProfileSectionItem
          icon={password}
          title='Kata Sandi'
          desc='Perbarui kata sandi'
        />
        <ProfileSectionItem
          icon={settings}
          title='Pengaturan Web'
          desc='Sesuaikan preferensi tampilan'
        />
      </div>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .profileTop {
    display: flex;
    align-items: center;
    gap: 5px;
    .profileUser {
      width: 50%;
      display: flex;
      align-items: center;
      gap: 25px;

      .user-name {
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;
        color: #001737;
      }
    }

    .main-information {
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: 20px;
      .main-information-data {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }
  .card-design {
    border-radius: 8px;
    background: white;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
  }
`;

export default Profile;
