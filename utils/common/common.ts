import moment from "moment";

/**
 * @insertHyphenToString : TYPE에 따라 적절한 위치에 하이픈(-)을 넣은 새로운 문자열을 반환하는 함수
 *
 * @type : 사업자등록번호(BRNO), 전화번호(TELNO), 날짜(DATE)
 * @baseString : 변경을 원하는 기존 문자열
 * @incomingMomentDateType : moment 라이브러리에서 baseString이 어떤 타입의 날짜 형식을 가지고 있는 상태인지를 알려주는 포맷
 * @outcomingMomentDateType : moment 라이브러리에서 baseString이 어떤 타입의 날짜 형식을 리턴해야하는지를 알려주는 포맷
 */
export function insertHyphenToString(
  type: "BRNO" | "TEL_NO" | "DATE",
  baseString: string | null | undefined,
  incomingMomentDateType?: string,
  outcomingMomentDateType?: string
) {
  // 예상치 못한 값인 경우 빈 문자열 반환
  if (!baseString || baseString.length <= 0) {
    return "";
  }

  // 이미 하이픈(-)이 존재하면 전부 빼버림
  let resultString = baseString.toString().replaceAll("-", "");
  const incomingDateType = incomingMomentDateType || "YYYYMMDD";
  const outcomingDateType = outcomingMomentDateType || "YYYY-MM-DD";

  switch (type) {
    case "BRNO":
      resultString = resultString.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3");
      break;

    case "TEL_NO":
      resultString = resultString.replace(
        /(\d{2,3})(\d{3,4})(\d{4})/,
        "$1-$2-$3"
      );
      break;

    case "DATE":
      resultString = moment(resultString, incomingDateType).format(
        outcomingDateType
      );
      break;

    default:
      break;
  }

  return resultString;
}

/**
 * @removeHyphenToString : 하이픈을 모두 빼버리는 함수 (빈 문자열이면 빈 문자열 반환)
 *
 * @baseString : 변경을 원하는 기존 문자열
 */
export function removeHyphenToString(baseString: string | undefined | null) {
  // 예상치 못한 값이거나 빈 문자열인 경우 빈 문자열 반환
  if (!baseString || baseString.length <= 0) {
    return "";
  } else {
    return baseString
      .toString()
      .replace(/-/g, "")
      .replace(/[^0-9]/g, "");
  }
}
