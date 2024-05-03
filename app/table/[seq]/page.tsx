"use client";

import TableDetail from "@/components/TableDetail/TableDetail";
import style from "./detailPage.module.scss";

export default function TableDetailPage({ params }: { params: { seq: string } }) {
    console.log(params.seq);
    return (
        <>
            <div className={style.wrap_box}>
                <TableDetail
                    data={{ title: `제목${params.seq}`, content: `${params.seq}번째 게시글` }}
                    detailInfo={[
                        { name: "구분", value: "type" },
                        { name: "작성자", value: "name" },
                        { name: "등록일", value: "regDt" },
                        { name: "조회수", value: "count" },
                    ]}
                    detailTitle={`${params.seq}번째 게시글 제목`}
                    detailText={`테스트 내용 ${params.seq}`}
                    prevNextData={{
                        boardNextInfo: { bbsSeq: Number(params.seq) + 1, title: "다음글" },
                        boardPrevInfo: { bbsSeq: Number(params.seq) - 1, title: "이전글" },
                    }}
                    boardTypeSeq={0}
                    listUrl={"/table"}
                    ref={null}
                />
            </div>
        </>
    );
}
