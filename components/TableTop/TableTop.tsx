"use client";

import React, { ReactNode, useEffect } from "react";
import style from "./TableTop.module.scss";

import { usePathname, useRouter } from "next/navigation";

import { makeUrlQuery } from "@/utils/utils";
import Selectbox, { SelectboxType } from "../Selectbox/Selectbox";

interface TableTopProps {
    count?: number | null;
    countName?: string;
    title?: string;
    children?: React.ReactNode;
    size: boolean;
    galleryYn?: boolean;
    queryInstance?: any;
}
/**
 * @param count : 테이블 건수 (count만 쓰면 안 나옴)
 * @param size : 컨텐츠 갯수
 * @param countName : 테이블 건수 이름
 * @param title : 테이블 제목
 * @param children : 테이블 제목 - button 넣으면 자동 css
 * @param galleryYn : 갤러리형 size
 */

const sortItem: SelectboxType[] = [
    { name: "10개씩", value: "10", group: "" },
    { name: "20개씩", value: "20", group: "" },
    { name: "30개씩", value: "30", group: "" },
    { name: "50개씩", value: "50", group: "" },
    { name: "100개씩", value: "100", group: "" },
];
const sortItemGallery: SelectboxType[] = [
    { name: "8개씩", value: "8", group: "" },
    { name: "16개씩", value: "16", group: "" },
    { name: "20개씩", value: "20", group: "" },
    { name: "40개씩", value: "40", group: "" },
    { name: "60개씩", value: "60", group: "" },
];

export default function TableTop({
    count,
    size,
    countName,
    title,
    children,
    galleryYn,
    queryInstance,
    ...props
}: TableTopProps) {
    //
    const path = usePathname();
    const router = useRouter();

    return (
        <div className={style.tb_top}>
            <div className={style.title_box}>
                {title ? <p className={style.title}>{title}</p> : ""}

                {countName || countName === "" ? (
                    <p className={style.count}>
                        {countName} <span>{count === null ? "0" : count}</span> 건
                    </p>
                ) : (
                    ""
                )}
            </div>

            <div className={`${style.btn_box} ${path?.includes("/portalCms") ? style.cms : ""}`}>
                {children}
                {size ? (
                    <div className={style.select_box}>
                        <Selectbox
                            title="개수"
                            items={galleryYn === true ? sortItemGallery : sortItem}
                            value={
                                queryInstance
                                    ? String(queryInstance.size)
                                    : galleryYn === true
                                    ? sortItemGallery[0].value.toString()
                                    : sortItem[0].value.toString()
                            }
                            // size={path?.includes("/portalCms") ? "lg" : "sm"}

                            onChange={(value) => {
                                if (queryInstance) {
                                    router.push(
                                        `${path}?${makeUrlQuery({
                                            ...queryInstance,
                                            size: value,
                                            page: 0,
                                        })}`
                                    );
                                }
                            }}
                            {...props}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
