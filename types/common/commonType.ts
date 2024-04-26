// AutoAlert의 상태타입 지정
export type StatusType = "success" | "warning" | "info" | "error";

// 유효성 검사용도의 타입지정
export interface InputErrorMsgType {
    isSuccess: boolean;
    msg: string;
}

// 파일 타입 예시임 (실제 타입이 아님)
export interface FileType {
    fileMainSeq: number | null;
    workName: string;
    compName: string;
    fileNameCli: string;
    fileExt: string;
    fileSize: number;
    fileNameSvr: string;
    filePathSvr: string;
}

/**
 * 공통 Enum Type
 */
export interface EnumType<T> {
    type: T;
    name: string;
}

/**
 * 공통 Response Type
 */
export interface ApiResponse<T> {
    msg: string;
    code: string;
    data: T;
    description: string;
    detail: string;
}

/**
 * 공통 Table Page Request
 */
export interface TablePageRequest {
    page: number;
    size: number;
    sort?: string;
    orderBy?: "desc" | "asc";
}

/**
 * 공통 Table Page Response
 */
export interface TablePageResponse<T> {
    length: number;
    content: T;
    first: boolean;
    last: boolean;
    number: number;
    size: number;
    totalPages: number;
    totalElements: number;
}

/**
 * 파일 dto
 */
export interface FileDto {
    /**
     * 파일_시퀀스
     */
    fileSeq: number;
    /**
     * 파일첨부번호
     */
    fileAtchNo: number;
    /**
     * 테이블 시퀀스
     */
    tblPriSeq: number;
    /**
     * 테이블명
     */
    tblNm: string;
    /**
     * 컴포넌트명
     */
    compNm: string;
    /**
     * 클라이언트 파일명
     */
    cliFileNm: string;
    /**
     * 확장자
     */
    fileExt: string;
    /**
     * 파일크기
     */
    fileSize: number;
    /**
     * 작성일시
     * ($date - time)
     */
    regDt: string;
    /**
     * 작성자
     */
    rgtrId: string;
    /**
     * 파일이름
     */
    svrFileNm: string;
    /**
     * 파일 경로
     */
    svrFilePath: string;
}

export interface AttachFile {
    /**
     * @cliFileNm: 클라이언트 파일 이름
     */
    cliFileNm: string;
    /**
     * @fileAttachNo: 파일 첨부 번호
     */
    fileAttachNo: number;
}
