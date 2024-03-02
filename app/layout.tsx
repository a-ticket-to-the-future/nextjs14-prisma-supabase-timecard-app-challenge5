import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextjs14-prisma-supabase-timecard-app-challenge",
  description: "nextjs14-prisma-supabase-timecard-app-challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
        <main>
          {children}
        </main>
        </AuthContext>
      </body>
    </html>
  );
}
