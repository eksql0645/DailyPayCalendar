import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const textMap = {
  login: '로그인',
  signup: '회원가입',
  userSetting: '회원정보',
  tagSetting: '근로태그설정',
  workSetting: '근로정보설정',
};

const StyledModalForm = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

// 모달창
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ModalForm = ({ form, type, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <StyledModalForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="이메일"
          type="email"
          onChange={onChange}
          value={form.email}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'signup' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <Button cyan fullWidth>
          {text}
        </Button>
      </form>
      {(type === 'login' || type === 'signup') && (
        <Footer>
          {type === 'login' ? (
            <Link to="signup">회원가입</Link>
          ) : (
            <Link to="/">로그인</Link>
          )}
        </Footer>
      )}
    </StyledModalForm>
  );
};

export default ModalForm;
