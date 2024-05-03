"use client";
import Button from "@/components/Button/Button";
import PagingComponent from "@/components/Paging/Paging";
import Selectbox from "@/components/Selectbox/Selectbox";
import Table, { TableHeader } from "@/components/Table/Table";
import TableTop from "@/components/TableTop/TableTop";
import { SelectChangeEvent } from "@mui/material";
import style from "./TablePage.module.scss";
import { GrDocumentPdf } from "react-icons/gr";
import { RiFileExcel2Line, RiPrinterLine } from "react-icons/ri";
import { useRef } from "react";
import moment from "moment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ExcelExport from "@/hooks/ExcelDownload/ExcelExport";
import { useReactToPrint } from "react-to-print";
import TableBottom from "@/components/TableBottom/TableBottom";
export default function TablePage() {
    const tableRef = useRef<HTMLTableElement>(null);
    const header: TableHeader[] = [
        {
            name: "선택",
            value: "select",
            form: "allCheck",
            width: "5%",
        },
        {
            name: "번호",
            value: "rowId",
            width: "5%",
        },
        {
            name: "제목",
            value: "title",
            accessFn: (row: any) => {
                return <a href={`/table/${row.rowId}`}>{row.title}</a>;
            },
        },
        {
            name: "col2",
            value: "col2",
        },
        {
            name: "col3",
            value: "col3",
        },
    ];
    const data = [
        { rowId: "1", title: "제목1", col2: "값1", col3: "값4" },
        { rowId: "2", title: "제목2", col2: "값2", col3: "값5" },
        { rowId: "3", title: "제목3", col2: "값3", col3: "값6" },
    ];

    // 프린트
    const onPrint = useReactToPrint({
        content: () => tableRef.current,
    });
    return (
        <>
            <div className={style.wrap}>
                {/* 서치박스 넣을 자리 */}
                <TableTop size={true} count={3} countName="게시글">
                    <Button
                        title={"pdf"}
                        id={""}
                        onClickEvent={async () => {
                            if (tableRef.current) {
                                const canvas = await html2canvas(tableRef.current, {
                                    useCORS: true,
                                });
                                const imageFile = canvas.toDataURL("image/png");
                                const doc = new jsPDF("p", "mm", "a4");
                                const pageWidth = doc.internal.pageSize.getWidth() - 20;
                                const pageHeight = doc.internal.pageSize.getHeight();
                                const margin = 10;
                                const position = 10;
                                const widthRatio = pageWidth / canvas.width;
                                const customHeight = canvas.height * widthRatio;
                                doc.addImage(imageFile, "png", margin, position, pageWidth, customHeight - 10);
                                let heightLeft = customHeight;
                                let heightAdd = -pageHeight;
                                while (heightLeft >= pageHeight) {
                                    doc.addPage();
                                    doc.addImage(imageFile, "png", margin, heightAdd, pageWidth, customHeight);
                                    heightLeft -= pageHeight;
                                    heightAdd -= pageHeight;
                                }
                                doc.save(`test_${moment().format("YYYY-MM-DD")}.pdf`);
                            }
                        }}
                    >
                        <GrDocumentPdf role="img" aria-label="pdf 아이콘" />
                        PDF 다운로드
                    </Button>
                    <Button
                        title={"pdf"}
                        id={""}
                        onClickEvent={() => {
                            ExcelExport(data, header, "테이블 엑셀 다운로드");
                        }}
                    >
                        <RiFileExcel2Line role="img" aria-label="엑셀 아이콘" />
                        엑셀 다운로드
                    </Button>
                    <Button
                        title={"pdf"}
                        id={""}
                        onClickEvent={() => {
                            onPrint();
                        }}
                    >
                        <RiPrinterLine role="img" aria-label="프린트 아이콘" />
                        프린트
                    </Button>
                </TableTop>
                <Table
                    trHover
                    data={data}
                    headers={header}
                    tableType={"vertical"}
                    tableCaption={""}
                    itemTitle={""}
                    ref={tableRef}
                />
                <PagingComponent
                    onClickEvent={() => {}}
                    pagingData={{
                        first: false,
                        last: false,
                        size: 10,
                        totalPages: 10,
                        totalElements: 101,
                        number: 0,
                    }}
                />
                <TableBottom>
                    <Button title={"수정"} id={""} onClickEvent={() => {}}>
                        삭제
                    </Button>
                    <Button color="black" title={"수정"} id={""} onClickEvent={() => {}}>
                        저장
                    </Button>
                </TableBottom>
            </div>
        </>
    );
}
