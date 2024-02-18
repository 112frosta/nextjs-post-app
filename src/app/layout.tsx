import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Aplikacja todo w NextJS",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pl">
      <body
        className={twMerge(inter.className, "h-screen text-white bg-slate-900")}
      >
        <div className="container h-full p-5 pb-40 mx-auto">{children}</div>
      </body>
    </html>
  );
}
