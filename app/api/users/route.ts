import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
}