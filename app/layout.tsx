import type { Metadata } from "next";
import Script from "next/script";
import { Gothic_A1 } from "next/font/google";
import { I18nProvider } from "@/i18n/context";
import { ThemeProvider } from "@/theme/context";
import "./globals.css";

const gothicA1 = Gothic_A1({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ggnu11.github.io"),
  title: "최영훈 | Frontend Developer",
  description: "프론트엔드 개발자 최영훈 포트폴리오",
  keywords: ["frontend", "프론트엔드", "개발자", "포트폴리오", "최영훈"],
  alternates: { canonical: "/" },
  icons: {
    icon: "/portfolio.svg",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="kr" className="dark">
      <body className={gothicA1.className}>
        <Script
          id="scroll-restore"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `if("scrollRestoration"in history){history.scrollRestoration="manual"}window.scrollTo(0,0);`,
          }}
        />
        <ThemeProvider>
          <I18nProvider>
            {children}
            {modal}
            <div id="modal-root" />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
