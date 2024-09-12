import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "./Providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "React Query Hook",
  description: "A custom hook for easier query and mutation using React query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
