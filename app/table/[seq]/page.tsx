"use client";

import TableDetail from "@/components/TableDetail/TableDetail";
import style from "./detailPage.module.scss";
import Chip from "@/components/Chip/Chip";

export default function TableDetailPage({
  params,
}: {
  params: { seq: string };
}) {
  return (
    <>
      <div className={style.wrap_box}>
        <TableDetail
          data={{
            title: `제목${params.seq}`,
            content: `${params.seq}번째 게시글 `,
            type: "구분1",
            regDt: "2024-05-20",
            name: "관리자",
          }}
          detailInfo={[
            { name: "구분", value: "type" },
            { name: "작성자", value: "name" },
            { name: "등록일", value: "regDt" },
            { name: "조회수", value: "count" },
          ]}
          detailTitle={`${params.seq}번째 게시글 제목`}
          detailText={`테스트 내용 ${params.seq} <br/> <p><strong>p 태그로 글 쓰기</strong></p>`}
          prevNextData={{
            boardNextInfo: {
              bbsSeq: Number(params.seq) + 1,
              title: "다음글 제목123",
            },
            boardPrevInfo: {
              bbsSeq: Number(params.seq) - 1,
              title: "이전글 제목 4342",
            },
          }}
          fileList={[
            {
              fileSeq: 913,
              fileAtchNo: 0,
              tblPriSeq: 3,
              tblNm: "banner",
              compNm: "popupFile",
              cliFileNm: "btp_pic2 (1) (1) (1) (1) (1).png",
              fileExt: "png",
              fileSize: 378569,
              regDt: "2024-05-20T17:28:10",
              rgtrId: "admin",
              svrFilePath:
                "/home/centos/upload/file_202405200528105090_btp_pic2 (1) (1) (1) (1) (1).png",
              svrFileNm:
                "file_202405200528105090_btp_pic2 (1) (1) (1) (1) (1).png",
            },
            {
              fileSeq: 914,
              fileAtchNo: 0,
              tblPriSeq: 3,
              tblNm: "banner",
              compNm: "popupFile",
              cliFileNm: "btp_pic2 (2) (2).png",
              fileExt: "png",
              fileSize: 428569,
              regDt: "2024-05-20T17:28:10",
              rgtrId: "admin",
              svrFilePath:
                "/home/centos/upload/file_202405200528105090_btp_pic2 (1) (1) (1) (1) (1).png",
              svrFileNm:
                "file_202405200528105090_btp_pic2 (1) (1) (1) (1) (1).png",
            },
          ]}
          boardTypeSeq={0}
          listUrl={"/table"}
          ref={null}
          chip={
            <>
              <Chip
                chipData={{ group: "", name: "진행중", value: "ing" }}
                title={"진행중"}
                color="mainColorBorder"
                chipSize="sm"
              />
              <Chip
                chipData={{ group: "", name: "카테고리1", value: "ing" }}
                title={"카테고리1"}
                color="blackBorder"
                chipSize="sm"
                border="br_round"
              />
            </>
          }
        />
      </div>
    </>
  );
}
