import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "./context/AuthContext";
import Navigation from "./components/navigation/Navigation";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextjs14-prisma-supabase-timecard-app-challenge",
  description: "nextjs14-prisma-supabase-timecard-app-challenge",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <div className=" flex min-h-screen flex-col">
            <Navigation currentUser={currentUser} />
              <main>
                {children}
              </main>
                  <footer className='py-5'>
                    <div className='text-center text-sm'>
                      nextjs14-prisma-supabase-timecard-app-challenge
                    </div>
                  </footer>
            </div>
        </AuthContext>
      </body>
    </html>
  );
}
