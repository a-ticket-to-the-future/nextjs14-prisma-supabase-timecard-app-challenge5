

import React from 'react'
import getCurrentUser from '../getCurrentUser'
import AuthContext from '@/app/context/AuthContext';
import  prisma  from '@/app/lib/prismaClient'
import axios from 'axios';
import { User } from '@/app/types/types';

const PostStartData = async (currentUser:User) => {
    // const user = await getCurrentUser()
   const res = await axios.post('http://localhost:3000/api/timecard/start',{currentUser})
   console.log(res);
}

export default PostStartData