"use client";
import FileInput from "@/components/FileInput/FileInput";
import styles from "./FileInputPage.module.scss";
import { useRef } from "react";

export default function FileInputPage() {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    return (
        <>
            <div className={styles.box}>
                <h3>FileInput - inner btn</h3>
                <FileInput
                    multiple
                    ref={input1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xsm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="inner"
                />
                <FileInput
                    multiple
                    ref={input2Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"sm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="inner"
                />
                <FileInput
                    isAvailableDeleteFile={true}
                    multiple
                    ref={input3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    btnType="inner"
                />
                <FileInput
                    multiple
                    ref={input4Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"lg"}
                    compName={""}
                    isAvailableDeleteFile={true}
                    btnType="inner"
                />
                <FileInput
                    multiple
                    ref={input5Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xlg"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="inner"
                />
            </div>
            <div className={styles.box}>
                <h3>FileInput - outer btn</h3>
                <FileInput
                    multiple
                    ref={input1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xsm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="outer"
                />
                <FileInput
                    multiple
                    ref={input2Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"sm"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="outer"
                />
                <FileInput
                    isAvailableDeleteFile={true}
                    multiple
                    ref={input3Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    compName={""}
                    btnType="outer"
                />
                <FileInput
                    multiple
                    ref={input4Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"lg"}
                    compName={""}
                    isAvailableDeleteFile={true}
                    btnType="outer"
                />
                <FileInput
                    multiple
                    ref={input5Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xlg"}
                    compName={""}
                    isAvailableDeleteFile
                    btnType="outer"
                />
            </div>
        </>
    );
}
