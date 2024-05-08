import NonReactFormClient from "./NonReactFormClient";

interface IProps {
  pw: string;
  id: string;
}

export default function Page() {
  const persistDummyData: IProps = {
    pw: "asdf1234!",
    id: "user01",
  };

  return <NonReactFormClient data={persistDummyData} />;
}
