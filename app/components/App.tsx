"use client"

import React, { useEffect, useState } from 'react'
import prisma from '../lib/prismaClient';
import { User } from '../types/types';
import { Timecard } from '../types/types';




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

        
            // console.log(usersData)
            return usersData
        }
        fetchUsers()
    },[])

    useEffect( () => {
        const fetchTimecards = async () => {
            const response =  fetch("http://localhost:3000/api/timecard",{
                cache:'no-store',
            }) 
            
            const timecardData:Timecard = await (await response).json();
            return timecardData;
        }
        fetchTimecards()
    },[])

  return (
    <div className=' flex flex-col'>
        <h1 className=' text-4xl bg-green-400 text-slate-50 rounded-md font-bold px-[50px] py-[5px] text-center'>
            タイムカード
        </h1>
        <div className=' flex flex-col mt-[60px] gap-5'>
            <div className=' bg-sky-400 w-[800px] h-[50px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>ボタン</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >状態</div>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>計測値</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >合計時間</div>


            </div>
            {/* <div className=' bg-sky-400 w-[800px] h-[50px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>ボタン</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >状態</div>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>計測値</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >合計時間</div>


            </div>
            <div className=' bg-sky-400 w-[800px] h-[50px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>ボタン</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >状態</div>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>計測値</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >合計時間</div>


            </div> */}
        </div>
    </div>
  )
}

export default App