import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import { I18nProvider } from "@/i18n/context";
import { ThemeProvider } from "@/theme/context";
import "./globals.css";

const gothicA1 = Gothic_A1({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meganmagic.com"),
  title: "Choi Young-Hun | Frontend Developer",
  description: "Portfolio of frontend developer Choi Young-Hun",
  keywords: ["frontend", "frontend developer", "portfolio"],
  alternates: { canonical: "/" },
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
