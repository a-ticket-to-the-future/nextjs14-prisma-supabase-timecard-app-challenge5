import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "./context/AuthContext";
import Navigation from "./components/navigation/Navigation";
import getCurrentUser from "./actions/getCurrentUser";
import { Toaster } from "react-hot-toast";
import SignupModal from "./components/modals/SignupModal";
import LoginModal from "./components/modals/LoginModal";
import ProfileModal from "./components/modals/ProfileModal";

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
          {/* Toaster */}
          <Toaster />
          {/* モーダル */}
          <SignupModal />
          <LoginModal />
          <ProfileModal currentUser={currentUser} />

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
