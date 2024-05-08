"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { FileDto } from "@/types/common/commonType";
import { FiXCircle, FiXSquare } from "react-icons/fi";
import Button from "@/components/Button/Button";
import style from "./FileInputInner.module.scss";

interface FileInputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * @id : 웹 접근성. Element를 구별하기위한 유일 식별자
   */
  id: string;

  /**
   * @labelTitle : Label에 들어갈 이름. 이름이 있다면 전달하고 없으면 전달하지 않는다. (ex: 아이디, 비밀번호 등등)
   */
  labelTitle: string;

  /**
   * @labelClassName : Label에 부여할 className (input에 전달할 className은 기본 className props로 전달)
   * 일자리 포털의 screenout 클래스와 같이, label에 전달해야 할 별도 className이 필요하다면 전달
   */
  labelClassName?: string;

  /**
   * @onlyImage : 파일 관리를 이미지만으로 한정하는가를 결정하는 boolean 값
   */
  onlyImage?: boolean;

  // /**
  //  * @onlyPdf : 파일 관리를 pdf만으로 한정하는가를 결정하는 boolean 값
  //  */
  // onlyPdf?: boolean;

  /**
   * 파일 관리
   */
  only?: "pdf" | "excel";

  /**
   * @onFile : FileInput 컴포넌트를 호출하는 측에 있는 위치에서 fileData를 관리할 수 있도록 지원하는 함수
   */
  onFile: (file: FileList) => void;

  /**
   * @onDelete : FileInput 컴포넌트를 호출하는 측에 있는 위치에서 삭제할 서버의 fileData의 seq를 관리할 수 있도록 지원하는 함수
   */
  onDelete: (fileSeqList: number[]) => void;

  /**
   * @multiple : 하나의 파일만을 등록하는지, 여러개의 파일을 등록하는지를 결정하는 boolean 값
   */
  multiple?: boolean;

  /**
   * @isAvailableDeleteFile : 파일을 삭제할 수 있는 기능을 제공하는가를 결정하는 booelan값
   */
  isAvailableDeleteFile?: boolean;

  /**
   * @size :  "lg" | "xlg" , 넣지 않으면 기본 md로 적용
   */
  size?: "lg" | "xlg";

  /**
   * @hideRegisterBtn: 파일등록 버튼 숨김 여부
   */
  hideRegisterBtn?: boolean;

  updateFile?: FileDto[];
  compName: string;
  /**
   * 수정화면에서도 파일을 다운로드 받을 수 있어야 해서 추가 11.30
   */
  isDownload?: boolean;
  disabled?: boolean;
  /**
   * @border border 타입을 넣어주면 사이즈에 맞는 border 자동 적용
   */
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
}

