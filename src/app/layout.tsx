import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

/**const roboto = Roboto({
  subsets: ["latin"], weight:["400","500","600","700","800"]
});**/
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto', // key part
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${roboto.variable} ${montserrat.variable} font-montserrat antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-darkTheme-text`}
      >
        {children}
      </body>
    </html>
  );
}
