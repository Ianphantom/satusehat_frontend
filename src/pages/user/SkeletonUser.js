import React from "react";
import styled from "styled-components";
import NavBarUser from "../../components/user/NavBarUser";
import { Outlet } from "react-router-dom";

const SkeltonUser = () => {
  return (
    <SkeletonContainer className='container'>
      <div className='main'>
        <div className='left-skeleton'>
          <NavBarUser />
        </div>
        <div className='right-skeleton'>
          <Outlet />
        </div>
      </div>
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div`
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
`;

export default SkeltonUser;
