// import mongoose from "mongoose";
// import { ContactMessage } from "../../../models/ContactMessage";

import prisma from "../../../lib/prisma";

export async function POST(req) {
    // mongoose.connect(process.env.MONGO_URL)
    const body = await req.json();

    // const contactMessage = await ContactMessage.create(body);

    const contactMessage = await prisma.contactMessages.create({
        data: body
    })
    
    return Response.json(contactMessage);

}