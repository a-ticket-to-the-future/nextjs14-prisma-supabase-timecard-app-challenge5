import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import  prisma  from '@/app/lib/prismaClient'


export async function POST(req: NextApiRequest, res: NextApiResponse) {

    try {

        const currentUser = await getCurrentUser()

        if (currentUser) {
            const endedTime = await prisma.timecard.update({
                where: {id:currentUser.id},
                data: {
                    endedAt: new Date()
                }
            })

            return NextResponse.json(endedTime)
        }

    } catch (error) {
        console.log(error)
        return new NextResponse('Error', {status: 500})
    }
}