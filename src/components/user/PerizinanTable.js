import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

const columns = [
  {
    name: "Nama Dokter",
    selector: (row) => row.dokter,
    sortable: true,
    cell: (row) => <div className='namaKlinik'>{row.dokter}</div>,
  },
  {
    name: "Keterangan ",
    selector: (row) => row.keterangan,
    sortable: true,
  },
  {
    name: "Status",
    sortable: true,
    selector: (row) => row.status,
    cell: (row) => (
      <StatusContainer className={row.status}>{row.status}</StatusContainer>
    ),
  },
  {
    name: "Detail",
    button: true,
    cell: () => <Button>View</Button>,
  },
];

const data = [];

const generateDummyData = (number) => {
  const listStatus = ["allowed", "blocked", "waiting"];
  for (let i = 0; i < number; i++) {
    let dataDummy = {
      id: i + 1,
      dokter: `Dr Sabrina Lydia, S.Kk`,
      keterangan: "Rawat jalan di ITS Medical Center",
      status: listStatus[Math.floor(Math.random() * 3)],
    };
    data.push(dataDummy);
  }
};

generateDummyData(20);

const PerizinanTable = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <PerizinanContainer
      data-aos='fade-up'
      data-aos-duration='2000'
      data-aos-delay='500'
    >
      <div className='title'>Permission List</div>
      <DataTable columns={columns} data={data} pagination />
    </PerizinanContainer>
  );
};

const PerizinanContainer = styled.div`
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

const StatusContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  padding: 4px 10px;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  &.allowed {
    color: #038c00;
    background: #e6ffe5;
  }

  &.waiting {
    color: #ff6b00;
    background: #fff7e7;
  }

  &.blocked {
    color: #ff0000;
    background: #ffecec;
  }
`;

export default PerizinanTable;
