import { TableHeader } from "@/components/Table/Table";
import moment from "moment";
import { utils, writeFileXLSX } from "xlsx";

export default function ExcelExport(data: any[], header: TableHeader[], fileName: string) {
    const tempData = data.map((d: any, index: number) => {
        let rowData = {};
        header.map((header: TableHeader, i: number) => {
            if (header.excelYn == true || header.excelYn == undefined) {
                if (header.excelValue) {
                    // @ts-ignore
                    rowData[header.value] = header.excelValue(d, index);
                } else {
                    // @ts-ignore
                    rowData[header.value] = d[header.value] || "";
                }
            } else {
                return;
            }
        });

        return rowData;
    });

    const korHeader = {};
    header.map((h) => {
        if (h.excelYn == undefined || h.excelYn == true) {
            // @ts-ignore
            return (korHeader[h.value] = h.name);
        } else {
            return;
        }
    });
    tempData.unshift(korHeader);

    const xlsxData = utils.json_to_sheet(tempData, {
        skipHeader: true,
    });
    const colsWidth = header.map((he) => {
        return { wpx: Number(he.width) || 100 };
    });
    xlsxData["!cols"] = colsWidth;
    const wb = utils.book_new();
    utils.book_append_sheet(wb, xlsxData, "Data");
    writeFileXLSX(wb, `${fileName}.xlsx`);
}
