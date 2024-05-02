"use client";

import React, { useEffect, useState, useRef } from "react";
import { BiVolumeFull } from "react-icons/bi";
import Style from "./OnelineAlertSlider.module.scss";
import { TiMediaPause, TiMediaPlay } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation, EffectFade, Thumbs, Controller } from "swiper/modules";
import "./OnelineAlertSlider.scss";
import { RiPauseMiniFill, RiPlayMiniFill } from "react-icons/ri";

interface OnelineType {
    name: string;
    link: string;
}

const OnelineAlertSlider = ({ data }: { data: OnelineType[] }) => {
    const [show, setShow] = useState<boolean>(false);
    const [play, setPlay] = useState<boolean>(true);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const sliderRef = useRef<any>(null);
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        afterChange: (current: number) => {
            setCurrentSlide(current);
        },
    };

    useEffect(() => {
        setShow(true);
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            const clonedElements = document.querySelectorAll(".slick-cloned");
            clonedElements.forEach((cloneElement) => {
                const aElement = cloneElement.querySelector("a");
                if (aElement) {
                    aElement.tabIndex = -1;
                }
            });
        }
    }, [currentSlide]);

    // const alert_list = [
    //   {
    //     id: 1,
    //     content:
    //       "비대면 화상면접 : 아직도 직접 면접보러 가세요? 일대일 화상 면접 시스템을 이용해보세요.",
    //   },
    //   {
    //     id: 2,
    //     content:
    //       "구직자 포트폴리오/기업홍보 영상제작 : 쉽고 편리한 영상제작 프로그램으로 영상을 제작해 보세요.",
    //   },
    //   {
    //     id: 3,
    //     content: "지도기반 추천기업 : 내 위치를 중심으로 추천기업을 소개합니다.",
    //   },
    //   {
    //     id: 4,
    //     content: "커리어모자이크 : 조각난 커리어의 퍼즐을 맞춰 드리겠습니다.",
    //   },
    //   { id: 5, content: "경력 스탭업 : AI가 당신의 숨은 경력을 찾아드립니다." },
    // ];

    const oneLineAlertRef = useRef(null);

    return (
        <>
            {data.length ? (
                <div className={Style.swiper_wrap}>
                    <BiVolumeFull size={24} className={Style.alert_icon} role="img" aria-label="공지사항 아이콘" />
                    {play === true ? (
                        <>
                            {" "}
                            <button
                                type="button"
                                title="슬라이드 정지"
                                onClick={() => {
                                    setPlay(false);
                                    if (oneLineAlertRef.current) {
                                        // @ts-ignore
                                        oneLineAlertRef.current.swiper.autoplay.stop();
                                    }
                                }}
                            >
                                <RiPauseMiniFill size={24} color="#fff" />
                            </button>
                        </>
                    ) : (
                        <>
                            {" "}
                            <button
                                type="button"
                                title="슬라이드 재생"
                                onClick={() => {
                                    setPlay(true);
                                    if (oneLineAlertRef.current) {
                                        // @ts-ignore
                                        oneLineAlertRef.current.swiper.autoplay.start();
                                    }
                                }}
                            >
                                <RiPlayMiniFill size={24} color="#fff" />
                            </button>
                        </>
                    )}

                    <Swiper
                        ref={oneLineAlertRef}
                        className="oneLine"
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        centeredSlides={true}
                        observer={true}
                        observeParents={true}
                        direction="vertical"
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".swiper-prev",
                            nextEl: ".swiper-next",
                        }}
                    >
                        {data && data.length ? (
                            <>
                                {data.map((item: OnelineType, index: number) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <a href={item.link} tabIndex={currentSlide === index ? 0 : -1}>
                                                {`${item.name}`}
                                            </a>
                                        </SwiperSlide>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                        {/* <SwiperSlide>
                  <span className={Style.popup_img_box}>
                    <img src="/img/pupup_sample.png" alt="" />
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className={Style.popup_img_box}>
                    <img src="/img/pupup_sample2.png" alt="" />
                  </span>
                </SwiperSlide> */}
                    </Swiper>
                </div>
            ) : (
                <></>
            )}

            {/* {data.length ? (
                <div className={Style.alertslide_wrap}>
                    {data.length !== 0 ? (
                        <BiVolumeFull size={24} className={Style.alert_icon} role="img" aria-label="공지사항 아이콘" />
                    ) : null}
                    {play && data.length !== 0 ? (
                        <button
                            type="button"
                            className={Style.btn_media}
                            title="일시정지"
                            onClick={() => {
                                setPlay(false);
                                sliderRef.current?.slickPause();
                            }}
                        >
                            <TiMediaPause role="img" aria-label="공지사항 슬라이드 정지 아이콘" />
                        </button>
                    ) : data.length !== 0 ? (
                        <button
                            type="button"
                            className={Style.btn_media}
                            title="재생"
                            onClick={() => {
                                setPlay(true);
                                sliderRef.current?.slickPlay();
                            }}
                        >
                            <TiMediaPlay role="img" aria-label="공지사항 슬라이드 시작 아이콘" />
                        </button>
                    ) : null}
                    {show ? (
                        <>
                            <Slider {...settings} ref={sliderRef}>
                               
                                {data.length > 1 ? (
                                    data.map((item, index: number) => {
                                        return (
                                            <span key={index} className={Style.alert_item}>
                                                <a
                                                    href={
                                                        session
                                                            ? `/virtual/cp/carPartList/${item.entInfoSeq}`
                                                            : `/virtual/cp/carComInfor`
                                                    }
                                                    tabIndex={currentSlide === index ? 0 : -1}
                                                >
                                                    {`${item.entNm}의 부품정보가 업데이트되었습니다.`}
                                                </a>
                                            </span>
                                        );
                                    })
                                ) : (
                                    <span className={Style.alert_item}>
                                        {data[0] ? (
                                            <a
                                                href={
                                                    session
                                                        ? `/virtual/cp/carPartList/${data[0].entInfoSeq}`
                                                        : `/virtual/cp/carComInfor`
                                                }
                                            >{`${data[0].entNm}의 부품정보가 업데이트되었습니다.`}</a>
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                )}
                            </Slider>
                        </>
                    ) : null}
                </div>
            ) : (
                <></>
            )} */}
        </>
    );
};

export default OnelineAlertSlider;
