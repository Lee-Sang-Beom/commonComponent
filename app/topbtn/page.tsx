"use client";

import Button from "@/components/Button/Button";

export default function TopbtnPage() {
  return (
    <>
      <section style={{ height: "200vh" }}></section>
      <div style={{ position: "fixed", left: "1rem", top: "1rem" }}>
        <Button
          id={"topBtn"}
          onClickEvent={() => {}}
          type="top"
          size="xlg"
          border="br_round"
          btnStyle={{ aspectRatio: "1 / 1" }}
        >
          TOP xlg br_square_round_1
        </Button>
      </div>
      <div style={{ position: "fixed", right: "1rem", top: "1rem" }}>
        <Button
          id={"topBtn"}
          onClickEvent={() => {}}
          type="top"
          size="lg"
          color="black"
          border={"br_square_round_2"}
        >
          TOP lg black br_square_round_2
        </Button>
      </div>
      <div style={{ position: "fixed", left: "1rem", bottom: "1rem" }}>
        <Button
          id={"topBtn"}
          onClickEvent={() => {}}
          type="top"
          size="xsm"
          color="mainColor"
          border={"br_square_round_1"}
        >
          TOP xsm mainColor br_round
        </Button>
      </div>
      <div style={{ position: "fixed", right: "1rem", bottom: "1rem" }}>
        <Button id={"topBtn"} onClickEvent={() => {}} type="top" color={"none"}>
          TOP none
        </Button>
      </div>
    </>
  );
}
