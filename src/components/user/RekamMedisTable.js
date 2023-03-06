import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

const columns = [
  {
    name: "Klinik",
    selector: (row) => row.klinik,
    sortable: true,
    cell: (row) => <div className='namaKlinik'>{row.klinik}</div>,
  },
  {
    name: "Tanggal",
    selector: (row) => row.tanggal,
  },
  {
    name: "Dokter",
    selector: (row) => row.dokter,
  },
  {
    name: "Detail",
    button: true,
    cell: () => <Button>View</Button>,
  },
];

const data = [];

const generateDummyData = (number) => {
  for (let i = 0; i < number; i++) {
    let dataDummy = {
      id: i + 1,
      klinik: "Medical Center ITS",
      tanggal: "1 Januari 2023",
      dokter: "Dr Sabrina Lydia S.Kk",
    };
    data.push(dataDummy);
  }
};

generateDummyData(20);

const RekamMedisTable = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <TableContainer
      data-aos='fade-up'
      data-aos-duration='2000'
      data-aos-delay='500'
    >
      <div className='title'>Your Medical Record</div>
      <DataTable columns={columns} data={data} pagination />
    </TableContainer>
  );
};

const TableContainer = styled.div`
  padding: 25px 20px;

  background: white;
  border-radius: 8px;
  box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #000000;
    margin-bottom: 24px;
  }

  .rdt_TableCol {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: rgb(33, 37, 41);
  }

  .rdt_TableHeadRow {
    background: #f8f8fa;
    border-bottom: 1px solid #eff2f7;
    border-radius: 0px !important;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
  }

  .rdt_TableRow {
    padding: 16px 0px;
    &:not(:last-of-type) {
      border-bottom: 1px solid #eff2f7;
    }
  }

  .rdt_Pagination {
    border-top: 1px solid #eff2f7;
  }
`;

const Button = styled.button`
  background-color: #2d67f6;
  border: 1px solid #556ee6;
  border-radius: 3.2px;
  padding: 4px 26px;
  font-weight: 400;
  font-size: 11.375px;
  line-height: 17px;
  cursor: pointer;
  color: #ffffff;
`;

export default RekamMedisTable;
