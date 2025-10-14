// import mongoose from "mongoose";
// import { Project } from "../../../models/project";

import prisma from "../../../lib/prisma";

export async function PUT(req) {
    // mongoose.connect(process.env.MONGO_URL)

    const {id, ...data} = await req.json();

    // await Project.findByIdAndUpdate(id, data);

    await prisma.project.update({
        where: { id: id },
        data: data
    })
    
    return Response.json(true);
 }