import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import style from "./page.module.scss";
import localFont from "next/font/local";
import RecoilRootProvider from "@/provider/RecoilProvider";
import AutoAlert from "@/components/AutoAlert/AutoAlert";

const pretendard = localFont({
    src: [
        {
            path: "../fonts/Pretendard/Pretendard-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/Pretendard/Pretendard-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Pretendard/Pretendard-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Pretendard/Pretendard-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-pretendard",
    display: "fallback",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${pretendard.variable}`}>
                <RecoilRootProvider>
                    <div className={style.menu}>
                        <a href="/validationCheck" title="table">
                            React-Hook-Form
                        </a>
                        <a href="/form" title="form요소">
                            form요소
                        </a>
                        <a href="/fileInput" title="file input">
                            file input
                        </a>
                        <a href="/table" title="table">
                            table요소
                        </a>
                        <a href="/ckEditor" title="ck editor">
                            ck editor
                        </a>

                        <a href="/dialog" title="dialog">
                            dialog
                        </a>
                        <a href="/alertDialog" title="alert dialog">
                            alert dialog
                        </a>
                        <a href="/autoAlert" title="auto alert">
                            auto alert
                        </a>
                        <a href="/loadingDialog" title="loading dialog">
                            loading dialog
                        </a>
                        <a href="/sitemap" title="sitemap">
                            sitemap
                        </a>
                        <a href="/header" title="header">
                            header
                        </a>
                        <a href="/tab" title="tab">
                            tab
                        </a>
                        <a href="/topbtn" title="top btn">
                            top btn
                        </a>
                        <a href="/scrollAni" title="scroll ani">
                            scroll ani Sample
                        </a>
                        <a href="/cssSample" title="css Sample">
                            css Sample
                        </a>
                        <a href="/aniSample" title="ani Sample">
                            ani Sample
                        </a>
                    </div>
                    {children}
                    <AutoAlert />
                </RecoilRootProvider>
            </body>
        </html>
    );
}
