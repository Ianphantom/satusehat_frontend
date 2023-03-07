import React from "react";
import styled from "styled-components";

// import components
import ProfileCardHeader from "../../components/user/ProfileCardHeader";

const Profile = () => {
  return (
    <ProfileContainer>
      <div className='card-design'>
        <ProfileCardHeader
          title='Informasi Pribadi'
          desc='Data yang umumnya ditampilkan pada aplikasi satu sehat'
        />
      </div>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;

  .card-design {
    border-radius: 8px;
    background: white;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
  }
`;

export default Profile;
