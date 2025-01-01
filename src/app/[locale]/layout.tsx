import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {ReactNode} from "react";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import {getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import {PosTaggerProvider} from "@/context/pos-tagger-context";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "ARAPT",
    description: "A  web interface for a deep learning model for Arabic POS tagging",
};

export default async function LocaleLayout({ children, params: {locale}}: { children: ReactNode; params: {locale: string}; }) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html lang="en">
        <head>
            <title>ARAPT</title>
            <meta name="apple-mobile-web-app-title" content="ARAPT"/>
        </head>

        <NextIntlClientProvider messages={messages}>
            <body
                style={{direction: locale === "ar" ? "rtl" : "ltr"}}
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <PosTaggerProvider>
                    {children}
                </PosTaggerProvider>
            </ThemeProvider>
            </body>
        </NextIntlClientProvider>
        </html>
    )
        ;
}
