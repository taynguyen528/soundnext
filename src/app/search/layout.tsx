import AppFooter from "@/components/footer/app.footer";
import AppHeader from "@/components/header/app.header";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Kết quả tìm kiếm",
    description: "miêu tả layout thôi mà",
};

//
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AppHeader />
            {children}
            <div style={{ marginBottom: "100px" }}></div>
            <AppFooter />
        </>
    );
}
