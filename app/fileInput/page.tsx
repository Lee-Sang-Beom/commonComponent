"use client";
import styles from "./FileInputPage.module.scss";
import { useRef } from "react";
import FileInputTitle from "@/components/FileInput/FileInputTitle";
import FileInputInner from "@/components/FileInput/FileInputInner";
import FileInputOuter from "@/components/FileInput/FileInputOuter";

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
                <FileInputInner
                    multiple
                    ref={inner1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_2"
                    labelTitle="inner fileInput"
                    isDownload
                />
                <FileInputInner
                    multiple
                    ref={inner2Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"lg"}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_2"
                    labelTitle="inner fileInput2"
                />
                <FileInputInner
                    isAvailableDeleteFile={true}
                    multiple
                    ref={inner3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    border="br_square_round_2"
                    size="xlg"
                    labelTitle="inner fileInput3"
                />
            </div>
            <div className={styles.box}>
                <h3>FileInput - outer btn</h3>
                <FileInputOuter
                    multiple
                    ref={outer1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xsm"}
                    compName={""}
                    isAvailableDeleteFile
                    isDownload
                    border="br_square_round_2"
                    labelTitle="outer fileInput"
                />
                <FileInputOuter
                    multiple
                    ref={outer2Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"sm"}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_2"
                    labelTitle="outer fileInput2"
                />
                <FileInputOuter
                    isAvailableDeleteFile={true}
                    multiple
                    ref={outer3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    border="br_square_round_2"
                    labelTitle="outer fileInput3"
                />
                <FileInputOuter
                    multiple
                    ref={outer4Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"lg"}
                    compName={""}
                    isAvailableDeleteFile={true}
                    border="br_square_round_2"
                    labelTitle="outer fileInput4"
                />
                <FileInputOuter
                    multiple
                    ref={outer5Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xlg"}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_2"
                    labelTitle="outer fileInput5"
                />
            </div>

            <div className={styles.box}>
                <h3>FileInputTitle</h3>
                <FileInputTitle
                    multiple
                    labelTitle="TITLE TEXT"
                    ref={title1Ref}
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
                    ref={title2Ref}
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
                    ref={title3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    border="br_square_round_2"
                />
                <br />
                <FileInputTitle
                    multiple
                    ref={title4Ref}
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
                    ref={title5Ref}
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
