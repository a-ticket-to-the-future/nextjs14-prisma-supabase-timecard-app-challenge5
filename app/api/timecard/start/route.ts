import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(req:NextRequest,res:NextResponse) {

    try {

        const currentUser = await getCurrentUser();

        const response = await prisma.timecard.update({
            where : {
                id: currentUser.id
            },
            data: {
                startedAt: new Date()
            },
        });

        return NextResponse.json(response);

    } catch (error) {
        console.log(error)
        return new NextResponse('Error',{status:500})
    }

}