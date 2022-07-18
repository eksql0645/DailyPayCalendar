import React from 'react';
import styled from 'styled-components';
import pallete from '../lib/styles/palette';
import { Link } from 'react-router-dom';
// 모달 레이아웃 (모달 박스)

// 배경 화면(회색)
const StyledModalTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${pallete.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 흰색 박스
const StyledWhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const ModalTemplate = ({ children }) => {
  return (
    <StyledModalTemplate>
      <StyledWhiteBox>
        <div className="logo-area">
          <Link to="/">Daily Pay</Link>
        </div>
        {children}
      </StyledWhiteBox>
    </StyledModalTemplate>
  );
};

export default ModalTemplate;
