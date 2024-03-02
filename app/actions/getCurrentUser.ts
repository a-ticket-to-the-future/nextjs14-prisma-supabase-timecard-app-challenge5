import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import prisma from '../lib/prismaClient'

const getCurrentUser = async () => {
    try {

    } catch (error) {
        return null
    }
}


export default getCurrentUser