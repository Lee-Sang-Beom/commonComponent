import ReactFormClient from "./ReactFormClient";

interface IProps {
  data: {
    email: string;
    name: string;
    phoneNumber: string;
    regionNumber: string;
    commonNumber: string;
    pw: string;
    id: string;
    brno: string;
    createDt: string;
    createDtDetail: string | Date;
    createDtDetailString: string;
    cost: number | string;
    memberType: string | null;

    // Default 세팅이 null일 수 있음
    radioSelectType: "ONE" | "TWO" | null;

    // Y, N 말고 서버에서는 NULL로 줄 수도 있음
    smsYn: "Y" | "N" | null;
  };
}

export default function Page() {
  const persistDummyData: IProps = {
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
      createDtDetail: new Date(),
      createDtDetailString: "20240401123059",
      cost: 6500000,
      memberType: "normal",
      radioSelectType: "TWO",
      smsYn: "Y",
    },
  };

  return <ReactFormClient data={persistDummyData.data} />;
}