// 2023-10-06 local Data 관리만 넣어놓음.
// 서버에 저장된 파일을 관리하는 것은 차후 개발해 나가야함
const FileInputInner = React.forwardRef(
  (
    {
      id,
      labelTitle,
      className,
      labelClassName,
      onlyImage,
      only,
      onFile,
      onDelete,
      multiple,
      isAvailableDeleteFile,
      updateFile,
      compName,
      size,
      hideRegisterBtn,
      isDownload,
      disabled,
      border,
      ...props
    }: FileInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [files, setFiles] = useState<FileList>();
    const [existFiles, setExistFiles] = useState<FileDto[] | undefined>([]);
    const [deleteFiles, setDeleteFiles] = useState<number[]>([]);

    useEffect(() => {
      if (updateFile) {
        // @ts-ignore
        setExistFiles(() => {
          return updateFile.filter((file) => file?.compNm === compName);
        });
      }
    }, [updateFile, compName]);

    const handleButtonClick = () => {
      // @ts-ignore
      if (ref !== null && ref.current !== null) {
        // @ts-ignore
        ref.current.click();
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      // inputText 초기화
      if (!multiple) {
        setFiles(undefined);
      }

      const fileList = e.target.files;

      if (fileList) {
        for (let i = 0; i < fileList.length; i++) {
          const file = fileList[i];

          if (file === undefined) return;
          if (file.size > 10 * 1024 * 1024) {
            e.target.value = "";
            return alert("파일 크기를 확인해 주세요");
            // getByteSize(1024); // 1KB
            // getByteSize(1024 ** 2); // 1MB
            // getByteSize(1024 ** 3); // 1GB
            // getByteSize(1024 ** 4); // 1TB
          }

          // 파일명 중복체크
          if (existFiles && existFiles.some((e) => e.cliFileNm == file.name)) {
            e.target.value = "";
            return alert("중복되는 파일명이 있습니다.");
          }

          if (files) {
            for (let i = 0; i < files.length; i++) {
              if (files[i].name == file.name) {
                e.target.value = "";
                return alert("중복되는 파일명이 있습니다.");
              }
            }
          }
          var allowedExtensions =
            /(\.jpg|\.jpeg|\.png|\.gif|\.hwp|\.pdf|\.zip|\.ppt|\.pptx|\.doc|\.xls|\.xlsx)$/i;

          if (onlyImage === true) {
            allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
          }

          if (only === "pdf") {
            allowedExtensions = /(\.pdf)$/i;
          } else if (only === "excel") {
            allowedExtensions = /(\.xls|\.xlsx)$/i;
          }

          if (!allowedExtensions.exec(file.name)) {
            e.target.value = "";
            alert("파일 유형을 확인해 주세요");
            // setText("파일 유형을 확인해주세요.");
            // setIsChange(true);
            // setStatus("error");
            return false;
          }
        }

        if (!multiple) {
          setFiles(fileList);
        } else {
          if (files !== undefined) {
            const dataTranster = new DataTransfer();

            for (let i = 0; i < files.length; i++) {
              const old = files[i];
              dataTranster.items.add(old);
            }

            for (let i = 0; i < fileList.length; i++) {
              const old = fileList[i];
              dataTranster.items.add(old);
            }

            setFiles(dataTranster.files);
          } else {
            setFiles(fileList);
          }
        }
      }
    };

    const deleteFile = (index: number) => {
      setFiles((files) => {
        const dt = new DataTransfer();
        if (files !== undefined) {
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (index !== i) {
              dt.items.add(file);
            }
          }
        }

        return dt.files;
      });
    };

    const deleteSeqFile = (fileMainSeq: number) => {
      setExistFiles((existFiles) => {
        if (existFiles !== undefined) {
          let files: any[] = [];
          for (let i = 0; i < existFiles.length; i++) {
            if (fileMainSeq !== existFiles[i].fileSeq) {
              files.push(existFiles[i]);
            }
          }
          return files;
        }
      });
      setDeleteFiles((deleteFiles) => {
        return [...deleteFiles, fileMainSeq];
      });
    };

    useEffect(() => {
      if (files !== undefined) {
        onFile(files);
      }
    }, [files]);

    useEffect(() => {
      onDelete(deleteFiles);
    }, [deleteFiles]);

    return (
      <>
        {/**
         * input과 분리된 Label 영역
         * htmlFor에 전달되는 id, labelClassName, labelTitle props를 사용
         */}
        <label
          htmlFor={id}
          className={
            labelClassName ? labelClassName + " screen_out" : "screen_out"
          }
        >
          {labelTitle ? labelTitle : ""}
        </label>

        {/* input 태그로 사용되는 영역: Radix theme에서 제공하는 input은 file을 사용하기에 적합하지 않아 기본 HTML Input으로 사용 */}
        <input
          type="file"
          style={{ display: "none" }}
          id={id}
          ref={ref !== null ? ref : null}
          className={
            className
              ? `${style.file_input} ${className}`
              : `${style.file_input}`
          }
          multiple={multiple ? multiple : false}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        {/* 파일목록을 출력하는 영역 */}
        <div
          className={`${style.files_box} ${size ? style[size] : style.md} ${
            border ? style[border] : ""
          }`}
        >
          {(files === undefined || files.length === 0) &&
          (existFiles === undefined || existFiles.length === 0) ? (
            // 서버에 있는 파일 + 로컬에 있는 파일 둘 다 아무것도 없으면?
            <span>등록된 파일이 없습니다.</span>
          ) : (
            <ul>
              {/* 1. 서버에서 관리되는 파일이 아닌, 로컬에서 관리되는 파일 출력 */}
              {files &&
                Array.from(files).map((file, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        display: "inline-flex",
                        marginRight: "10px",
                      }}
                    >
                      {file.name}
                      {isAvailableDeleteFile && (
                        <button
                          title="삭제"
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        >
                          <FiXSquare
                            style={{ cursor: "pointer", marginLeft: "5px" }}
                            onClick={() => {
                              deleteFile(index);
                            }}
                            size={16}
                            role="img"
                            aria-label="삭제 아이콘"
                          />
                        </button>
                      )}
                    </li>
                  );
                })}

              {/* 2. 서버에서 관리되는 파일 출력 */}
              {existFiles?.map((file, index) => {
                return (
                  <li
                    key={file.fileSeq}
                    style={{
                      display: "inline",
                      marginRight: "10px",
                    }}
                  >
                    {file.cliFileNm}
                    {isAvailableDeleteFile && (
                      <button
                        title="삭제"
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        <FiXSquare
                          style={{ cursor: "pointer", marginLeft: "5px" }}
                          size={16}
                          onClick={() => {
                            deleteSeqFile(file.fileSeq as number);
                          }}
                          role="img"
                          aria-label="삭제 아이콘"
                        />
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
          <div className={style.btn_box}>
            {!isDownload ? null : (
              <Button
                color="mainColorBorder"
                onClickEvent={() => {
                  if (existFiles && existFiles.length) {
                    existFiles?.map((file: FileDto, i: number) => {
                      fetch(
                        process.env.NEXT_PUBLIC_HOST +
                          "/utils/files/download/" +
                          file.svrFileNm,
                        {
                          method: "GET",
                        }
                      )
                        .then((res) => {
                          return res.blob();
                        })
                        .then((blob) => {
                          const url = window.URL.createObjectURL(blob);
                          const a = document.createElement("a");
                          a.href = url;
                          a.download = file.cliFileNm;
                          document.body.appendChild(a);
                          a.click();
                          setTimeout((_: any) => {
                            window.URL.revokeObjectURL(url);
                          }, 60000);
                          a.remove();
                        });
                    });
                  }
                }}
                title="파일찾기: 새 창으로 열림"
                id="btn"
                size={size == "lg" ? "sm" : size == "xlg" ? undefined : "xsm"}
                border={border}
              >
                다운로드
              </Button>
            )}
            {hideRegisterBtn ? null : (
              <Button
                onClickEvent={handleButtonClick}
                title="파일찾기: 새 창으로 열림"
                id="file_btn"
                color="mainColor"
                size={size == "lg" ? "sm" : size == "xlg" ? undefined : "xsm"}
                border={border}
              >
                파일찾기
              </Button>
            )}
          </div>
        </div>
      </>
    );
  }
);
FileInputInner.displayName = "FileInputInner";
export default FileInputInner;
