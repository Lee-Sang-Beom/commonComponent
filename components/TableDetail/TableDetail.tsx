/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Ref, useEffect, useRef, useState } from "react";
import style from "./TableDetail.module.scss";

import { BiDownload } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { GrFormDown, GrFormNext, GrFormUp } from "react-icons/gr";
import TableBottom from "../TableBottom/TableBottom";
import { BoardPrevNextInfoResponse } from "@/types/board/BoardType";
import { FileDto } from "@/types/common/commonType";
import * as process from "process";
import { HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import PdfViewer from "@/components/PdfViewer/PdfViewer";
import YouTube, { YouTubeProps } from "react-youtube";
import "./editor.scss";
import Button from "../Button/Button";
import DialogComp from "../Dialog/Dialog";

export interface TableDetailHeader {
    /**
     * 실제로 보이는 이름
     */
    name: string;
    /**
     * 실제 데이터의 키값과 매칭 되는 값
     */
    value: string;
    /**
     * 로우 값을 받아서 커스텀 할 수 있는 함수
     */
    accessFn?: Function;
}

interface TableDetailProps<T> {
    /**
     * 데이터: checkbox 사용 시, 항상 data는 rowId property를 들고 있어야 함
     */
    data: T;
    /**
     * 테이블 디테일 제목 밑 정보
     */
    detailInfo: TableDetailHeader[];
    /**
     * table detail 제목 title
     */
    detailTitle: string;
    /**
     * table detail 내용 text
     */
    detailText: any;
    /**
     * 관리자 여부
     */
    admin?: boolean;
    /**
     * 이전글 다음글 데이터
     */
    prevNextData: BoardPrevNextInfoResponse;
    /**
     * 파일 리스트
     */
    fileList?: FileDto[];
    /**
     * 게시판 seq
     */
    boardTypeSeq: number;
    /**
     * 썸네일 파일
     */
    thumbnailFile?: FileDto;
    /**
     * 목록으로 버튼 url
     */
    listUrl: string;
}

const TableDetail = React.forwardRef(
    <
        T extends {
            attachedFiles?: any[];
            bbsStngSeq?: number;
            url: string;
        }
    >(
        {
            data,
            detailInfo,
            detailTitle,
            detailText,
            admin,
            prevNextData,
            fileList,
            boardTypeSeq,
            thumbnailFile,
            listUrl,
        }: TableDetailProps<T>,
        ref: Ref<any>
    ) => {
        const router = useRouter();

        const [showImagePreviewDialog, setShowImagePreviewDialog] = useState<boolean>(false);
        const [showPdfPreviewDialog, setShowPdfPreviewDialog] = useState<boolean>(false);
        const [openFileIndex, setOpenFileIndex] = useState<number>(0);
        const previewBtnRef = useRef<HTMLButtonElement[]>([]);
        const [imgServerNm, setImgServerNm] = useState<string>("");
        const [pdfServerNm, setPdfServerNm] = useState<string>("");

        // 동영상 유투브 ID
        const [youtubeId, setYoutubeId] = useState("");
        useEffect(() => {
            if (data.url) {
                const first = data.url.split("?");
                const result = first[0].split("/");

                setYoutubeId(result[result.length - 1]);
            }
        }, [data]);
        return (
            <>
                <div ref={ref}>
                    <div className={style.table_detail}>
                        {/*  제목 */}
                        <p className={style.title}>{detailTitle}</p>

                        {/* 제목 밑 디테일 정보 */}
                        {detailInfo.find(
                            (
                                info: TableDetailHeader,
                                liIndex: number // @ts-ignore
                            ) =>
                                info.value === "url" ||
                                // @ts-ignore
                                info.value === "link"
                        ) ? (
                            <ul className={`${style.detail_info} ${style.detail_link}`}>
                                {detailInfo.map((info: TableDetailHeader, liIndex: number) => {
                                    if (
                                        // @ts-ignore
                                        info.value === "url" ||
                                        // @ts-ignore
                                        info.value === "link"
                                    ) {
                                        return (
                                            <li key={`detail_table_info_link_${liIndex}`} className={style.link_tag}>
                                                <p>{info.name}</p>
                                                <p>
                                                    <a
                                                        href={
                                                            // @ts-ignore
                                                            data[info.value].includes("http")
                                                                ? // @ts-ignore
                                                                  data[info.value]
                                                                : // @ts-ignore
                                                                  `http://${data[info.value]}`
                                                        }
                                                        target="_blank"
                                                    >
                                                        {info.accessFn
                                                            ? // @ts-ignore
                                                              info.accessFn(data[info.value])
                                                            : // @ts-ignore
                                                            data[info.value]
                                                            ? // @ts-ignore
                                                              data[info.value]
                                                            : "-"}
                                                    </a>
                                                </p>
                                            </li>
                                        );
                                    } else {
                                        return <></>;
                                    }
                                })}
                            </ul>
                        ) : (
                            <></>
                        )}

                        <ul
                            className={`${style.detail_info} ${style.detail_info_bottom} ${
                                style[
                                    "length_" +
                                        detailInfo.filter((lon) => lon.value !== "url" && lon.value !== "link").length
                                ]
                            }`}
                        >
                            {detailInfo.map((info: TableDetailHeader, liIndex: number) => {
                                if (
                                    // @ts-ignore
                                    info.value === "url" ||
                                    // @ts-ignore
                                    info.value === "link"
                                ) {
                                    return <></>;
                                } else {
                                    return (
                                        <li key={`detail_table_info_${liIndex}`}>
                                            <p>{info.name}</p>
                                            <p
                                                className={
                                                    info.name === "등록일" || info.name === "작성일" ? style.date : ""
                                                }
                                            >
                                                {info.accessFn
                                                    ? // @ts-ignore
                                                      info.accessFn(data[info.value])
                                                    : // @ts-ignore
                                                    data[info.value]
                                                    ? // @ts-ignore
                                                      data[info.value]
                                                    : "-"}
                                            </p>
                                        </li>
                                    );
                                }
                            })}
                        </ul>

                        {thumbnailFile ? (
                            <ul className={style.detail_info}>
                                <li>
                                    <p>대표 이미지</p>
                                    <p>
                                        <img
                                            className={style.thumbnail_img_box}
                                            src={
                                                process.env.NEXT_PUBLIC_HOST +
                                                "/utils/files/image/" +
                                                thumbnailFile.svrFileNm
                                            }
                                            alt={`썸네일 이미지`}
                                        />
                                    </p>
                                </li>
                            </ul>
                        ) : (
                            <></>
                        )}

                        {/* 디테일 내용 */}
                        {data.bbsStngSeq === 9 ? (
                            <div className={style.video_box}>
                                <YouTube
                                    videoId={youtubeId}
                                    opts={{
                                        height: "390",
                                        width: "640",
                                        playerVars: {
                                            autoplay: 1,
                                        },
                                    }}
                                    // onReady={onPlayerReady}
                                />
                            </div>
                        ) : (
                            <div
                                // className={`${style.text} ${style.editor_box}`}
                                className={`${style.text} editor_box`}
                                dangerouslySetInnerHTML={{
                                    __html: detailText,
                                }}
                            ></div>
                        )}

                        {/* 첨부파일 */}
                        {fileList !== undefined && fileList.length > 0 ? (
                            <ul className={style.attached_files}>
                                {fileList.map((file: FileDto, fileIndex: number) => {
                                    return (
                                        <li key={`attached_file_${fileIndex}`}>
                                            <p>{`첨부 ${fileIndex + 1}`}</p>
                                            <span className={style.btn_file_down}>{file.cliFileNm}</span>
                                            <div className={style.pc_btn}>
                                                <Button
                                                    id="download"
                                                    title={"다운로드 버튼"}
                                                    onClickEvent={() => {
                                                        fetch(
                                                            process.env.NEXT_PUBLIC_HOST +
                                                                "/utils/files/download/" +
                                                                file.svrFileNm,
                                                            {
                                                                method: "GET",
                                                            }
                                                        )
                                                            .then((res) => {
                                                                return res.blob();
                                                            })
                                                            .then((blob) => {
                                                                const url = window.URL.createObjectURL(blob);
                                                                const a = document.createElement("a");
                                                                a.href = url;
                                                                a.download = file.cliFileNm;
                                                                document.body.appendChild(a);
                                                                a.click();
                                                                setTimeout((_: any) => {
                                                                    window.URL.revokeObjectURL(url);
                                                                }, 60000);
                                                                a.remove();
                                                            });
                                                    }}
                                                >
                                                    <BiDownload role="img" aria-label="다운로드 아이콘" />
                                                    다운로드
                                                </Button>
                                                {file.fileExt === "jpg" ||
                                                file.fileExt === "jpeg" ||
                                                file.fileExt === "png" ||
                                                file.fileExt === "gif" ? (
                                                    <Button
                                                        id="previewBtn"
                                                        title={"내용보기 버튼"}
                                                        ref={(ref) => {
                                                            if (
                                                                ref &&
                                                                !previewBtnRef.current.find(
                                                                    (item: HTMLButtonElement) => item === ref
                                                                )
                                                            ) {
                                                                previewBtnRef.current.push(ref);
                                                            }
                                                        }}
                                                        onClickEvent={() => {
                                                            setImgServerNm(file.svrFileNm);
                                                            setOpenFileIndex(fileIndex);
                                                            setShowImagePreviewDialog(true);
                                                        }}
                                                    >
                                                        <GrDocumentPdf role="img" aria-label="pdf 아이콘" />
                                                        내용보기
                                                    </Button>
                                                ) : file.fileExt === "pdf" ? (
                                                    <Button
                                                        id="previewBtn2"
                                                        title={"내용보기 버튼"}
                                                        ref={(ref) => {
                                                            if (
                                                                ref &&
                                                                !previewBtnRef.current.find(
                                                                    (item: HTMLButtonElement) => item === ref
                                                                )
                                                            ) {
                                                                previewBtnRef.current.push(ref);
                                                            }
                                                        }}
                                                        onClickEvent={() => {
                                                            setPdfServerNm(file.svrFileNm);
                                                            setOpenFileIndex(fileIndex);
                                                            setShowPdfPreviewDialog(true);
                                                        }}
                                                    >
                                                        <GrDocumentPdf role="img" aria-label="pdf 아이콘" />
                                                        내용보기
                                                    </Button>
                                                ) : (
                                                    <div className={"screen_out"}>
                                                        <Button
                                                            id="previewBtn3"
                                                            title={"내용보기 버튼"}
                                                            onClickEvent={() => {}}
                                                            ref={(ref) => {
                                                                if (
                                                                    ref &&
                                                                    !previewBtnRef.current.find(
                                                                        (item: HTMLButtonElement) => item === ref
                                                                    )
                                                                ) {
                                                                    previewBtnRef.current.push(ref);
                                                                }
                                                            }}
                                                        >
                                                            <GrDocumentPdf role="img" aria-label="pdf 아이콘" />
                                                            내용보기
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>

                                            <div className={style.mo_btn}>
                                                <button
                                                    type="button"
                                                    title={"다운로드 버튼"}
                                                    onClick={() => {
                                                        fetch(
                                                            process.env.NEXT_PUBLIC_HOST +
                                                                "/bapi/common/files/download/" +
                                                                file.svrFileNm,
                                                            {
                                                                method: "GET",
                                                            }
                                                        )
                                                            .then((res) => {
                                                                return res.blob();
                                                            })
                                                            .then((blob) => {
                                                                const url = window.URL.createObjectURL(blob);
                                                                const a = document.createElement("a");
                                                                a.href = url;
                                                                a.download = file.cliFileNm;
                                                                document.body.appendChild(a);
                                                                a.click();
                                                                setTimeout((_: any) => {
                                                                    window.URL.revokeObjectURL(url);
                                                                }, 60000);
                                                                a.remove();
                                                            });
                                                    }}
                                                >
                                                    <BiDownload role="img" aria-label="다운로드 아이콘" />
                                                </button>
                                                <button type="button" title={"내용보기 버튼"}>
                                                    <GrDocumentPdf role="img" aria-label="pdf 아이콘" />
                                                </button>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : null}
                    </div>

                    {/* 목록 버튼 */}
                    <TableBottom>
                        {admin && admin === true ? (
                            <>
                                {/* <Button
                  title={"수정"}
                  btnColor={"blue"}
                  btnSize={"lg"}
                  btnStyle={"br_5"}
                  onClick={() => {
                    router.back();
                  }}
                >
                  수정
                </Button>
                <Button
                  title={"삭제"}
                  btnColor={"white"}
                  btnSize={"lg"}
                  btnStyle={"br_5"}
                  onClick={() => {
                    router.back();
                  }}
                >
                  삭제
                </Button> */}
                            </>
                        ) : (
                            <Button
                                title={"목록"}
                                id="go_list_btn"
                                onClickEvent={() => {
                                    router.replace(listUrl);
                                    router.refresh();
                                    // if (commonBoard) {
                                    //   router.push(`/board?type=${boardTypeSeq}`);
                                    // } else {
                                    //   router.back();
                                    // }
                                }}
                            >
                                목록
                            </Button>
                        )}
                    </TableBottom>

                    {/* 이전글 다음글 */}
                    <ul className={style.prev_next_cont}>
                        <li>
                            {prevNextData?.boardPrevInfo ? (
                                <>
                                    <Link
                                        href={`/board/${prevNextData.boardPrevInfo.bbsSeq}?type=${boardTypeSeq}`}
                                        prefetch={false}
                                    >
                                        이전글
                                        <GrFormUp role="img" aria-label="위로 화살표 아이콘" />
                                    </Link>
                                    <Link
                                        href={`/board/${prevNextData.boardPrevInfo.bbsSeq}?type=${boardTypeSeq}`}
                                        prefetch={false}
                                        style={{
                                            borderLeft: "1px solid var(--gray-500)",
                                            width: "auto",
                                        }}
                                    >
                                        {prevNextData.boardPrevInfo.title}
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <a>
                                        이전글
                                        <GrFormUp role="img" aria-label="위로 화살표 아이콘" />
                                    </a>
                                    <p>이전글이 없습니다.</p>
                                </>
                            )}
                        </li>
                        <li>
                            {prevNextData?.boardNextInfo ? (
                                <>
                                    <Link href={`/board/${prevNextData.boardNextInfo.bbsSeq}?type=${boardTypeSeq}`}>
                                        다음글
                                        <GrFormDown role="img" aria-label="위로 화살표 아이콘" />
                                    </Link>
                                    <Link
                                        href={`/board/${prevNextData.boardNextInfo.bbsSeq}?type=${boardTypeSeq}`}
                                        prefetch={false}
                                        style={{
                                            borderLeft: "1px solid var(--gray-500)",
                                            width: "auto",
                                        }}
                                    >
                                        {prevNextData.boardNextInfo.title}
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <a>
                                        다음글
                                        <GrFormDown role="img" aria-label="위로 화살표 아이콘" />
                                    </a>
                                    <p>다음글이 없습니다.</p>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
                <DialogComp
                    open={showImagePreviewDialog}
                    setOpen={setShowImagePreviewDialog}
                    title={"내용보기"}
                    closeFocusRef={previewBtnRef.current[openFileIndex]}
                >
                    <Image
                        src={process.env.NEXT_PUBLIC_HOST + "/utils/files/image/" + imgServerNm}
                        alt="미리보기 이미지"
                        width={"300"}
                        height={"400"}
                        style={{
                            height: "auto",
                        }}
                    />
                </DialogComp>
                <DialogComp
                    open={showPdfPreviewDialog}
                    setOpen={setShowPdfPreviewDialog}
                    title={"내용보기"}
                    closeFocusRef={previewBtnRef.current[openFileIndex]}
                >
                    <PdfViewer serverFileNm={pdfServerNm} />
                </DialogComp>
            </>
        );
    }
);

TableDetail.displayName = "TableDetail";
export default TableDetail as <T extends {}>(props: TableDetailProps<T> & { ref: Ref<HTMLDivElement> }) => JSX.Element;
