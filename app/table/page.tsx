"use client";
import Table, { TableHeader } from "@/components/Table/Table";

export default function TablePage() {
    const header: TableHeader[] = [
        { name: "선택", value: "checked", form: "allCheck" },
        {
            name: "이름",
            value: "userNm",
        },
    ];

    const data = [{ userNm: "1번유저" }, { userNm: "2번유저" }];
    return (
        <Table<any> data={data} headers={header} tableType={"vertical"} tableCaption={""} itemTitle={""} ref={null} />
    );
}
