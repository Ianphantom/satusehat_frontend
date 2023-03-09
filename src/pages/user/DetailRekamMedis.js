import React from "react";
import styled from "styled-components";

import MedicInformation from "../../components/user/MedicInformation";
import ProfileCardHeader from "../../components/user/ProfileCardHeader";

// import icon
import iconNama from "../../images/svg-icon/icon-nama.svg";
import notes from "../../images/svg-icon/icon-notes.svg";
import healthHistory from "../../images/svg-icon/icon-healthHistory.svg";
import diagnose from "../../images/svg-icon/icon-diagnose.svg";
import treatment from "../../images/svg-icon/icon-treatment.svg";
import drug from "../../images/svg-icon/icon-drug.svg";
import check from "../../images/svg-icon/icon-check.svg";
import follow from "../../images/svg-icon/icon-follow.svg";
import list from "../../images/svg-icon/icon-list.svg";

const DetailRekamMedis = () => {
  return (
    <DetailRekamMedisContainer>
      <div className='alert alert-primary  fade show' role='alert'>
        <strong>ITS Medical Center!</strong> 19 January 2023, 15:00 WIB
      </div>
      <div className='card-design'>
        <ProfileCardHeader
          title='Patient Information'
          desc='Information about patient'
        />
        <MedicInformation
          icon={iconNama}
          title='Patient Name'
          desc='Ian Felix Jonathan Simanjuntak'
        />
        <MedicInformation
          icon={notes}
          title='Patient Problem'
          desc='Panas tinggi, pegel linu, sedikit sesak banyak batuknya'
        />
        <MedicInformation
          icon={healthHistory}
          title='Health History'
          desc='Pasien pernah menderita hipertensi selama 5 tahun terakhir, kontrol terakhir 3 bulan yang lalu, dan menggunakan  obat hipertensi secara teratur'
        />
      </div>
      <div className='card-design'>
        <ProfileCardHeader
          title='Physical Examination'
          desc='The results of a physical examination performed by a doctor'
        />
        <MedicInformation
          icon={check}
          title='Result'
          desc={[
            "Tekanan Darah : 150/90 mmHg",
            "Kepala : Benjolan pada kepala pasien memerlukan penilaian lebih lanjut untuk menentukan jenis kelainan.",
            "Leher : Pembesaran kelenjar getah bening pada leher pasien bisa menjadi tanda adanya infeksi atau gangguan sistem kekebalan tubuh.",
          ]}
        />
      </div>
      <div className='card-design'>
        <ProfileCardHeader
          title='Medical treatment'
          desc='Diagnostic information and medical procedures provided by the doctor'
        />
        <MedicInformation
          icon={diagnose}
          title='Diagnosis'
          desc={["Hipertensi Grade 2", "Sakit kepala tension type"]}
        />
        <MedicInformation
          icon={treatment}
          title='Action Given'
          desc={[
            "Terapi obat hipertensi dengan amlodipin 5mg sehari",
            "Terapi analgesik dengan paracetamol 500mg 3x sehari selama 14 hari",
          ]}
        />
      </div>
      <div className='card-design'>
        <ProfileCardHeader
          title='Medication'
          desc='Medication given by a doctor'
        />
        <MedicInformation
          icon={drug}
          title='Amlodipin 5mg'
          desc={["Catatan : 3 x 1 Sesudah makan", "selama 14 hari"]}
        />
        <MedicInformation
          icon={drug}
          title='Paracetamol'
          desc={[
            "catatan : 3 x 1 sesudah makan",
            "Jika sudah sembuh, boleh diberhentikan",
          ]}
        />
      </div>
      <div className='card-design'>
        <ProfileCardHeader title='Notes' desc='Some notes given by a doctor' />
        <MedicInformation
          icon={follow}
          title='Follow Up plan'
          desc={[
            "kontrol tekanan darah dalam 1 minggu ke depan",
            "jika keluhan sakit kepala masih berlanjut, diharapkan kembali berkonsultasi dengan dokter",
          ]}
        />
        <MedicInformation
          icon={list}
          title='Notes'
          desc={[
            "Pasien diminta untuk menjaga pola makan dan olahraga teratur",
            "pasien diminta untuk mengurangi komsumsi garam dan minuman beralkohol",
            "Pasien diminta untuk memeriksa tekanan darah secara berkala",
          ]}
        />
      </div>
    </DetailRekamMedisContainer>
  );
};

const DetailRekamMedisContainer = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;

  .card-design {
    border-radius: 8px;
    background: white;
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
    margin-bottom: 20px;
  }
`;

export default DetailRekamMedis;
