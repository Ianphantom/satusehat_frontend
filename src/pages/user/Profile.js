import React from "react";
import styled from "styled-components";

// import components
import ProfileCardHeader from "../../components/user/ProfileCardHeader";
import ProfileSectionItem from "../../components/user/ProfileSectionItem";

// import icon
import iconNama from "../../images/svg-icon/icon-nama.svg";
import calendar from "../../images/svg-icon/icon-calender.svg";
import email from "../../images/svg-icon/icon-mail.svg";
import phone from "../../images/svg-icon/icon-phone.svg";
import password from "../../images/svg-icon/icon-password.svg";
import settings from "../../images/svg-icon/icon-settings.svg";

const Profile = () => {
  return (
    <ProfileContainer>
      <div className='card-design'>
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
      <div className='card-design'>
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
      <div className='card-design'>
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
  .card-design {
    border-radius: 8px;
    background: white;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
  }
`;

export default Profile;
