"use client";

import {
  insertHyphenToString,
  removeCommaToString,
  removeHyphenToString,
} from "@/utils/common/common";
import {
  brnoReactHookFormOption,
  commonNumberReactHookFormOption,
  emailReactHookFormOption,
  onlyNumberReactHookFormOption,
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
import moment from "moment";

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
    createDtDetail: string | Date;
    createDtDetailString: string;
    cost: number | string;
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
  createDtDetail: string | Date;
  createDtDetailString: string;
  cost: number | string;
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
      createDtDetailString: data.createDtDetailString,
      cost: Number(data.cost),
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
      cost: removeCommaToString(data.cost.toString()),
    };

    console.log("postData is ", postData);
    alert("유효성 테스트 검사 완료 (전달된 값은 콘솔확인)");

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
      <div className="input_box">
        <p>이메일</p>
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
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.email}
        />
      </div>

      {/* 이름 */}
      <div className="input_box">
        <p>이름</p>
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
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.name}
        />
      </div>

      {/* 휴대폰번호 */}
      <div className="input_box">
        <p>휴대폰 번호</p>
        <Input
          {...register("phoneNumber", phoneNumberReactHookFormOption(true))}
          type="text"
          placeholder="휴대폰 번호를 입력해주세요."
          aria-invalid={
            isSubmitted ? (errors.phoneNumber ? "true" : "false") : undefined
          }
          value={insertHyphenToString("TEL_NO", watch("phoneNumber") || "")}
          onChange={(e) => {
            setValue(
              "phoneNumber",
              removeHyphenToString(e.currentTarget.value),
              {
                shouldValidate: true,
              }
            );
          }}
          // 별도  컴포넌트 기능
          title="phoneNumber"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.phoneNumber}
        />
      </div>

      {/* 지역 번호 */}
      <div className="input_box">
        <p>지역 번호</p>
        <Input
          {...register("regionNumber", regionNumberReactHookFormOption(true))}
          type="text"
          placeholder="지역 번호를 입력해주세요."
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
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.regionNumber}
        />
      </div>

      {/* 공통 전화번호  */}
      <div className="input_box">
        <p>공통 전화번호</p>
        <Input
          {...register("commonNumber", commonNumberReactHookFormOption())}
          type="text"
          placeholder="공통 전화번호를 입력해주세요."
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
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.commonNumber}
        />
      </div>

      {/* ID */}
      <div className="input_box">
        <p>ID</p>
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
          aria-invalid={
            isSubmitted ? (errors.id ? "true" : "false") : undefined
          }
          // 별도 컴포넌트 기능
          title="id"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.id}
        />
      </div>

      {/* PW */}
      <div className="input_box">
        <p>패스워드</p>
        <Input
          {...register("pw", passwordReactHookFormOption(true))}
          type="password"
          placeholder="패스워드를 입력해주세요."
          aria-invalid={
            isSubmitted ? (errors.pw ? "true" : "false") : undefined
          }
          // 별도 컴포넌트 기능
          title="pw"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.pw}
        />
      </div>

      {/* PW 확인 */}
      <div className="input_box">
        <p>패스워드 확인</p>
        <Input
          {...register(
            "pwConfirm",
            passwordConfirmReactHookFormOption(watch("pw"), true)
          )}
          type="password"
          placeholder="패스워드 확인을 진행해주세요."
          aria-invalid={
            isSubmitted ? (errors.pwConfirm ? "true" : "false") : undefined
          }
          // 별도 컴포넌트 기능
          title="pwConfirm"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.pwConfirm}
        />
      </div>

      {/* 사업자 등록번호 */}
      <div className="input_box">
        <p>사업자 등록번호</p>
        <Input
          {...register("brno", brnoReactHookFormOption(false))}
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
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.brno}
        />
      </div>

      {/* 사업자 등록번호 */}
      <div className="input_box">
        <p>COST</p>
        <Input
          {...register("cost", onlyNumberReactHookFormOption(false, "비용"))}
          type="text"
          aria-invalid={
            isSubmitted ? (errors.cost ? "true" : "false") : undefined
          }
          value={insertHyphenToString("GENERAL", watch("cost") || "")}
          onChange={(e) => {
            setValue(
              "cost",
              removeCommaToString(e.currentTarget.value.toString()),
              {
                shouldValidate: true,
              }
            );
          }}
          // 별도 컴포넌트 기능
          title="cost"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.cost}
        />
      </div>

      {/* 날짜 */}
      <div className="input_box">
        <p>날짜</p>
        <Input
          {...register("createDt")}
          type="date"
          aria-invalid={
            isSubmitted ? (errors.createDt ? "true" : "false") : undefined
          }
          // 별도 컴포넌트 기능
          title="createDt"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          partialErrorObj={errors.createDt}
        />
      </div>

      {/* 날짜 2 : Date 형식으로 들어온 데이터를 YYYY-MM-DD HH:mm:ss 형식으로 변환*/}
      <div className="input_box">
        <p>
          {`디테일 날짜 출력 예시 1 (Date 객체를 커스텀 포맷팅된 날짜 형태로 출력하기)`}
        </p>
        <p className="etc_txt">{moment(watch("createDtDetail")).format("")}</p>

        <p className="etc_txt">
          {insertHyphenToString(
            "DATE",
            watch("createDtDetail"),

            // incomingMomentDateType undefined 전달 시, baseString를 default 날짜 객체로 읽어들임
            undefined,
            "YYYY-MM-DD HH:mm:ss"
          )}
        </p>
      </div>

      {/* 날짜 3 : 문자열 형식으로 들어온 데이터를  YYYY-MM-DD HH:mm:ss 형식으로 변환 */}
      <div className="input_box">
        <p>
          {`디테일 날짜 출력 예시 2 (String 문자열을 커스텀 포맷팅된 날짜 형태로 출력하기)`}
        </p>
        <p className="etc_txt">{watch("createDtDetailString")}</p>

        <p className="etc_txt">
          {insertHyphenToString(
            "DATE",
            watch("createDtDetailString"),
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
