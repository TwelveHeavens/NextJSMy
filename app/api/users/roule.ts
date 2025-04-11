import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.users_set.findMany();
    return NextResponse.json(users);
}