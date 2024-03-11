"use client"

import Image from "next/image";
import App from "./components/App";
import getCurrentUser from "./actions/getCurrentUser";
import { useEffect, useState } from "react";
import { User } from "./types/types";




export default async function Home() {

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  // const currentUser = await getCurrentUser()
  useEffect(()=> {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
    };

    fetchUser()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* // <div className="text-center"> */}

        {currentUser ? <div>
                          <div className=" text-center">認証中</div>
                                <App currentUser={currentUser} />
                          </div> 
                          : <div>未承認</div>}
      
    {/* </div> */}
    </main>
  );
}
