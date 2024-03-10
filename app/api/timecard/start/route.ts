import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(req:NextRequest,res:NextResponse) {
    console.log("POST");
    try {

        const userId = req.body
        console.log(userId)

        // if( userId) {
        // const startedTime = await prisma.timecard.create({
        //     // where : {
        //     //     userId: userId.
        //     // },
        //     data: {
        //         userId:userId,
        //         startedAt: new Date()
        //     },
        // });
    

    //     return NextResponse.json(startedTime);
    // }
    } catch (error) {
        console.log(error)
        return new NextResponse('Error',{status:500})
    }
    }

