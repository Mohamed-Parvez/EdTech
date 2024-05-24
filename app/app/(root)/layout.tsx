import type { Metadata } from "next";
import "../../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Learning App",
  description: "Programming languages learning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
