import React from "react";
import styled from "styled-components";
import NavBarUser from "../../components/user/NavBarUser";
import { Outlet } from "react-router-dom";

const SkeltonUser = () => {
  return (
    <SkeletonContainer>
      <div className='container'>
        <div className='main'>
          <div className='left-skeleton'>
            <NavBarUser />
          </div>
          <div className='right-skeleton'>
            <Outlet />
          </div>
        </div>
      </div>
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div`
  /* background-color: #f8f8fb; */
  background: rgba(240, 244, 255, 0.5);
  /* background: white; */
  .main {
    display: flex;
    .left-skeleton {
      width: 25%;
    }

    .right-skeleton {
      width: 75%;
      border-left: 1px solid rgba(0, 0, 0, 0.08);
    }
  }

  @media (max-width: 1000px) {
    .main {
      flex-direction: column;
      .left-skeleton {
        width: 100%;
      }
      .right-skeleton {
        width: 100%;
        border: none;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default SkeltonUser;
