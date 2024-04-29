import { EnumType } from "@/types/common/commonType";

export interface AuthMenuTreeResponse {
  /**
   * @authrtMenuSeq: 권한메뉴 시퀀스
   */
  authrtMenuSeq: number;
  /**
   * @menuSeq: 메뉴 시퀀스
   */
  menuSeq: number;
  /**
   * @authrtSeq: 권한 시퀀스
   */
  authrtSeq: number;
  /**
   * @upMenuSeq: 메뉴 상위 시퀀스
   */
  upMenuSeq: number;
  /**
   * @sortNo: 정렬 순서
   */
  sortNo: number;
  /**
   * @menuNm: 메뉴명
   */
  menuNm: string;
  /**
   * @level: 레벨
   */
  level: number;
  /**
   * @originMenuUrl: origin 메뉴 URL
   */
  originMenuUrl: string;
  /**
   * @menuUrl: 메뉴 URL
   */
  menuUrl: string;
  /**
   * @nameSort: 메뉴명 정렬
   */
  nameSort: string;
  /**
   * @srvcSeq: 서비스 시퀀스
   */
  srvcSeq: number;
  /**
   * @srvcNm: 서비스 명
   */
  srvcNm: string;
  /**
   * @srvcPath: 서비스 경로
   */
  srvcPath: string;
  /**
   * @menuTypeEnu: 메뉴 타입 Enu
   */
  menuTypeEnu: EnumType<"CONSOLE" | "PORTAL" | "CMS">;
  /**
   * @mainDisplayYn: 메인 디스플레이 YN
   */
  mainDisplayYn: "Y" | "N";
  /**
   * @displayYn: 디스플레이 YN
   */
  displayYn: "Y" | "N";
  /**
   * @useYn: 사용여부 YN
   */
  useYn: "Y" | "N";
  /**
   * @hasChild: 자식노드 여부 YN
   */
  hasChild: "Y" | "N";
  /**
   * 활성화 비활성화
   */
  isActiveYn: "Y" | "N";
}
