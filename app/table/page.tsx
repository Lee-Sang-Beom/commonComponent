import Table, { TableHeader } from "@/components/Table/Table";

export default function TablePage() {
    const header: TableHeader[] = [
        {
            name: "num",
            value: "rowId",
        },
        {
            name: "col1",
            value: "col1",
        },
        {
            name: "col2",
            value: "col2",
        },
    ];
    const data = [
        { rowId: "1", col1: "값1", col2: "값2" },
        { rowId: "2", col1: "값2", col2: "값2" },
        { rowId: "3", col1: "값3", col2: "값3" },
    ];
    return (
        <>
            {/* 서치박스 넣을 자리 */}
            <Table data={data} headers={header} tableType={"vertical"} tableCaption={""} itemTitle={""} ref={null} />
        </>
    );
}
