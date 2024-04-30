"use client";

import CustomCKEditor from "@/components/CustomCKEditor/CustomCKEditor";
import { useState } from "react";

export default function CkEditor() {
  const [editData, setEditData] = useState("asdasd");
  return (
    <>
      <CustomCKEditor
        content={editData}
        onContentChange={(value: string) => {
          setEditData(value);
        }}
      />
    </>
  );
}
