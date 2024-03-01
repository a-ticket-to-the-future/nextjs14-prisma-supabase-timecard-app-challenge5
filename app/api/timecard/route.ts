import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const timecard = await prisma.timecard.findMany({
        include: {user:true},
    });

    return NextResponse.json(timecard);
}