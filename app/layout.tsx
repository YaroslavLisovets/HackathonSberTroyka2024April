import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Хакатон 2024",
    description: "",
    icons:"./logo.svg",


};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex">
            <Navbar/>
            <div className={"container"}>
                <div className={"welcome"}>
                    {children}
                </div>
            </div>
        </div>
        </body>
        </html>
);
}
