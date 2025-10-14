// import { Project } from "../../../models/project.js";
// import mongoose from "mongoose";

import prisma from "../../../lib/prisma.ts"

export async function POST(req) {
    // mongoose.connect(process.env.MONGO_URL)
    const body = await req.json();

    // const project = await Project.create(body);

    const project = await prisma.project.create({
        data: body
    })

    return Response.json(project);

}