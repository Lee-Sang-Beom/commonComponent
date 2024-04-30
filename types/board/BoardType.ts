import {
  AttachFile,
  EnumType,
  FileDto,
  TablePageRequest,
} from "@/types/common/commonType";

export interface SearchBoardCommand extends TablePageRequest {
  /**
   * @bbsStngSeq: 게시판 설정 시퀀스
   */
  bbsStngSeq?: number;
  /**
   * @boardSearchType: 검색 유형 Enu
   */
  boardSearchType: "TITLE" | "CONTENT" | "ALL";
  /**
   * @typeCd: 유형 구분
   */
  typeCd?: string;
  /**
   * 태그 배열
   */
  tagConditions?: [
    { tagType: "BBS_PRIZE_TYPE" | "YEAR_PRIZE"; tagName: string },
  ];
  year?: string;
  /**
   * @searchKeyword: 검색어
   */
  searchKeyword?: string;
  /**
   * @startYmd: 검색 시작일자
   */
  startYmd?: string;
  /**
   * @endYmd: 검색 종료일자
   */
  endYmd?: string;
  /**
   * @type: 시퀀스
   */
  type?: number;
  /**
   * 바로가기 링크
   */
  url?: string;
}

export interface BoardSettingInfoResponse {
  /**
   * @bbsStngSeq: 게시판 설정 시퀀스
   */
  bbsStngSeq: number;
  /**
   * @bbsNm: 게시판명
   */
  bbsNm: string;
  /**
   * @bbsTypeEnu: 유형코드
   */
  bbsTypeEnu: EnumType<"NORMAL" | "LAYER" | "COMMENT" | "GALLERY" | "VIDEO">;
  /**
   * @cmntYn: 댓글여부 YN
   */
  cmntYn: "Y" | "N";
  /**
   * @fileAtchYn: 파일첨부 여부 YN
   */
  fileAtchYn: "Y" | "N";
  /**
   * @fileAtchTypeCd: 파일첨부 유형 코드
   */
  fileAtchTypeCd: string;
  /**
   * @openYn: 공개 여부 YN
   */
  openYn: "Y" | "N";
  /**
   * @topNtcYn: 상단 공지 여부 YN
   */
  topNtcYn: "Y" | "N";
  /**
   * @ntcYn: 공지 여부 YN
   */
  ntcYn: "Y" | "N";
  /**
   * @edtrYn: 편집기 여부 YN
   */
  edtrYn: "Y" | "N";
  /**
   * @useYn: 사용여부 YN
   */
  useYn: "Y" | "N";
}

export interface BoardInfoResponse {
  /**
   * @rowId: 게시글 번호
   */
  rowId: number;
  /**
   * @boardSettingInfoResponse: 게시판 설정
   */
  boardSettingInfoResponse: BoardSettingInfoResponse;
  /**
   * @bbsSeq: 게시판 시퀀스
   */
  bbsSeq: number;
  /**
   * @bbsStngSeq: 게시판 설정 시퀀스
   */
  bbsStngSeq: number;
  /**
   * @rfrncSeq: 참조 시퀀스(부모 게시글 참조 SEQ)
   */
  rfrncSeq: number;
  /**
   * @groupNo: 그룹번호(답변 게시글 그룹)
   */
  groupNo: number;
  /**
   * @orderNo: 정렬번호(답변 게시글 그룹별 순서)
   */
  orderNo: number;
  /**
   * @depthNo: 깊이번호(답변 게시글 댓글레벨)
   */
  depthNo: number;
  /**
   * @ansCnt: 답변_수(자식댓글 수)
   */
  ansCnt: number;
  /**
   * @title: 제목
   */
  title: string;
  /**
   * @content: 내용
   */
  content: string;
  /**
   * @typeCd: 유형코드
   * CAT_LINC : 사업단
   * CAT_HRD : 인력양성
   * CAT_ES : 기업지원
   * CAT_ETC : 기타
   *
   * ELNT_STAFF : 우수교직원
   * ELNT_TECH : 우수기술
   * ELNT_PRACICE : 우수사례
   * ELNT_ETC : 기타
   */
  typeCd: string;

