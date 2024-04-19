[사용법]

-   ExcelExport 함수의 인자값으로 엑셀로 다운로드할 데이터, 테이블 공통타입 헤더, 다운로드 될 엑셀 파일의 이름을 넘겨줍니다.

1.  추가된 TableHeader 옵션 : excelValue, excelYn

    -   excelValue : accessFn 처럼 데이터 가장 바깥 값이 아닌, 객체 안의 값을 꺼내거나 값을 일정 포맷으로 가공해야할 때 사용하는 함수.
        사용법은 accessFn과 비슷하나, return값은 태그가 아닌 string 값으로 하면 됩니다.

                   - 값을 넣지 않을 경우 header의 value 값으로 값을 찾고, 그 값으로 바로 찾아지지 않으면 빈칸이 됩니다.

    -   excelYn : 해당 Column 값을 엑셀 다운로드 시 포함시킬 것인지 여부입니다. 기본 값은 true로, 빼고 싶은 컬럼 값만 false로 설정하면 됩니다.
        1-1. 그 외 width : 기본적으로 header의 width 값으로 들어가고, 입력하지 않으면 기본 값은 100px로 들어가게 됩니다.

2.  사용 예시 - 전화번호와 같이 포맷을 설정해 엑셀로 출력하고 싶은 컬럼
    {
    name: "휴대전화",
    value: "userTelno",
    width: "130px",
    accessFn: (item: any) => {
    return <span>{item.userTelno?.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3")}</span>;
    },
    **아래 excelValue로 원하는 포맷대로 return**
    excelValue: (item: any) => {
    return item.userTelno?.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
    },
    }

2-2. 사용 예시 - 엑셀 다운로드 시 포함하고 싶지 않은 컬럼
{
name: "선택",
value: "rowId",
width: "5%",
**excelYn: false** < 해당 부분을 false로 설정
accessFn: (row: MemberInfoResponse) => {
return (
<태그></태그>
);
},
},
