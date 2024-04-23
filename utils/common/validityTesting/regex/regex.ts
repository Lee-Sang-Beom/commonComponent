/**
 * @phoneNumberRegex : 휴대폰번호 유효성체크
 * @regionNumberRegex : 지역전화번호 유효성체크
 * @phoneAndRegionCommonNumberRegex : 공통 번호 유효성체크
 */
export const phoneNumberRegex = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
export const regionNumberRegex =
  /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]))(\d{3,4})(\d{4})$/;
export const phoneAndRegionCommonNumberRegex = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/;

/**
 * @emailRegex : 이메일 유효성체크
 * @passwordRegex : 패스워드 유효성 체크 (영문, 숫자, 특수문자 혼용 9~20자리)
 */
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[`~!@@#$%^&*|₩₩₩'₩";:₩/?])[a-zA-Z0-9`~!@@#$%^&*|₩₩₩'₩";:₩/?]{9,20}$/;
