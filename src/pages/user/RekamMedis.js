import React from "react";
import styled from "styled-components";

// import component
import RekamMedisTable from "../../components/user/RekamMedisTable";

const RekamMedis = () => {
  return (
    <RekamMedisContainer>
      <div
        className='alert alert-warning alert-dismissible fade show'
        role='alert'
      >
        <strong>Attention!</strong> Never give your private key to anyone
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <RekamMedisTable />
    </RekamMedisContainer>
  );
};

const RekamMedisContainer = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
`;

export default RekamMedis;
