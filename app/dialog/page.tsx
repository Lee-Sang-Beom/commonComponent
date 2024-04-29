"use client";

import style from "./dialogPage.module.scss";
import Button from "@/components/Button/Button";
import DialogComp from "@/components/Dialog/Dialog";
import Textarea from "@/components/Textarea/Textarea";
import { useAutoAlert } from "@/hooks/alert/useAutoAlert";
import { useState } from "react";

export default function DialogPage() {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const [open4, setOpen4] = useState<boolean>(false);

  const { setIsChange, setStatus, setText } = useAutoAlert();

  const [del, setDel] = useState<boolean>(false);
  const [reject, setReject] = useState<boolean>(false);

  return (
    <>
      <div className={style.box}>
        <h3>기본 다이얼로그</h3>
        <div className={style.inner}>
          <Button
            title={""}
            id={""}
            onClickEvent={() => {
              setOpen1(true);
            }}
          >
            열어
          </Button>

          <DialogComp
            open={open1}
            setOpen={setOpen1}
            title={"기본"}
            botton={
              <Button
                title={""}
                id={""}
                onClickEvent={() => {
                  setOpen1(false);
                }}
              >
                확인
              </Button>
            }
          >
            <p>
              국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
              국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 대통령의
              국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계
              국무위원이 부서한다. 군사에 관한 것도 또한 같다. 원장은 국회의
              동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에
              한하여 중임할 수 있다. 국회는 정부의 동의없이 정부가 제출한
              지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 국가는
              청원에 대하여 심사할 의무를 진다. 비상계엄이 선포된 때에는 법률이
              정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나
              법원의 권한에 관하여 특별한 조치를 할 수 있다.
            </p>
            <br />
            <br />
            <br />
            <p>
              국가원로자문회의의 의장은 직전대통령이 된다. 다만, 직전대통령이
              없을 때에는 대통령이 지명한다. 신체장애자 및 질병·노령 기타의
              사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의
              보호를 받는다. 중앙선거관리위원회는 대통령이 임명하는 3인,
              국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로
              구성한다. 위원장은 위원중에서 호선한다. 모든 국민은 직업선택의
              자유를 가진다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로
              하며, 법률이 정하는 바에 의하여 연임할 수 있다. 통신·방송의
              시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로
              정한다.
            </p>
            <br />
            <br />
            <br />
            <p>
              모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와
              국민은 환경보전을 위하여 노력하여야 한다. 대법원장과 대법관이 아닌
              법관은 대법관회의의 동의를 얻어 대법원장이 임명한다. 제2항의
              재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는
              자를 임명한다. 모든 국민은 법 앞에 평등하다. 누구든지 성별·종교
              또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든
              영역에 있어서 차별을 받지 아니한다. 법률이 정하는 주요방위산업체에
              종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를
              제한하거나 인정하지 아니할 수 있다. 대통령의 임기는 5년으로 하며,
              중임할 수 없다.
            </p>
            <br />
            <br />
            <br />
            <p>
              대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적
              통일 정책을 수립하고 이를 추진한다. 농업생산성의 제고와 농지의
              합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의
              임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다. 국회는
              국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.
              대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서
              병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할
              필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수
              있다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며,
              국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할
              수 있다.
            </p>
            <br />
            <br />
            <br />
            <p>
              모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는
              교육을 받게 할 의무를 진다. 대한민국은 국제평화의 유지에 노력하고
              침략적 전쟁을 부인한다. 모든 국민은 신체의 자유를 가진다. 누구든지
              법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지
              아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분
              또는 강제노역을 받지 아니한다. 정기회의 회기는 100일을, 임시회의
              회기는 30일을 초과할 수 없다. 명령·규칙 또는 처분이 헌법이나
              법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를
              최종적으로 심사할 권한을 가진다. 대통령후보자가 1인일 때에는 그
              득표수가 선거권자 총수의 3분의 1 이상이 아니면 대통령으로 당선될
              수 없다.
            </p>
            <br />
            <br />
            <br />
            <p>
              모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을
              박탈당하지 아니한다. 이 헌법시행 당시에 이 헌법에 의하여 새로
              설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에
              의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다.
              대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다.
              대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을
              집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다.
              국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.
              대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를
              요구할 수 없다.
            </p>
            <br />
            <br />
            <br />
            <p>
              국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한
              조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나
              국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한
              조약의 체결·비준에 대한 동의권을 가진다. 헌법개정안은 국회가
              의결한 후 30일 이내에 국민투표에 붙여 국회의원선거권자 과반수의
              투표와 투표자 과반수의 찬성을 얻어야 한다. 평화통일정책의 수립에
              관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수
              있다. 법률은 특별한 규정이 없는 한 공포한 날로부터 20일을
              경과함으로써 효력을 발생한다. 군인은 현역을 면한 후가 아니면
              국무위원으로 임명될 수 없다.
            </p>
            <br />
            <br />
            <br />
            <p>
              국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이 있거나
              의장이 국가의 안전보장을 위하여 필요하다고 인정할 때에는 공개하지
              아니할 수 있다. 대통령은 국가의 원수이며, 외국에 대하여 국가를
              대표한다. 정부는 회계연도마다 예산안을 편성하여 회계연도 개시
              90일전까지 국회에 제출하고, 국회는 회계연도 개시 30일전까지 이를
              의결하여야 한다. 모든 국민은 법률이 정하는 바에 의하여 선거권을
              가진다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과
              국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여
              대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히
              선서합니다.
            </p>
            <br />
            <br />
            <br />
            <p>
              국회의원은 법률이 정하는 직을 겸할 수 없다. 국회는 법률에 저촉되지
              아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.
              국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이
              공포한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이
              된다. 법률안에 이의가 있을 때에는 대통령은 제1항의 기간내에
              이의서를 붙여 국회로 환부하고, 그 재의를 요구할 수 있다. 국회의
              폐회중에도 또한 같다. 국회는 의원의 자격을 심사하며, 의원을 징계할
              수 있다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한
              때에는 대통령은 이를 해제하여야 한다. 헌법재판소의 장은 국회의
              동의를 얻어 재판관중에서 대통령이 임명한다.
            </p>
            <br />
            <br />
            <br />
            <p>
              대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에
              있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여
              긴급한 조치가 필요하고 국회의 집회를 기다릴 여유가 없을 때에
              한하여 최소한으로 필요한 재정·경제상의 처분을 하거나 이에 관하여
              법률의 효력을 가지는 명령을 발할 수 있다. 국교는 인정되지
              아니하며, 종교와 정치는 분리된다. 국가는 재해를 예방하고 그
              위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 환경권의
              내용과 행사에 관하여는 법률로 정한다. 민주평화통일자문회의의
              조직·직무범위 기타 필요한 사항은 법률로 정한다. 국무총리는
              대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를
              통할한다.
            </p>
          </DialogComp>
          <Button
            title={""}
            id={""}
            onClickEvent={() => {
              setOpen2(true);
            }}
          >
            열어
          </Button>

          <DialogComp
            width="xs"
            open={open2}
            setOpen={setOpen2}
            title={"xs"}
            botton={
              <Button
                title={""}
                id={""}
                onClickEvent={() => {
                  setOpen2(false);
                }}
              >
                확인
              </Button>
            }
          >
            <p>
              국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
            </p>
          </DialogComp>
        </div>
      </div>

      <div className={style.box}>
        <h3>다이얼로그 + 오토알럿</h3>
        <div className={style.inner}>
          <Button
            title={""}
            id={""}
            onClickEvent={() => {
              setOpen3(true);
            }}
          >
            열어
          </Button>

          <DialogComp
            width="xl"
            open={open3}
            setOpen={setOpen3}
            title={"xl"}
            botton={
              <>
                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setText("신청서를 첨부해주세요.");
                    setStatus("error");
                    setIsChange(true);
                  }}
                >
                  등록
                </Button>

                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setText("확인되었습니다.");
                    setStatus("success");
                    setIsChange(true);
                  }}
                >
                  확인
                </Button>
              </>
            }
          >
            <p>
              국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
              국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 대통령의
              국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계
              국무위원이 부서한다. 군사에 관한 것도 또한 같다. 원장은 국회의
              동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에
              한하여 중임할 수 있다. 국회는 정부의 동의없이 정부가 제출한
              지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 국가는
              청원에 대하여 심사할 의무를 진다. 비상계엄이 선포된 때에는 법률이
              정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나
              법원의 권한에 관하여 특별한 조치를 할 수 있다.
            </p>
          </DialogComp>
        </div>
      </div>

      <div className={style.box}>
        <h3>알럿 다이얼로그</h3>
        <div className={style.inner}>
          <Button
            title={""}
            id={""}
            onClickEvent={() => {
              setOpen4(true);
            }}
          >
            열어
          </Button>

          <DialogComp
            width="xl"
            open={open4}
            setOpen={setOpen4}
            title={"xl"}
            botton={
              <>
                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setDel(true);
                  }}
                >
                  삭제
                </Button>

                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setReject(true);
                  }}
                >
                  반려
                </Button>
              </>
            }
          >
            <p>
              국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
              국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 대통령의
              국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계
              국무위원이 부서한다. 군사에 관한 것도 또한 같다. 원장은 국회의
              동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에
              한하여 중임할 수 있다. 국회는 정부의 동의없이 정부가 제출한
              지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 국가는
              청원에 대하여 심사할 의무를 진다. 비상계엄이 선포된 때에는 법률이
              정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나
              법원의 권한에 관하여 특별한 조치를 할 수 있다.
            </p>
          </DialogComp>

          <DialogComp
            width="sm"
            open={del}
            setOpen={setDel}
            title={"삭제"}
            type="alert"
            botton={
              <>
                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setText("삭제되었습니다.");
                    setStatus("success");
                    setIsChange(true);
                    setDel(false);
                    setOpen4(false);
                  }}
                >
                  삭제
                </Button>
                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setDel(false);
                  }}
                >
                  취소
                </Button>
              </>
            }
          >
            <p>삭제 하시겠습니까?</p>
          </DialogComp>

          <DialogComp
            width="lg"
            open={reject}
            setOpen={setReject}
            title={"반려"}
            type="alert"
            botton={
              <>
                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setText("반려되었습니다.");
                    setStatus("success");
                    setIsChange(true);
                    setReject(false);
                    setOpen4(false);
                  }}
                  size="xsm"
                  color="mainColor"
                >
                  반려
                </Button>
                <Button
                  title={""}
                  id={""}
                  onClickEvent={() => {
                    setReject(false);
                  }}
                  size="xsm"
                >
                  취소
                </Button>
              </>
            }
          >
            <p>반려 사유를 입력해주세요.</p>
            <Textarea title={"asd"} />
          </DialogComp>
        </div>
      </div>
    </>
  );
}