  /**
   *
   */
  tagList: [{ tagType: "BBS_PRIZE_TYPE" | "YEAR_PRIZE"; tagName: string }];
  /**
   * @intqCnt: 조회수
   */
  inqCnt: number;
  /**
   * @userSeq: 사용자 시퀀스
   */
  userSeq: number;
  /**
   * @userNm: 사용자명
   */
  userNm: string;
  /**
   * @userTelno: 사용자 전화번호
   */
  userTelno: string;
  /**
   * @userEmail: 사용자 이메일
   */
  userEmail: string;
  /**
   * @wrtrPswd: 작성자 패스워드(암호화)
   */
  wrtrPswd: string;
  /**
   * @bbsSttsEnu: 게시판 상태 코드
   */
  bbsSttsEnu: EnumType<
    "NONE" | "NOT_RECEIPT" | "RECEIPT" | "PROCESS_ING" | "RECEIPT_END"
  >;
  /**
   * @openYn: 공개 여부 YN
   */
  openYn: "Y" | "N";
  /**
   * @topNtcYn: 상단 공지 여부 YN
   */
  topNtcYn: "Y" | "N";
  /**
   * @ntcYn: 공지 여부 YN
   */
  ntcYn: "Y" | "N";
  /**
   * @delYn: 삭제 여부
   */
  delYn: "Y" | "N";
  /**
   * @regYmd: 등록일자
   */
  regYmd: string;
  /**
   * 관련저널
   */
  fileDtoList: FileDto[];
  /**
   * 바로가기 링크
   */
  url?: string;
}

export interface BoardDetailResponse {
  /**
   * @bbsSeq: 게시판 시퀀스
   */
  bbsSeq: number;
  /**
   * @bbsStngSeq: 게시판 설정 시퀀스
   */
  bbsStngSeq: number;
  /**
   * @rfrncSeq: 참조 시퀀스(부모 게시글 참조 SEQ)
   */
  rfrncSeq: number;
  /**
   * @groupNo: 그룹번호(답변 게시글 그룹)
   */
  groupNo: number;
  /**
   * @orderNo: 정렬번호(답변 게시글 그룹별 순서)
   */
  orderNo: number;
  /**
   * @depthNo: 깊이번호(답변 게시글 댓글레벨)
   */
  depthNo: number;
  /**
   * @ansCnt: 답변_수(자식댓글 수)
   */
  ansCnt: number;
  /**
   * @title: 제목
   */
  title: string;
  /**
   * @content: 내용
   */
  content: string;
  /**
   * @typeCd: 유형코드
   */
  typeCd: string;
  /**
   * @intqCnt: 조회수
   */
  intqCnt: number;
  /**
   * @userSeq: 사용자 시퀀스
   */
  userSeq: number;
  /**
   * @userNm: 사용자명
   */
  userNm: string;
  /**
   * @userTelno: 사용자 전화번호
   */
  userTelno: string;
  /**
   * @userEmail: 사용자 이메일
   */
  userEmail: string;
  /**
   * @wrtrPswd: 작성자 패스워드(암호화)
   */
  wrtrPswd: string;
  /**
   * @bbsSttsEnu: 게시판 상태 코드
   */
  bbsSttsEnu: EnumType<
    "NONE" | "NOT_RECEIPT" | "RECEIPT" | "PROCESS_ING" | "RECEIPT_END"
  >;
  /**
   * @openYn: 공개 여부 YN
   */
  openYn: "Y" | "N";
  /**
   * @topNtcYn: 상단 공지 여부 YN
   */
  topNtcYn: "Y" | "N";
  /**
   * @ntcYn: 공지 여부 YN
   */
  ntcYn: "Y" | "N";
  /**
   * @delYn: 삭제 여부
   */
  delYn: "Y" | "N";
  /**
   * @regYmd: 등록일자
   */
  regYmd: string;
  /**
   * @fileDtoList: 첨부파일 리스트
   */
  fileDtoList: FileDto[];
  /**
   *
   */
  tagList: {
    tagType: string;
    tagName: string;
  }[];
  /**
   * 링크 바로가기
   */
  url?: string;
}

export interface BoardPrevNextInfo {
  /**
   * @bbsSeq: 게시판 시퀀스
   */
  bbsSeq: number;
  /**
   * @title: 제목
   */
  title: string;
}

