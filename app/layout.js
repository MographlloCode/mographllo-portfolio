import { Providers } from "@/providers";
import "./globals.css";

export const metadata = {
  title: "Gustavo Mello // Portfolio",
  description: "Gustavo 'Mographllo' Mello is a Brazilian Software Developer, Artist and Problem Solver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className="bg-[#F4E285] dark:bg-[#00171F] w-screen h-screen overflow-y-auto overflow-x-hidden">
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}