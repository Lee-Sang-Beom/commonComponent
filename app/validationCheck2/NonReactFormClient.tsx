"use client";

import Input from "@/components/Input/Input";
import { InputErrorMsgType } from "@/types/common/commonType";
import {
  returnIdEffectivenessMsg,
  returnPwConfirmEffectivenessMsg,
  returnPwEffectivenessMsg,
} from "@/utils/common/validityTesting/nonUseReactHookFormReturnOption/option";
import { useEffect, useState } from "react";
import "./input.scss";

interface IProps {
  data: {
    pw: string;
    id: string;
  };
}

export default function NonReactFormClient({ data }: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 유효성 검사: ID
  const [idEffectiveness, setIdEffectiveness] = useState<InputErrorMsgType>(
    data.id
      ? {
          isSuccess: true,
          msg: "사용 가능한 아이디입니다.",
        }
      : {
          isSuccess: false,
          msg: "아이디를 입력해주세요.",
        }
  );
  // 유효성 검사: 패스워드
  const [pwEffectivenessMsg, setPwEffectivenessMsg] =
    useState<InputErrorMsgType>(
      data.pw
        ? {
            isSuccess: true,
            msg: "사용가능한 비밀번호입니다.",
          }
        : {
            isSuccess: false,
            msg: "비밀번호를 입력해주세요.",
          }
    );

  // 유효성 검사: 패스워드 확인
  const [pwConfirmEffectivenessMsg, setPwConfirmEffectivenessMsg] =
    useState<InputErrorMsgType>({
      isSuccess: false,
      msg: "비밀번호가 일치하지 않습니다.",
    });

  const onSubmit = async () => {
    if (
      idEffectiveness.isSuccess &&
      pwEffectivenessMsg.isSuccess &&
      pwConfirmEffectivenessMsg.isSuccess
    ) {
      setIsLoading(true);

      await new Promise((r) => {
        return setTimeout(r, 1000);
      });
      setIsLoading(false);

      const postData = {
        userId: userId,
        pw: userPw,
        pwConfirm: userPwConfirm,
      };
      alert("유효성 테스트 검사 완료 (전달된 값은 콘솔확인)");
      console.log("postData : ", postData);

      // POST API 추가
    } else {
      alert("유효성 검증 통과 실패");
    }
  };

  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");
  const [userPwConfirm, setUserPwConfirm] = useState<string>("");

  useEffect(() => {
    setUserId(data.id);
    setUserPw(data.pw);
  }, [data]);

  return (
    <div style={{ padding: "30px" }}>
      {/* ID */}
      <div className="input_box">
        <p>ID</p>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요."
          // 별도 컴포넌트 기능
          title="id"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          value={userId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserId(e.target.value);
            setIdEffectiveness(
              returnIdEffectivenessMsg(true, e.target.value.toString())
            );
          }}
          effectivenessMsg={idEffectiveness}
        />
      </div>

      {/* PW */}
      <div className="input_box">
        <p>패스워드</p>
        <Input
          type="password"
          placeholder="패스워드를 입력해주세요."
          // 별도 컴포넌트 기능
          title="pw"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          value={userPw}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPw(e.currentTarget.value.toString());
            setPwEffectivenessMsg(
              returnPwEffectivenessMsg(true, e.currentTarget.value.toString())
            );

            // 입력 시마다, 비밀번호 확인 란에서도 변경된 값에 대한 비교가 이루어지게끔 구성
            setPwConfirmEffectivenessMsg(
              returnPwConfirmEffectivenessMsg(
                true,
                userPwConfirm,
                e.currentTarget.value.toString()
              )
            );
          }}
          effectivenessMsg={pwEffectivenessMsg}
        />
      </div>

      {/* PW 확인 */}
      <div className="input_box">
        <p>패스워드 확인</p>
        <Input
          type="password"
          placeholder="패스워드 확인을 진행해주세요."
          // 별도 컴포넌트 기능
          title="pwConfirm"
          color="white"
          inpSize={"lg"}
          border="br_square_round_1"
          value={userPwConfirm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPwConfirm(e.currentTarget.value.toString());
            setPwConfirmEffectivenessMsg(
              returnPwConfirmEffectivenessMsg(
                true,
                userPw,
                e.currentTarget.value.toString()
              )
            );
          }}
          effectivenessMsg={pwConfirmEffectivenessMsg}
        />
      </div>

      {/* 버튼 */}
      <button
        style={{
          border: "1px solid black",
          padding: "10px",
        }}
        onClick={() => {
          onSubmit();
        }}
        disabled={isLoading}
      >
        로그인
      </button>
    </div>
  );
}
