import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perfect Swing - AI 테니스 스윙 분석",
  description: "AI 기반 테니스 스윙 자세 분석으로 완벽한 스윙을 만들어보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-gray-100`}
      >
        {/* PC에서도 모바일 앱 크기로 보이도록 하는 컨테이너 */}

        <div className="min-h-screen flex justify-center bg-gray-100 py-4">
          <div className="w-full max-w-sm bg-white shadow-2xl relative rounded-3xl overflow-hidden">
            <div className="min-h-screen pb-20 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
