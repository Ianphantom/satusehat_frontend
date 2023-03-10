import React, { useEffect } from "react";
import styled from "styled-components";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";

const LastAppoinment = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LastContainer
      className='h-100'
      data-aos='fade-up'
      data-aos-duration='2000'
    >
      <div className='title'>Last Appointment</div>
      <div className='all-container'>
        <div className='section-1'>
          <div className='information-container '>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 12C12.55 12 13.021 11.804 13.413 11.412C13.805 11.02 14.0007 10.5493 14 10C14 9.45 13.804 8.979 13.412 8.587C13.02 8.195 12.5493 7.99933 12 8C11.45 8 10.979 8.196 10.587 8.588C10.195 8.98 9.99933 9.45067 10 10C10 10.55 10.196 11.021 10.588 11.413C10.98 11.805 11.4507 12.0007 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7367 18 11.3827 18 10.2C18 8.38333 17.4207 6.896 16.262 5.738C15.1033 4.58 13.6827 4.00067 12 4C10.3167 4 8.89567 4.57933 7.737 5.738C6.57833 6.89667 5.99933 8.384 6 10.2C6 11.3833 6.49167 12.7377 7.475 14.263C8.45833 15.7883 9.96667 17.484 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2C20 11.8667 19.3373 13.6793 18.012 15.638C16.6867 17.5967 14.6827 19.7173 12 22Z'
                fill='#2D67F6'
              />
            </svg>

            <div className='info-text'>ITS Medical Centre</div>
          </div>
          <div className='information-container '>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.8002 11.2001C7.73933 11.2001 6.72191 10.7787 5.97177 10.0285C5.22162 9.27838 4.8002 8.26096 4.8002 7.2001V4.0001C4.8002 3.78792 4.88448 3.58444 5.03451 3.43441C5.18454 3.28438 5.38802 3.2001 5.6002 3.2001H6.4002C6.61237 3.2001 6.81585 3.11581 6.96588 2.96578C7.11591 2.81575 7.2002 2.61227 7.2002 2.4001C7.2002 2.18792 7.11591 1.98444 6.96588 1.83441C6.81585 1.68438 6.61237 1.6001 6.4002 1.6001H5.6002C4.96368 1.6001 4.35323 1.85295 3.90314 2.30304C3.45305 2.75313 3.2002 3.36358 3.2002 4.0001V7.2001C3.20122 8.10389 3.42161 8.99392 3.84244 9.79376C4.26326 10.5936 4.87194 11.2793 5.6162 11.7921C6.33126 12.4225 6.91116 13.1913 7.3209 14.052C7.73064 14.9128 7.96172 15.8476 8.0002 16.8001C8.0002 18.2853 8.59019 19.7097 9.6404 20.7599C10.6906 21.8101 12.115 22.4001 13.6002 22.4001C15.0854 22.4001 16.5098 21.8101 17.56 20.7599C18.6102 19.7097 19.2002 18.2853 19.2002 16.8001V15.8881C19.9543 15.6934 20.6115 15.2303 21.0487 14.5857C21.4858 13.9411 21.6728 13.1591 21.5747 12.3865C21.4766 11.6138 21.1 10.9035 20.5156 10.3886C19.9312 9.87377 19.1791 9.58971 18.4002 9.58971C17.6213 9.58971 16.8692 9.87377 16.2848 10.3886C15.7004 10.9035 15.3238 11.6138 15.2257 12.3865C15.1276 13.1591 15.3146 13.9411 15.7517 14.5857C16.1888 15.2303 16.8461 15.6934 17.6002 15.8881V16.8001C17.6002 17.861 17.1788 18.8784 16.4286 19.6285C15.6785 20.3787 14.6611 20.8001 13.6002 20.8001C12.5393 20.8001 11.5219 20.3787 10.7718 19.6285C10.0216 18.8784 9.6002 17.861 9.6002 16.8001C9.64069 15.8464 9.87427 14.9109 10.2868 14.0501C10.6993 13.1893 11.2822 12.4211 12.0002 11.7921C12.7415 11.2776 13.3471 10.591 13.765 9.79131C14.183 8.99158 14.401 8.10247 14.4002 7.2001V4.0001C14.4002 3.36358 14.1473 2.75313 13.6973 2.30304C13.2472 1.85295 12.6367 1.6001 12.0002 1.6001H11.2002C10.988 1.6001 10.7845 1.68438 10.6345 1.83441C10.4845 1.98444 10.4002 2.18792 10.4002 2.4001C10.4002 2.61227 10.4845 2.81575 10.6345 2.96578C10.7845 3.11581 10.988 3.2001 11.2002 3.2001H12.0002C12.2124 3.2001 12.4159 3.28438 12.5659 3.43441C12.7159 3.58444 12.8002 3.78792 12.8002 4.0001V7.2001C12.8002 7.72538 12.6967 8.24553 12.4957 8.73083C12.2947 9.21613 12.0001 9.65709 11.6286 10.0285C11.2572 10.4 10.8162 10.6946 10.3309 10.8956C9.84563 11.0966 9.32548 11.2001 8.8002 11.2001ZM18.4002 14.4001C17.9758 14.4001 17.5689 14.2315 17.2688 13.9315C16.9688 13.6314 16.8002 13.2244 16.8002 12.8001C16.8002 12.3758 16.9688 11.9688 17.2688 11.6687C17.5689 11.3687 17.9758 11.2001 18.4002 11.2001C18.8245 11.2001 19.2315 11.3687 19.5316 11.6687C19.8316 11.9688 20.0002 12.3758 20.0002 12.8001C20.0002 13.2244 19.8316 13.6314 19.5316 13.9315C19.2315 14.2315 18.8245 14.4001 18.4002 14.4001Z'
                fill='#2D67F6'
              />
            </svg>

            <div className='info-text'>Dr. Angka TS, S.Pa</div>
          </div>
        </div>
        <div className='section-3'>
          <div>Check Up Date</div>
          <div className='information-container'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 22C4.45 22 3.979 21.804 3.587 21.412C3.195 21.02 2.99934 20.5493 3 20V6C3 5.45 3.196 4.979 3.588 4.587C3.98 4.195 4.45067 3.99933 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.805 4.98 21.0007 5.45067 21 6V20C21 20.55 20.804 21.021 20.412 21.413C20.02 21.805 19.5493 22.0007 19 22H5ZM5 20H19V10H5V20Z'
                fill='#2D67F6'
              />
            </svg>
            <div className='info-text'>31 January 2023</div>
          </div>
        </div>
      </div>
    </LastContainer>
  );
};

const LastContainer = styled.div`
  background: white;
  /* border: 1px solid rgba(0, 0, 0, 0.08); */
  border-radius: 8px;
  text-align: center;
  height: 100%;
  box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
  .all-container {
    padding: 16px 16px;
    gap: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    /* background: rgba(26, 147, 111, 0.1); */
    text-align: center;
    padding: 10px 0px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    /* background: #e7efff; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .section-1 {
    line-height: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .information-container {
      display: flex;
      align-items: center;
      gap: 8px;
      .info-text {
        font-size: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #212529;
      }
    }
  }

  .section-3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #212529;
    .information-container {
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
      .info-text {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #212529;
      }
    }
  }
`;

export default LastAppoinment;
