// import mongoose from "mongoose";
// import { Project } from "../../../models/project";

import prisma from "../../../lib/prisma";

export async function GET(req) {
    // mongoose.connect(process.env.MONGO_URL)
    const url = new URL(req.url);
    const id = url.searchParams.get('_id');

    // const project = await Project.findOne({_id: id})

    const project = await prisma.project.findUnique({
        where: { id: id },
    })
    
    return Response.json(project);
 }