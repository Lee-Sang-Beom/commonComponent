"use client";

import {
  insertHyphenToString,
  removeHyphenToString,
} from "@/utils/common/common";
import {
  brnoReactHookFormOption,
  commonNumberReactHookFormOption,
  emailReactHookFormOption,
  passwordReactHookFormOption,
  phoneNumberReactHookFormOption,
  regionNumberReactHookFormOption,
} from "@/utils/common/validityTesting/reactHookFormReturnOption/option";
import { useForm } from "react-hook-form";

// 임시
import "./input.scss";

interface IProps {
  data: {
    email: string;
    name: string;
    phoneNumber: string;
    regionNumber: string;
    commonNumber: string;
    pw: string;
    id: string;
    brno: string;
    createDt: string;
    createDtDetail: string;
  };
}

interface IForm {
  email: string;
  name: string;
  phoneNumber: string;
  regionNumber: string;
  commonNumber: string;
  pw: string;
  id: string;
  brno: string;
  createDt: string;
  createDtDetail: string;
}
export default function ReactFormClient({ data }: IProps) {
  const {
    register,
    getValues,
    setValue,

    // react-hook-form이 내부적으로 사용하는 폼 컨트롤러 객체입니다. 폼 컨트롤러를 사용하여 폼을 더욱 세밀하게 제어할 수 있습니다.
    control,

    // handleSubmit: 폼 제출(submit)을 처리하는 함수입니다. 이 함수는 폼의 입력 데이터를 검증하고 처리하는 역할을 합니다.
    handleSubmit,
    watch,
    formState: {
      // isSubmitting: 양식이 현재 제출중인가?
      isSubmitting,
      isSubmitted,
      errors,
    },
  } = useForm<IForm>({
    mode: "all",
    defaultValues: {
      email: data.email,
      name: data.name,
      phoneNumber: insertHyphenToString("TEL_NO", data.phoneNumber),
      regionNumber: insertHyphenToString("TEL_NO", data.regionNumber),
      commonNumber: insertHyphenToString("TEL_NO", data.commonNumber),
      brno: insertHyphenToString("BRNO", data.brno),
      pw: data.pw,
      id: data.id,
      createDt: insertHyphenToString(
        "DATE",
        data.createDt,
        "YYYYMMDD",
        "YYYY-MM-DD"
      ),
      createDtDetail: data.createDtDetail,
    },
  });

  const onSubmit = async (data: IForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("1초 후 handleSubmit 동작: ", data);

    // POST API 추가
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 이메일 */}
      <div>
        <label htmlFor="email">이메일</label>
        <input
          {...register("email", emailReactHookFormOption(true))}
          id="email"
          type="text"
          placeholder="test@email.com"
          // 웹 접근성을 위해 사용 (어떤 필드가 유효하지 않은지 스크린 리더를 사용하여 사용자에게 알려줌)
          // "true"이면 입력 필드에 오류가 있음을 알림
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
      </div>

      {/* 이름 */}
      <div>
        <label htmlFor="name">이름</label>
        <input
          {...register("name", {
            required: "이름은 필수 입력입니다.",

            // 최소 길이를 따라야 하는 경우
            minLength: {
              value: 2,
              message: "2글자 이상 입력해주세요.",
            },
          })}
          id="name"
          type="text"
          placeholder="이름"
          aria-invalid={
            isSubmitted ? (errors.name ? "true" : "false") : undefined
          }
        />
        {errors.name && <small role="alert">{errors.name.message}</small>}
      </div>

      {/* 휴대폰번호 */}
      <div>
        <label htmlFor="phoneNumber">휴대폰번호</label>
        <input
          {...register("phoneNumber", phoneNumberReactHookFormOption(true))}
          id="phoneNumber"
          type="text"
          placeholder="01000000000"
          aria-invalid={
            isSubmitted ? (errors.phoneNumber ? "true" : "false") : undefined
          }
          value={insertHyphenToString("TEL_NO", watch("phoneNumber") || "")}
          onChange={(e) => {
            setValue(
              "phoneNumber",
              removeHyphenToString(e.currentTarget.value)
            );
          }}
        />
        {errors.phoneNumber && (
          <small role="alert">{errors.phoneNumber.message}</small>
        )}
      </div>

      {/* 지역 번호 */}
      <div>
        <label htmlFor="regionNumber">지역 번호</label>
        <input
          {...register("regionNumber", regionNumberReactHookFormOption(true))}
          id="regionNumber"
          type="text"
          placeholder="01000000000"
          aria-invalid={
            isSubmitted ? (errors.regionNumber ? "true" : "false") : undefined
          }
          value={insertHyphenToString("TEL_NO", watch("regionNumber") || "")}
          onChange={(e) => {
            setValue(
              "regionNumber",
              removeHyphenToString(e.currentTarget.value)
            );
          }}
        />
        {errors.regionNumber && (
          <small role="alert">{errors.regionNumber.message}</small>
        )}
      </div>

      {/* 공통 전화번호  */}
      <div>
        <label htmlFor="commonNumber">공통 전화번호</label>
        <input
          {...register("commonNumber", commonNumberReactHookFormOption())}
          id="commonNumber"
          type="text"
          placeholder="01000000000"
          aria-invalid={
            isSubmitted ? (errors.commonNumber ? "true" : "false") : undefined
          }
          value={insertHyphenToString("TEL_NO", watch("commonNumber") || "")}
          onChange={(e) => {
            setValue(
              "commonNumber",
              removeHyphenToString(e.currentTarget.value)
            );
          }}
        />
        {errors.commonNumber && (
          <small role="alert">{errors.commonNumber.message}</small>
        )}
      </div>

      {/* ID */}
      <div>
        <label htmlFor="id">ID</label>
        <input
          {...register("id", {
            required: "아이디는 필수 입력입니다.",

            // 최소 길이 4글자 이상
            minLength: {
              value: 4,
              message: "아이디는 최소 4글자 이상이어야 합니다.",
            },
          })}
          id="id"
          type="text"
          placeholder="user01"
          aria-invalid={
            isSubmitted ? (errors.id ? "true" : "false") : undefined
          }
        />
        {errors.id && <small role="alert">{errors.id.message}</small>}
      </div>

      {/* PW */}
      <div>
        <label htmlFor="pw">PW</label>
        <input
          {...register("pw", passwordReactHookFormOption(true))}
          id="pw"
          type="password"
          placeholder="1q2w3e4r"
          aria-invalid={
            isSubmitted ? (errors.pw ? "true" : "false") : undefined
          }
        />
        {errors.pw && <small role="alert">{errors.pw.message}</small>}
      </div>

      {/* 사업자 등록번호 */}
      <div>
        <label htmlFor="brno">사업자 등록번호</label>
        <input
          {...register("brno", brnoReactHookFormOption(true))}
          id="brno"
          type="text"
          aria-invalid={
            isSubmitted ? (errors.brno ? "true" : "false") : undefined
          }
          value={insertHyphenToString("BRNO", watch("brno") || "")}
          onChange={(e) => {
            setValue("brno", removeHyphenToString(e.currentTarget.value));
          }}
        />
        {errors.brno && <small role="alert">{errors.brno.message}</small>}
      </div>

      {/* 날짜 */}
      <div>
        <label htmlFor="createDt">날짜</label>
        <input
          {...register("createDt")}
          id="brno"
          type="date"
          aria-invalid={
            isSubmitted ? (errors.brno ? "true" : "false") : undefined
          }
        />
        {errors.createDt && (
          <small role="alert">{errors.createDt.message}</small>
        )}
      </div>

      {/* 날짜 2 */}
      <div className="etc">
        <span>{`디테일 변경 전 `}</span>
        <p>{watch("createDtDetail")}</p>
      </div>
      <div className="etc">
        <span>{`디테일 변경 후 `}</span>

        <p>
          {insertHyphenToString(
            "DATE",
            watch("createDtDetail"),
            "YYYYMMDDHHmmss",
            "YYYY-MM-DD HH:mm:ss"
          )}
        </p>
      </div>

      {/* 버튼 */}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}
