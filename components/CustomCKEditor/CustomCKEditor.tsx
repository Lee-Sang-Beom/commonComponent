"use client";

import "./Editor.scss";
import React, { useRef } from "react";

import * as process from "process";
import FormData from "form-data";
import axios from "axios";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface CustomCKEditorProps {
  /**
   * @content: 내용 state 값
   */
  content: string;
  /**
   * @onContentChange: 내용이 바뀔 때마다 실행되는 콜백함수
   */
  onContentChange: (value: string) => void;
}

const CustomCKEditor = ({ content, onContentChange }: CustomCKEditorProps) => {
  const customUploadAdapter = (loader: any) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const data = new FormData();
          loader.file.then((file: any) => {
            data.append("file", file);
            axios
              .post(
                process.env.NEXT_PUBLIC_HOST + "/utils/files/upload",
                data,
                {
                  headers: {
                    "Content-Type":
                      "multipart/form-data; boundary=" +
                      "------" +
                      Math.random().toString(36).substring(2),
                  },
                }
              )
              .then((res) => {
                const { data } = res;
                if (data.error) {
                  reject(data.error);
                } else {
                  resolve({
                    default: data.url,
                  });
                }
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
      abort: () => {},
    };
  };

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return customUploadAdapter(loader);
    };
  }

  return (
    <>
      <CKEditor
        editor={Editor}
        data={content}
        onChange={(e, editor) => {
          //@ts-ignore
          const value = editor.getData();
          onContentChange(value);
        }}
        config={{
          // upload img 관리
          extraPlugins: [uploadPlugin],
          // toolbar 관리 func 제거
          removePlugins: ["Table"],

          // oembed -> iframe으로 링크 영상이 출력되게끔 구성
          //@ts-ignore
          mediaEmbed: {
            previewsInData: true,
          },
        }}
      />
    </>
  );
};

export default CustomCKEditor;
