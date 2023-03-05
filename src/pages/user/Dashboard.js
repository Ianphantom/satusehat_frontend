import React from "react";

import styled from "styled-components";

import ProfileCard from "../../components/user/ProfileCard";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <div className='section-one'>
        <div className='left'>
          <ProfileCard />
        </div>
        <div className='right'></div>
      </div>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
  .section-one {
    display: flex;
    gap: 20px;

    .left {
      width: 70%;
    }

    .right {
      width: 25%;
    }
  }

  @media (max-width: 1000px) {
    margin-left: 0px;
    .section-one {
      flex-direction: column;
      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }
    }
  }
`;

export default Dashboard;
