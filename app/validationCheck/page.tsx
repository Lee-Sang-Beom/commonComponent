import ReactFormClient from "./ReactFormClient";

export default function Page() {
  const persistDummyData = {
    data: {
      email: "user01@naver.com",
      name: "테스트유저01",
      phoneNumber: "01012345678",
      regionNumber: "0544221123",
      commonNumber: "01098765432",
      pw: "asdf1234!",
      id: "user01",
      brno: "3227200402",
      createDt: "20240423",
      createDtDetail: "20240423123000",
    },
  };

  return <ReactFormClient data={persistDummyData.data} />;
}
