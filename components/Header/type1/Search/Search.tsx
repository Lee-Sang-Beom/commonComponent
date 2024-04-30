"use client";

import style from "./Search.module.scss";
import { IoClose } from "react-icons/io5";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAutoAlert } from "@/hooks/alert/useAutoAlert";
import AutoAlert from "@/components/AutoAlert/AutoAlert";
import Input from "@/components/Input/Input";

export interface SearchProps {
  stste: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}
export default function Search({ stste, setState }: SearchProps) {
  const { setIsChange, setStatus, setText } = useAutoAlert();
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const router = useRouter();
  return (
    <>
      {stste && <AutoAlert />}
      <div className={`${style.search_bg} ${stste ? style.open : ""}`}>
        <div className={style.search_wrap}>
          <button
            type="button"
            onClick={() => {
              setState(false);
            }}
          >
            <IoClose role={"img"} aria-label={"닫기 아이콘"} />
          </button>
          <div className={style.search_box}>
            <h3>통합검색</h3>
            <div className={style.search_input_box}>
              <Input
                id={"searchKeyWord_pc"}
                value={searchKeyWord}
                onChange={(e) => {
                  setSearchKeyWord(e.currentTarget.value.toString());
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    console.log(searchKeyWord.length);
                    if (!searchKeyWord.length) {
                      setText("검색어를 입력해주세요.");
                      setIsChange(true);
                      setStatus("warning");
                      return;
                    }
                    setState(false);
                    router.push(`/searchtotal?searchWord=${searchKeyWord}`);
                  }
                }}
                inpSize="lg"
                title={""}
                // searchBtnClick={() => {
                //   if (!searchKeyWord.length) {
                //     setText("검색어를 입력해주세요.");
                //     setIsChange(true);
                //     setStatus("warning");
                //     return;
                //   }
                //   setState(false);
                //   router.push(`/searchtotal?searchWord=${searchKeyWord}`);
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