export interface BoardPrevNextInfoResponse {
  boardPrevInfo: BoardPrevNextInfo;
  boardNextInfo: BoardPrevNextInfo;
}

export interface RegisterBoardCommand {
  /**
   * @bbsStngSeq: 게시판 설정 시퀀스
   */
  bbsStngSeq: number;
  /**
   * @rfrncSeq: 참조 시퀀스(부모 게시글 참조 SEQ
   */
  rfrncSeq?: number;
  /**
   * @title: 제목
   */
  title: string;
  /**
   * @content: 내용
   */
  content?: string;
  /**
   * @typeCd: 유형코드
   */
  typeCd?: string;
  /**
   * @userSeq: 사용자 시퀀스
   */
  userSeq?: number;
  /**
   * @userNm: 사용자명
   */
  userNm: string;
  /**
   * @userTelno: 사용자 전화번호
   */
  userTelno?: string;
  /**
   * @userEmail: 사용자 이메일
   */
  userEmail?: string;
  /**
   * @wrtrPswd: 작성자 패스워드(암호화)
   */
  wrtrPswd?: string;
  /**
   * @openYn: 공개여부
   */
  openYn?: "Y" | "N";
  /**
   * @topNtcYn: 상단 공지 여부
   */
  topNtcYn: "Y" | "N";
  /**
   * @ntcYn: 공지 여부
   */
  ntcYn?: "Y" | "N";
  /**
   * @bbsSttsEnu: 게시판 처리 상태
   */
  bbsSttsEnu?:
    | "NONE"
    | "NOT_RECEIPT"
    | "RECEIPT"
    | "PROCESS_ING"
    | "RECEIPT_END";
  /**
   * @fileList: 첨부파일 리스트
   */
  fileList?: AttachFile[];
  /**
   * thumbnail용 파일 정보
   */
  thumbnailFile?: AttachFile;
  /**
   * 바로가기 링크
   */
  url?: string;
  /**
   *
   */
  tagList?: [
    {
      tagType: string;
      tagName: string;
    },
  ];
}

export interface ModifyBoardCommand {
  /**
   * @bbsSeq: 게시글 시퀀스
   */
  bbsSeq: number;
  /**
   * @title: 제목
   */
  title: string;
  /**
   * @content: 내용
   */
  content?: string;
  /**
   * @typeCd: 유형코드
   */
  typeCd?: string;
  /**
   * @userSeq: 사용자 시퀀스
   */
  userSeq?: number;
  /**
   * @userNm: 사용자명
   */
  userNm: string;
  /**
   * @userTelno: 사용자 전화번호
   */
  userTelno: string;
  /**
   * @userEmail: 사용자 이메일
   */
  userEmail: string;
  /**
   * @wrtrPswd: 작성자 패스워드(암호화)
   */
  wrtrPswd?: string;
  /**
   * @openYn: 공개여부
   */
  openYn?: "Y" | "N";
  /**
   * @topNtcYn: 상단 공지 여부
   */
  topNtcYn?: "Y" | "N";
  /**
   * @ntcYn: 공지 여부
   */
  ntcYn?: "Y" | "N";
  /**
   * @bbsSttsEnu: 게시판 처리 상태
   */
  bbsSttsEnu:
    | "NONE"
    | "NOT_RECEIPT"
    | "RECEIPT"
    | "PROCESS_ING"
    | "RECEIPT_END";
  /**
   * 링크 바로가기
   */
  url?: string;
  /**
   * @fileList: 첨부파일 리스트
   */
  fileList?: AttachFile[];
  /**
   * @deleteFilesSeqs: 파일삭제 시퀀스
   */
  deleteFilesSeqs?: number[];
  /**
   * thumbnail용 파일 정보
   */
  thumbnailFile?: AttachFile;
  /**
   *
   */
  tagList?: {
    // 검색 태그 타입
    tagType: string;
    // 검색 태그명
    tagName: string;
  }[];
}

export interface RegisterBoardCommentCommand {
  /**
   * 게시판 시퀀스
   */
  bbsSeq: number;
  /**
   * 참조 시퀀스
   */
  rfrncSeq?: number;
  /**
   * 댓글내용
   */
  cmntCn?: string;
  /**
   * 사용자 시퀀스
   */
  userSeq: number;
  /**
   * 삭제여부
   */
  delYn?: string;
}
