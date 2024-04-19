"use client";
import Button from "@/components/Button/Button";
import Table, { TableHeader } from "@/components/Table/Table";
import ExcelExport from "@/hooks/ExcelDownload/ExcelExport";

export default function TablePage() {
    const header: TableHeader[] = [
        { name: "선택", value: "checked", form: "allCheck", excelYn: false },
        {
            name: "이름",
            value: "userNm",
        },
        {
            name: "연락처",
            value: "userTelNo",
            accessFn: (item: any) => {
                return <span>{item.userTelNo.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3")}</span>;
            },
            excelValue: (item: any) => {
                return item.userTelNo.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
            },
        },
        { name: "아이디", value: "userId" },
        { name: "안 나올 헤더", value: "none", excelYn: false },
    ];

    const data = [
        { userNm: "1번유저", userTelNo: "01022224444", userId: "sys4144", none: "엑셀에 안 나올 값" },
        { userNm: "2번유저", userTelNo: "01033335555", userId: "test333", none: "엑셀 미포함 값" },
    ];
    return (
        <>
            <Button
                text={"엑셀 다운로드"}
                id={""}
                onClickEvent={function (): void {
                    ExcelExport(data, header, "test");
                }}
            ></Button>
            <Table<any>
                data={data}
                headers={header}
                tableType={"vertical"}
                tableCaption={""}
                itemTitle={""}
                ref={null}
            />
        </>
    );
}
