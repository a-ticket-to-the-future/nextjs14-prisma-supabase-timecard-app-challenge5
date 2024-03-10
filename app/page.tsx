// "use client"

import Image from "next/image";
import App from "./components/App";
import getCurrentUser from "./actions/getCurrentUser";



export default async function Home() {

  const currentUser = await getCurrentUser()

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
