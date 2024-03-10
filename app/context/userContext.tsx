// import React, { Children, createContext, useContext, useState } from 'react'
// import getCurrentUser from '../actions/getCurrentUser';
// import { User } from '../types/types';



// const usersContext = createContext({});

// export const useAuth = () => {
//     return useContext(usersContext)
// }

// type userContextProps = {
    
// }

// const userProvider = async ({children}:any) => {

//     const [user, setUser] = useState("");

    
//     const contextUser = await getCurrentUser();
//     if(contextUser){

//         setUser(contextUser.id)
//     }
//   return (
//     <div>
//     <div>userContext</div>


//     <usersContext.Provider value={{user}}>
//         {children}
//     </usersContext.Provider>

//     </div>
//   )
// }

// export default userProvider