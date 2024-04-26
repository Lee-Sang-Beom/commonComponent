"use client";

import { Ref, forwardRef } from "react";
import styles from "./SubmitForm.module.scss";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * 참고
 * @onSubmit : 전달하려는 onSubmit은 react-hook-form에서 제공하는 handleSumbit의 파라미터로 전달하면 좋다.
 * 
 * 1. @preventDefault 기본 기능 보유
 * > a 태그나 submit 타입을 가진 버튼의 경우 이벤트 이외에 각자의 고유한 기능을 가지고 있다. 
 * > 선언한 이벤트 외에 페이지가 이동되버리거나 하면 곤란하니, handleSumbit 함수에서는 이를 막기위해 걸어놓는 preventDefault기능을 default로 가지고 있다.
 * 
 * 2. @submit (폼 제출 이벤트 핸들링)
 * 
 * 
 * 3. @validation (폼 유효성 검사)
 * > React Hook Form은 폼 필드의 유효성 검사를 위해 사용되는데, handleSubmit 함수는 내부적으로 폼 필드들의 유효성을 검사하고, 유효성 검사가 통과되었을 때만 onSubmit 콜백을 호출한다.
 * 
 * 4. @collectionFormData
 > 유효성 검사가 통과되면 onSubmit 콜백 함수를 호출하면서 폼 데이터를 인자로 전달한다.
 > 이를 통해 유효성 체크구문에서 불필요하게 watch로 최신입력값을 불러오지 않고, 인자로 제출된 폼 데이터를 그대로 받아서 필요한 작업을 수행할 수 있다.

 > 추가적으로, watch문이 별도 props로 이중전달된 구조라면 drilling unperformance현상도 방지할 수 있다.
 */

const SubmitForm = (
  { ...props }: IProps & React.HTMLProps<HTMLFormElement>,
  ref: Ref<HTMLFormElement>
) => {
  return (
    <form
      className={styles.form}
      ref={ref}
      method={props.method ? props.method : "POST"}
      {...props}
    ></form>
  );
};

export default forwardRef(SubmitForm);
