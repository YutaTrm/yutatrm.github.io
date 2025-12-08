import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gotoAndPlay | Web・アプリ開発",
  description:
    "ITの知識がなくても大丈夫。Webサイト・アプリの制作から運用まで、まるっとおまかせください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
