import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type {Task} from "@prisma/client"

const prisma = new PrismaClient()

export const POST = async (request: Request) => {
    const body: Task = await request.json()
    const task = await prisma.task.create({
        data:{
            name: body.name
        }
    })
    return NextResponse.json(task, {status: 201})
}