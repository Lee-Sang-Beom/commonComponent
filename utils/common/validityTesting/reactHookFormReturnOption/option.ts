import { removeCommaToString } from "../../common";
import {
  emailRegex,
  generalNumRegex,
  passwordRegex,
  phoneAndRegionCommonNumberRegex,
  phoneNumberRegex,
  regionNumberRegex,
} from "../regex/regex";

interface ReactHookFormOption {
  required?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };

  minLength?: {
    value: number;
    message: string;
  };

  maxLength?: {
    value: number;
    message: string;
  };

  validate?: any;
}

/**
 * @phoneNumberReactHookFormOption : 휴대폰 번호에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 */
export function phoneNumberReactHookFormOption(required?: boolean) {
  const returnBaseObj: ReactHookFormOption = {
    validate: {
      /**
       * @patternCheck : "-"를 제외한 휴대폰 번호 정규식 체크
       */
      patternCheck: (v: string) => {
        if (!required && v.length <= 0) return true;

        let result = false;
        if (phoneNumberRegex.test(v.replaceAll("-", ""))) {
          result = true;
        }
        return result || "휴대폰 번호 형식이 올바르지 않습니다.";
      },
    },
  };

  if (required) {
    returnBaseObj.required = "휴대폰 번호는 필수 입력사항입니다.";
  }

  return returnBaseObj;
}

/**
 * @regionNumberReactHookFormOption : 지역 번호에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 */
export function regionNumberReactHookFormOption(required?: boolean) {
  const returnBaseObj: ReactHookFormOption = {
    validate: {
      /**
       * @patternCheck : "-"를 제외한 지역 전화번호 정규식 체크
       */
      patternCheck: (v: string) => {
        if (!required && v.length <= 0) return true;

        let result = false;
        if (regionNumberRegex.test(v.replaceAll("-", ""))) {
          result = true;
        }
        return result || "지역 전화번호 형식이 올바르지 않습니다.";
      },
    },
  };

  if (required) {
    returnBaseObj.required = "지역 전화번호는 필수 입력사항입니다.";
  }

  return returnBaseObj;
}

/**
 * @commonNumberReactHookFormOption : 휴대폰 + 지역 공통 번호에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 */
export function commonNumberReactHookFormOption(required?: boolean) {
  const returnBaseObj: ReactHookFormOption = {
    validate: {
      /**
       * @patternCheck : "-"를 제외한 전화번호 정규식 체크
       */
      patternCheck: (v: string) => {
        if (!required && v.length <= 0) return true;

        let result = false;
        if (phoneAndRegionCommonNumberRegex.test(v.replaceAll("-", ""))) {
          result = true;
        }
        return result || "전화번호 형식이 올바르지 않습니다.";
      },
    },
  };
  if (required) {
    returnBaseObj.required = "전화번호는 필수 입력사항입니다.";
  }

  return returnBaseObj;
}

/**
 * @emailReactHookFormOption : 이메일에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 * @minLength : 입력값의 최소 허용 길이
 * @maxLength : 입력값의 최대 허용 길이
 */
export function emailReactHookFormOption(
  required?: boolean,
  minLength?: number,
  maxLength?: number
) {
  const returnBaseObj: ReactHookFormOption = {
    pattern: {
      value: emailRegex,
      message: "이메일 형식이 올바르지 않습니다.",
    },
  };

  if (required) {
    returnBaseObj.required = "이메일은 필수 입력사항입니다.";
  }

  if (minLength) {
    returnBaseObj.minLength = {
      value: minLength,
      message: `이메일은 최소 ${minLength}글자 이상이어야 합니다.`,
    };
  }

  if (maxLength) {
    returnBaseObj.maxLength = {
      value: maxLength,
      message: `이메일은 최대 ${maxLength}글자를 초과할 수 없습니다.`,
    };
  }

  return returnBaseObj;
}

/**
 * @passwordReactHookFormOption : 패스워드에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 * @minLength : 입력값의 최소 허용 길이
 * @maxLength : 입력값의 최대 허용 길이
 */
