"use client"

import React, { useEffect, useState } from 'react'
import prisma from '../lib/prismaClient';
import { User } from '../types/types';

const App = () => {

    const [users, setUsers] = useState([]);
    const [timecards, setTimecards] = useState([])
    // const { supabase } = useSpabase();

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("http://localhost:3000/api/users",{
                cache:'no-store',
            }) 
            
            const usersData:User = await response.json();

        
            console.log(usersData)
        }
        fetchUsers()
    },[])

  return (
    <div>App</div>
  )
}

export default App