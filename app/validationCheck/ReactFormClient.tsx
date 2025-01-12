"use client";

import {
  insertFormatToString,
  removeFormatToString,
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
import { useEffect, useState } from "react";
import Input from "@/components/Input/Input";
import moment from "moment";
import SubmitForm from "@/components/SubmitForm/SubmitForm";
import Selectbox from "@/components/Selectbox/Selectbox";
import Checkbox from "@/components/Checkbox/Checkbox";
import Radiobox from "@/components/Radiobox/Radiobox";

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
  createDtDetailString: string;
  cost: number | string;
  memberType: string;
  radioSelectType: "ONE" | "TWO" | null;
  smsYn: boolean;
}

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
    createDtDetail: Date;
    createDtDetailString: string;
    cost: number | string;
    memberType: string | null;
    radioSelectType: "ONE" | "TWO" | null;
    smsYn: "Y" | "N" | null;
  };
}

interface RadioType {
  id: string;
  name: string;
  value: string | number;
  checked: boolean;
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
      phoneNumber: insertFormatToString("TEL_NO", data.phoneNumber),
      regionNumber: insertFormatToString("TEL_NO", data.regionNumber),
      commonNumber: insertFormatToString("TEL_NO", data.commonNumber),
      brno: insertFormatToString("BRNO", data.brno),
      pw: data.pw,
      pwConfirm: "",
      id: data.id,
      createDt: insertFormatToString(
        "DATE",
        data.createDt,
        "YYYYMMDD",
        "YYYY-MM-DD"
      ),
      createDtDetail: moment(data.createDtDetail).format("YYYYMMDDHHmmss"),
      createDtDetailString: data.createDtDetailString,
      cost: insertFormatToString("NUMBER", Number(data.cost)),
      memberType: data.memberType || "",
      radioSelectType: data.radioSelectType || null,
      smsYn: data.smsYn && data.smsYn === "Y" ? true : false,
    },
    // resetOptions: {
    //   keepDirtyValues: true, // 사용자 상호작용으로 입력된 값이 유지됩니다.
    //   keepErrors: true, // 값 업데이트 시 입력 오류가 유지됩니다.
    // },
  });

  const onSubmit = async (data: IForm) => {
    await new Promise((r) => setTimeout(r, 1000));

    // removeFormatToString 메소드는 빈 값이나 존재하지 않는 값을 보내면 무조건 빈 string을 반환함
    const postData = {
      ...data,
      phoneNumber: removeFormatToString("TEL_NO", data.phoneNumber),
      regionNumber: removeFormatToString("TEL_NO", data.regionNumber),
      commonNumber: removeFormatToString("TEL_NO", data.commonNumber),
      brno: removeFormatToString("BRNO", data.brno),
      createDt: removeFormatToString("DATE", data.createDt),
      cost: removeFormatToString("NUMBER", data.cost.toString()),
      smsYn: data.smsYn ? "Y" : "N",
    };

    console.log("postData is ", postData);
    alert("유효성 테스트 검사 완료 (전달된 값은 콘솔확인)");

    // POST API 추가
  };

  const onError = (errors: any) => {
    console.log("errors ", errors);
  };

  useEffect(() => {
    // 비밀번호 변경 시, 자동으로 pwConfirm 유효성을 검사하도록 구성
    setValue("pwConfirm", watch("pwConfirm") || "", {
      shouldValidate: true,
    });
  }, [watch("pw")]);

  useEffect(() => {
    watch((value, { name, type }) => {
      console.log("watch value: ", value);
      console.log("watch name: ", name);
      console.log("watch type: ", type);
    });
  }, [watch]);

  // 라디오 버튼 items 배열 재배치
  const [baseArrayRadio, setBaseArrayRadio] = useState<RadioType[]>([
    { id: "1", name: "항목 1", value: "ONE", checked: false },
    { id: "2", name: "항목 2", value: "TWO", checked: false },
  ]);

  useEffect(() => {
    setBaseArrayRadio((prev: RadioType[]) => {
      return prev.map((prevItem: RadioType, idx: number) => {
        if (prevItem.value === watch("radioSelectType")) {
          return {
            ...prevItem,
            checked: true,
          };
        } else {
          return prevItem;
        }
      });
    });
  }, [data]);

  return (
    <SubmitForm onSubmit={handleSubmit(onSubmit, onError)}>
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

      {/* 회원유형 */}
      <div className="input_box">
        <p>회원유형</p>
        <Selectbox
          {...register("memberType", {
            required: "회원유형 선택은 필수입니다.",
          })}
          items={[
            { group: "", name: "선택안함", value: "" },
            { group: "", name: "일반", value: "normal" },
            { group: "", name: "기업", value: "enterprise" },
          ]}
          placeholder="회원유형을 선택 해주세요."
          // 별도 컴포넌트 기능
          title="회원유형"
          color="white"
          border="br_square_round_1"
          size="lg"
          value={watch("memberType")}
          onChange={(e) => {
            setValue("memberType", e.target.value, {
              shouldValidate: true,
            });
          }}
          partialErrorObj={errors.memberType}
          effectivenessMsg={
            !errors.memberType
              ? {
                  isSuccess: true,
                  msg: "선택 가능한 유형입니다.",
                }
              : undefined
          }
        />
      </div>

      {/* 체크박스 테스트 */}
      <div className="include_checkbox">
        <p>{`필수동의(체크박스 테스트)`}</p>
        <Checkbox
          {...register("smsYn", {
            required:
              "체크박스는 따로 오류출력 메시지를 외부에서 만들어주어야 한다. 선택항목을 골라주세요.",
          })}
          title={"필수동의(체크박스)"}
          color={"mainColor"}
          border="br_round"
          checked={watch("smsYn")}
          onChange={(e) => {
            setValue("smsYn", e.currentTarget.checked, {
              shouldValidate: true,
            });
          }}
        />
        <p style={{ color: "red" }}>{errors.smsYn && errors.smsYn.message}</p>
      </div>

      {/* 라디오 테스트 */}
      <div className="input_box">
        <p>{`필수동의(라디오버튼 테스트)`}</p>
        <Radiobox
          {...register("radioSelectType", {
            required: "항목을 필수적으로 선택해주세요.",
          })}
          items={baseArrayRadio}
          title={"필수동의(라디오)"}
          color={"mainColor"}
          border="br_round"
          onClick={(e) => {
            const selectValue = e.currentTarget.value as "ONE" | "TWO";
            setValue("radioSelectType", selectValue);
          }}
          partialErrorObj={errors.radioSelectType}
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
          value={watch("phoneNumber")}
          onFocus={(e) => {
            setValue(
              "phoneNumber",
              removeFormatToString("TEL_NO", watch("phoneNumber")),
              {
                shouldValidate: true,
              }
            );
          }}
          onBlur={(e) => {
            setValue(
              "phoneNumber",
              insertFormatToString("TEL_NO", watch("phoneNumber")),
              {
                shouldValidate: true,
              }
            );
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("phoneNumber", e.target.value, {
              shouldValidate: true,
            });
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
          value={watch("regionNumber")}
          onFocus={(e) => {
            setValue(
              "regionNumber",
              removeFormatToString("TEL_NO", "regionNumber"),
              {
                shouldValidate: true,
              }
            );
          }}
          onBlur={(e) => {
            setValue(
              "regionNumber",
              insertFormatToString("TEL_NO", watch("regionNumber")),
              {
                shouldValidate: true,
              }
            );
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("regionNumber", e.target.value, {
              shouldValidate: true,
            });
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
          type="tel"
          placeholder="공통 전화번호를 입력해주세요."
          aria-invalid={
            isSubmitted ? (errors.commonNumber ? "true" : "false") : undefined
          }
          value={watch("commonNumber")}
          onFocus={(e) => {
            setValue(
              "commonNumber",
              removeFormatToString("TEL_NO", watch("commonNumber")),
              {
                shouldValidate: true,
              }
            );
          }}
          onBlur={(e) => {
            setValue(
              "commonNumber",
              insertFormatToString("TEL_NO", watch("commonNumber")),
              {
                shouldValidate: true,
              }
            );
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("commonNumber", e.target.value, {
              shouldValidate: true,
            });
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
            // required: "아이디는 필수 입력입니다.",

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
          effectivenessMsg={
            !errors.id && watch("id").length
              ? {
                  isSuccess: true,
                  msg: "사용 가능한 아이디입니다.",
                }
              : undefined
          }
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
          effectivenessMsg={
            !errors.pwConfirm
              ? {
                  isSuccess: true,
                  msg: "비밀번호가 일치합니다.",
                }
              : undefined
          }
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
          value={watch("brno")}
          onFocus={(e) => {
            setValue("brno", removeFormatToString("BRNO", watch("brno")), {
              shouldValidate: true,
            });
          }}
          onBlur={(e) => {
            setValue("brno", insertFormatToString("BRNO", watch("brno")), {
              shouldValidate: true,
            });
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("brno", e.target.value, {
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
          {...register("cost", onlyNumberReactHookFormOption(true))}
          type="text"
          aria-invalid={
            isSubmitted ? (errors.cost ? "true" : "false") : undefined
          }
          value={watch("cost")}
          onFocus={(e) => {
            setValue("cost", removeFormatToString("NUMBER", watch("cost")), {
              shouldValidate: true,
            });
          }}
          onBlur={(e) => {
            setValue("cost", insertFormatToString("NUMBER", watch("cost")), {
              shouldValidate: true,
            });
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("cost", e.target.value, {
              shouldValidate: true,
            });
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
          {...register("createDt", {
            required: "날짜 선택은 필수입니다.",
          })}
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
        <p className="etc_txt">{watch("createDtDetail").toString()}</p>

        <p className="etc_txt">
          {insertFormatToString(
            "DATE",
            watch("createDtDetail"),
            "YYYYMMDDHHmmss", // incomingMomentDateType를 명시하여 형식 지정
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
          {insertFormatToString(
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
    </SubmitForm>
  );
}
