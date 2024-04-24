"use client";

import {
  insertHyphenToString,
  removeHyphenToString,
} from "@/utils/common/common";
import {
  brnoReactHookFormOption,
  commonNumberReactHookFormOption,
  emailReactHookFormOption,
  passwordConfirmReactHookFormOption,
  passwordReactHookFormOption,
  phoneNumberReactHookFormOption,
  regionNumberReactHookFormOption,
} from "@/utils/common/validityTesting/reactHookFormReturnOption/option";
import { useForm } from "react-hook-form";

// 임시
import "./input.scss";
import { useEffect } from "react";
import Input from "@/components/Input/Input";

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
  pwConfirm: string;
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
      pwConfirm: "",
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

    // removeHyphenToString 메소드는 빈 값이나 존재하지 않는 값을 보내면 무조건 빈 string을 반환함
    const postData = {
      ...data,
      phoneNumber: removeHyphenToString(data.phoneNumber),
      regionNumber: removeHyphenToString(data.regionNumber),
      commonNumber: removeHyphenToString(data.commonNumber),
      brno: removeHyphenToString(data.brno),
      createDt: removeHyphenToString(data.createDt),
    };

    console.log("postData is ", postData);

    // POST API 추가
  };

  useEffect(() => {
    // 비밀번호 변경 시, 자동으로 pwConfirm 유효성을 검사하도록 구성
    setValue("pwConfirm", watch("pwConfirm") || "", {
      shouldValidate: true,
    });
  }, [watch("pw")]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 이메일 */}
      <Input
        {...register("email", emailReactHookFormOption(true))}
        type="text"
        placeholder="이메일을 입력해주세요."
        aria-invalid={
          isSubmitted ? (errors.email ? "true" : "false") : undefined
        }
        // 별도 컴포넌트 기능
        title="email"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.email}
      />

      {/* 이름 */}
      <Input
        {...register("name", {
          required: "이름은 필수 입력입니다.",

          // 최소 길이를 따라야 하는 경우
          minLength: {
            value: 2,
            message: "2글자 이상 입력해주세요.",
          },
        })}
        type="text"
        placeholder="이름을 입력해주세요."
        aria-invalid={
          isSubmitted ? (errors.name ? "true" : "false") : undefined
        }
        // 별도  컴포넌트 기능
        title="name"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.name}
      />

      {/* 휴대폰번호 */}
      <Input
        {...register("phoneNumber", phoneNumberReactHookFormOption(true))}
        type="text"
        placeholder="01000000000"
        aria-invalid={
          isSubmitted ? (errors.phoneNumber ? "true" : "false") : undefined
        }
        value={insertHyphenToString("TEL_NO", watch("phoneNumber") || "")}
        onChange={(e) => {
          setValue("phoneNumber", removeHyphenToString(e.currentTarget.value), {
            shouldValidate: true,
          });
        }}
        // 별도  컴포넌트 기능
        title="phoneNumber"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.phoneNumber}
      />

      {/* 지역 번호 */}
      <Input
        {...register("regionNumber", regionNumberReactHookFormOption(true))}
        type="text"
        placeholder="01000000000"
        aria-invalid={
          isSubmitted ? (errors.regionNumber ? "true" : "false") : undefined
        }
        value={insertHyphenToString("TEL_NO", watch("regionNumber") || "")}
        onChange={(e) => {
          setValue(
            "regionNumber",
            removeHyphenToString(e.currentTarget.value),
            {
              shouldValidate: true,
            }
          );
        }}
        // 별도 컴포넌트 기능
        title="regionNumber"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.regionNumber}
      />

      {/* 공통 전화번호  */}
      <Input
        {...register("commonNumber", commonNumberReactHookFormOption())}
        type="text"
        placeholder="01000000000"
        aria-invalid={
          isSubmitted ? (errors.commonNumber ? "true" : "false") : undefined
        }
        value={insertHyphenToString("TEL_NO", watch("commonNumber") || "")}
        onChange={(e) => {
          setValue(
            "commonNumber",
            removeHyphenToString(e.currentTarget.value),
            {
              shouldValidate: true,
            }
          );
        }}
        // 별도 컴포넌트 기능
        title="commonNumber"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.commonNumber}
      />

      {/* ID */}
      <Input
        {...register("id", {
          required: "아이디는 필수 입력입니다.",

          // 최소 길이 4글자 이상
          minLength: {
            value: 4,
            message: "아이디는 최소 4글자 이상이어야 합니다.",
          },
        })}
        type="text"
        placeholder="아이디를 입력해주세요."
        aria-invalid={isSubmitted ? (errors.id ? "true" : "false") : undefined}
        // 별도 컴포넌트 기능
        title="id"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.id}
      />

      {/* PW */}
      <Input
        {...register("pw", passwordReactHookFormOption(true))}
        type="password"
        placeholder="1q2w3e4r"
        aria-invalid={isSubmitted ? (errors.pw ? "true" : "false") : undefined}
        // 별도 컴포넌트 기능
        title="pw"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.pw}
      />

      {/* PW 확인 */}
      <Input
        {...register(
          "pwConfirm",
          passwordConfirmReactHookFormOption(watch("pw"))
        )}
        type="password"
        placeholder="1q2w3e4r"
        aria-invalid={
          isSubmitted ? (errors.pwConfirm ? "true" : "false") : undefined
        }
        // 별도 컴포넌트 기능
        title="pwConfirm"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.pwConfirm}
      />

      {/* 사업자 등록번호 */}
      <Input
        {...register("brno", brnoReactHookFormOption(true))}
        type="text"
        aria-invalid={
          isSubmitted ? (errors.brno ? "true" : "false") : undefined
        }
        value={insertHyphenToString("BRNO", watch("brno") || "")}
        onChange={(e) => {
          setValue("brno", removeHyphenToString(e.currentTarget.value), {
            shouldValidate: true,
          });
        }}
        // 별도 컴포넌트 기능
        title="brno"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.brno}
      />

      {/* 날짜 */}
      <Input
        {...register("createDt")}
        type="date"
        aria-invalid={
          isSubmitted ? (errors.createDt ? "true" : "false") : undefined
        }
        // 별도 컴포넌트 기능
        title="createDt"
        color="white"
        inpSize={"md"}
        border="br_50"
        partialErrorObj={errors.createDt}
      />

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
