import {
  emailRegex,
  passwordRegex,
  phoneAndRegionCommonNumberRegex,
  phoneNumberRegex,
  regionNumberRegex,
} from "../regex/regex";

interface ReactHookFormOption {
  required?: string;
  pattern: {
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
}
/**
 * @phoneNumberReactHookFormOption : 휴대폰 번호에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 * @minLength : 입력값의 최소 허용 길이
 * @maxLength : 입력값의 최대 허용 길이
 */
export function phoneNumberReactHookFormOption(
  required?: boolean,
  minLength?: number,
  maxLength?: number
) {
  const returnBaseObj: ReactHookFormOption = {
    pattern: {
      value: phoneNumberRegex,
      message: "휴대폰번호 형식이 올바르지 않습니다.",
    },
  };

  if (required) {
    returnBaseObj.required = "휴대폰번호는 필수 입력사항입니다.";
  }

  if (minLength) {
    returnBaseObj.minLength = {
      value: minLength,
      message: `휴대폰 번호는 최소 ${minLength}글자 이상이어야 합니다.`,
    };
  }

  if (maxLength) {
    returnBaseObj.maxLength = {
      value: maxLength,
      message: `휴대폰 번호는 최대 ${maxLength}글자를 초과할 수 없습니다.`,
    };
  }

  return returnBaseObj;
}

/**
 * @regionNumberReactHookFormOption : 지역 번호에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 * @minLength : 입력값의 최소 허용 길이
 * @maxLength : 입력값의 최대 허용 길이
 */
export function regionNumberReactHookFormOption(
  required?: boolean,
  minLength?: number,
  maxLength?: number
) {
  const returnBaseObj: ReactHookFormOption = {
    pattern: {
      value: regionNumberRegex,
      message: "지역 전화번호 형식이 올바르지 않습니다.",
    },
  };

  if (required) {
    returnBaseObj.required = "지역 전화번호는 필수 입력사항입니다.";
  }

  if (minLength) {
    returnBaseObj.minLength = {
      value: minLength,
      message: `지역 전화번호는 최소 ${minLength}글자 이상이어야 합니다.`,
    };
  }

  if (maxLength) {
    returnBaseObj.maxLength = {
      value: maxLength,
      message: `지역 전화번호는 최대 ${maxLength}글자를 초과할 수 없습니다.`,
    };
  }

  return returnBaseObj;
}

/**
 * @commonNumberReactHookFormOption : 휴대폰 + 지역 공통 번호에 대한 register() 함수의 두 번째 인자 Option값
 *
 * @required : 필수 입력사항인지 true, false를 보내면 됨
 * @minLength : 입력값의 최소 허용 길이
 * @maxLength : 입력값의 최대 허용 길이
 */
export function commonNumberReactHookFormOption(
  required?: boolean,
  minLength?: number,
  maxLength?: number
) {
  const returnBaseObj: ReactHookFormOption = {
    pattern: {
      value: phoneAndRegionCommonNumberRegex,
      message: "전화번호 형식이 올바르지 않습니다.",
    },
  };

  if (required) {
    returnBaseObj.required = "전화번호는 필수 입력사항입니다.";
  }

  if (minLength) {
    returnBaseObj.minLength = {
      value: minLength,
      message: `전화번호는 최소 ${minLength}글자 이상이어야 합니다.`,
    };
  }

  if (maxLength) {
    returnBaseObj.maxLength = {
      value: maxLength,
      message: `전화번호는 최대 ${maxLength}글자를 초과할 수 없습니다.`,
    };
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
