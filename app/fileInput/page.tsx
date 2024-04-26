"use client";
import FileInput from "@/components/FileInput/FileInput";
import styles from "./FileInputPage.module.scss";
import { useRef } from "react";
import FileInputTitle from "@/components/FileInput/FileInputTitle";

export default function FileInputPage() {
    const inner1Ref = useRef(null);
    const inner2Ref = useRef(null);
    const inner3Ref = useRef(null);
    const inner4Ref = useRef(null);
    const inner5Ref = useRef(null);

    const outer1Ref = useRef(null);
    const outer2Ref = useRef(null);
    const outer3Ref = useRef(null);
    const outer4Ref = useRef(null);
    const outer5Ref = useRef(null);

    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const title3Ref = useRef(null);
    const title4Ref = useRef(null);
    const title5Ref = useRef(null);

    return (
        <>
            <div className={styles.box}>
                <h3>FileInput - inner btn</h3>
                <FileInput
                    multiple
                    ref={inner1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xsm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="inner"
                    border="br_square_round_2"
                    isDownload
                />
                <FileInput
                    multiple
                    ref={inner2Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"sm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="inner"
                    border="br_square_round_2"
                />
                <FileInput
                    isAvailableDeleteFile={true}
                    multiple
                    ref={inner3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    btnType="inner"
                    border="br_square_round_2"
                />
            </div>
            <div className={styles.box}>
                <h3>FileInput - outer btn</h3>
                <FileInput
                    multiple
                    ref={outer1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xsm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="outer"
                    border="br_square_round_2"
                />
                <FileInput
                    multiple
                    ref={outer2Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"sm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="outer"
                    border="br_square_round_2"
                />
                <FileInput
                    isAvailableDeleteFile={true}
                    multiple
                    ref={outer3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    btnType="outer"
                    border="br_square_round_2"
                />
                <FileInput
                    multiple
                    ref={outer4Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"lg"}
                    compName={""}
                    isAvailableDeleteFile={true}
                    btnType="outer"
                    border="br_square_round_2"
                />
                <FileInput
                    multiple
                    ref={outer5Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xlg"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="outer"
                    border="br_square_round_2"
                />
            </div>

            <div className={styles.box}>
                <h3>FileInputTitle</h3>
                <FileInputTitle
                    multiple
                    labelTitle="TITLE TEXT"
                    ref={outer1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xsm"}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_2"
                    isDownload
                />
                <br />
                <FileInputTitle
                    multiple
                    ref={outer2Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"sm"}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_2"
                />
                <br />
                <FileInputTitle
                    isAvailableDeleteFile={true}
                    multiple
                    ref={outer3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    border="br_square_round_2"
                />
                <br />
                <FileInputTitle
                    multiple
                    ref={outer4Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"lg"}
                    compName={""}
                    isAvailableDeleteFile={true}
                    border="br_square_round_2"
                />
                <br />
                <FileInputTitle
                    multiple
                    ref={outer5Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xlg"}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_2"
                />
            </div>
        </>
    );
}
