import { getServerSession } from 'next-auth'
import { AuthOptions } from '@app/api/auth/[...nextauth]/route'
import prisma from '../lib/prismaClient'

const getCurrentUser = async () => {
    try {

    } catch (error) {
        return null
    }
}


export default getCurrentUser