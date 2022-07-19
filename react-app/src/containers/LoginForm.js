import React, { useEffect } from 'react';
import ModalForm from '../components/modal/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';

function LoginForm() {
  const dispatch = useDispatch();

  // store 안에 state 중 auth를 선택 -> auth.login을 form에 할당
  // {form: {email: '', password:''}}여서 {form} 함
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    // 리듀서 호출하여 action(요구사항)대로 스토어에 있는 auth.login의 상태 변경
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // 마운트될 때만 실행된다. 로그인input을 초기화시킨다.
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <ModalForm
      type="login"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

export default LoginForm;
