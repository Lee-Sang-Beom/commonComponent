"use client";
import OnelineAlertSlider from "@/components/OnelineAlertSlider/OnelineAlertSlider";
import style from "./slider.module.scss";
import { useRef, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { RiPauseMiniFill, RiPlayMiniFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface BannerType {
    imgUrl: string;
    linkUrl: string;
}

export default function SliderPage() {
    const [isPlay, setIsPlay] = useState<boolean>(true);
    const swiperSlideRef = useRef(null);
    const bannerData: BannerType[] = [
        { imgUrl: "/img/img_banner1.jpg", linkUrl: "/" },
        { imgUrl: "/img/img_banner2.jpg", linkUrl: "" },
        { imgUrl: "/img/img_banner3.jpeg", linkUrl: "https://www.naver.com" },
    ];
    return (
        <div className={style.wrap}>
            <h2>※ 참고 : slick의 경우 같은 페이지에 2개 사용시 클래스가 꼬이는 현상이 발생했었습니다.</h2>
            <br />
            <h3>한줄공지 슬라이더 - swiper</h3>
            <div className={style.alert_bg}>
                <OnelineAlertSlider
                    data={[
                        { link: "/table", name: "테이블 요소로 이동" },
                        { link: "/form", name: "form 요소로 이동" },
                        { link: "/dialog", name: "dialog 로 이동" },
                        { link: "/cssSample", name: "css 샘플 페이지로 이동" },
                    ]}
                />
            </div>
            <br />
            <div className={style.banner_wrap}>
                <div className={style.banner_top}>
                    
                    <p className={style.banner_title}>배너</p>
                    <div className={style.btn_group}>
                        <button type="button" title="이전으로" className="swiper-prev2">
                            <HiOutlineChevronLeft size={24} />
                        </button>
                        {isPlay === true ? (
                            <>
                                {" "}
                                <button
                                    type="button"
                                    title="슬라이드 정지"
                                    onClick={() => {
                                        setIsPlay(false);
                                        if (swiperSlideRef.current) {
                                            // @ts-ignore
                                            swiperSlideRef.current.swiper.autoplay.stop();
                                        }
                                    }}
                                >
                                    <RiPauseMiniFill size={30} />
                                </button>
                            </>
                        ) : (
                            <>
                                {" "}
                                <button
                                    type="button"
                                    title="슬라이드 재생"
                                    onClick={() => {
                                        setIsPlay(true);
                                        if (swiperSlideRef.current) {
                                            // @ts-ignore
                                            swiperSlideRef.current.swiper.autoplay.start();
                                        }
                                    }}
                                >
                                    <RiPlayMiniFill size={30} />
                                </button>
                            </>
                        )}

                        <button type="button" title="다음으로">
                            <HiOutlineChevronRight className="swiper-next2" size={24} />
                        </button>
                    </div>
                </div>
                <Swiper
                    ref={swiperSlideRef}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    centeredSlides={true}
                    observer={true}
                    observeParents={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        prevEl: ".swiper-prev2",
                        nextEl: ".swiper-next2",
                    }}
                >
                    {bannerData && bannerData.length ? (
                        <>
                            {bannerData.map((item: BannerType, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        {/* 등록된 url 이 없으면 그냥 span 태그로 이미지 보여줌 */}
                                        {item.linkUrl === "" ? (
                                            <span className={style.popup_img_box}>
                                                {item.imgUrl ? (
                                                    <img src={item.imgUrl} alt="" />
                                                ) : (
                                                    <img src={"/img/img_no_image.svg"} alt="" />
                                                )}
                                            </span>
                                        ) : (
                                            <a href={item.linkUrl} target="_blank" title="새 창으로 열림">
                                                <span className={style.popup_img_box}>
                                                    <img src={item.imgUrl} alt="" />
                                                </span>
                                            </a>
                                        )}
                                    </SwiperSlide>
                                );
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                </Swiper>
            </div>
        </div>
    );
}