export function passwordReactHookFormOption(
  required?: boolean,
  minLength?: number,
  maxLength?: number
) {
  // 참고: passwordRegex는 유효성 정규식 체크에 {9,20} 글자 유효성을 포함하고 있으므로 굳이 min, max 값을 보내지 않아도 문제 없음
  const returnBaseObj: ReactHookFormOption = {
    pattern: {
      value: passwordRegex,
      message: "비밀번호 형식이 올바르지 않습니다.",
    },
  };

  if (required) {
    returnBaseObj.required = "비밀번호 입력은 필수 입력사항입니다.";
  }

  if (minLength) {
    returnBaseObj.minLength = {
      value: minLength,
      message: `비밀번호는 최소 ${minLength}글자 이상이어야 합니다.`,
    };
  }

  if (maxLength) {
    returnBaseObj.maxLength = {
      value: maxLength,
      message: `비밀번호는 최대 ${maxLength}글자를 초과할 수 없습니다.`,
    };
  }

  return returnBaseObj;
}

/**
 * @passwordConfirmReactHookFormOption : 패스워드 확인에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @pw : 비교 대상
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 */
export function passwordConfirmReactHookFormOption(
  pw: string,
  required?: boolean
) {
  const returnBaseObj: ReactHookFormOption = {};

  if (required) {
    returnBaseObj.required = "비밀번호 확인란의 입력은 필수 입력사항입니다.";
  }

  returnBaseObj.validate = {
    /**
     * @patternCheck : 비밀번호, 비밀번호 확인 입력값 비교 체크
     */
    patternCheck: (v: string) => {
      if (!required && v.length <= 0) return true;

      let result = false;
      if (pw === v) {
        result = true;
      }
      return result || "비밀번호가 일치하지 않습니다.";
    },
  };
  return returnBaseObj;
}

/**
 * @brnoReactHookFormOption : 사업자 등록번호에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 */
export function brnoReactHookFormOption(required?: boolean) {
  const returnBaseObj: ReactHookFormOption = {
    // validate 함수를 직접 만들어서 validation을 할 수 있다.
    validate: {
      /**
       * @startsWith : 사업자 등록번호 자체의 유효성 체크
       * @patternCheck : "-"를 제외한 글자 수 체크
       */
      startsWith: (v: string) => {
        if (!required && v.length <= 0) return true;

        let result = false;
        let numberMap = v
          .replace(/-/gi, "")
          .split("")
          .map(function (d) {
            return parseInt(d, 10);
          });
        let keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
        let chk = 0;
        keyArr.forEach(function (d, i) {
          chk += d * numberMap[i];
        });
        chk += (keyArr[8] * numberMap[8]) / 10;
        if (numberMap[9] === (10 - Math.floor(chk % 10)) % 10) {
          result = true;
        }
        return result || "유효한 사업자등록번호가 아닙니다.";
      },
      patternCheck: (v: string) => {
        if (!required && v.length <= 0) return true;

        let result = false;
        if (v.replaceAll("-", "").length === 10) {
          result = true;
        }
        return result || "사업자 등록번호는 10자리를 입력해주세요.";
      },
    },
  };

  if (required) {
    returnBaseObj.required = "사업자 등록번호 입력은 필수 입력사항입니다.";
  }

  return returnBaseObj;
}

/**
 * @onlyNumberReactHookFormOption : 오직 숫자값을 포함하는가에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 */
export function onlyNumberReactHookFormOption(
  required?: boolean,
  messageLabelTitle?: string
) {
  const returnBaseObj: ReactHookFormOption = {
    // validate 함수를 직접 만들어서 validation을 할 수 있다.
    validate: {
      /**
       * @patternCheck : "-"를 제외한 글자 수 체크
       */

      patternCheck: (v: string) => {
        if (!required && v.length <= 0) return true;

        let result = false;
        if (generalNumRegex.test(removeCommaToString(v))) {
          result = true;
        }
        return (
          result ||
          `${messageLabelTitle || "해당"} 입력란은 숫자로만 입력되어야 합니다.`
        );
      },
    },
  };

  if (required) {
    returnBaseObj.required = `${
      messageLabelTitle || "해당"
    } 입력란은 필수 입력사항입니다.`;
  }

  return returnBaseObj;
}
