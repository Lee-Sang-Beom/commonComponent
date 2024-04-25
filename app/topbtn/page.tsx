"use client";

import Button from "@/components/Button/Button";
import TopBtn from "@/components/TopBtn/TopBtn";

export default function TopbtnPage() {
  return (
    <>
      <section style={{ height: "200vh" }}></section>
      <TopBtn size="xlg" border="br_square_round_1" position="bottomLeft">
        TOP xlg br_square_round_1
      </TopBtn>
      <TopBtn>기본</TopBtn>
      <TopBtn size="lg" border="br_square_round_2" position="topRgiht">
        TOP lg br_square_round_2
      </TopBtn>
      <TopBtn size="xsm" border="br_round" position="topLeft">
        TOP xsm br_round
      </TopBtn>
    </>
  );
}
