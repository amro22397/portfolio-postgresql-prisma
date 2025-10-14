import React from 'react'
import './page.css'

// import mongoose from 'mongoose';
// import { Project } from '../../../models/project';
// import AddProject from '../../../components/AddProject'
import ProjectFilter from '../../../components/ProjectsFilter'
// import { revalidatePath } from 'next/cache';
import { getSession } from '@/actions/getUser';
import { getLocale } from 'next-intl/server';
import prisma from '@/lib/prisma';



const page = async () => {

    // mongoose.connect(process.env.MONGO_URL as string)

    // const frontEndProjects = await Project.find({category: {$in: ["Frontend"]}}, {}, {sort: {createdAt: -1}})
    // const jfrontEndProjects = JSON.parse(JSON.stringify(frontEndProjects));

    const jfrontEndProjects = await prisma.project.findMany({
      where: { category: "Frontend" },
      orderBy: { createdAt: "desc" }
    })

    // const fullStackProjects = await Project.find({category: {$in: ["Fullstack"]}}, {}, {sort: {createdAt: -1}})
    // const jfullStackProjects = JSON.parse(JSON.stringify(fullStackProjects));

    const jfullStackProjects = await prisma.project.findMany({
      where: { category: "Fullstack" },
      orderBy: { createdAt: "desc" }
    })

    // const allProjects = await Project.find({}, {}, {sort: {createdAt: -1}})
    // const jAllProjects = JSON.parse(JSON.stringify(allProjects));

    const jAllProjects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    })

    console.log(jAllProjects)

    // revalidatePath('/');

    const session = await getSession();
      console.log(session?.user?.email)

      const locale = await getLocale();
  
      

  return (
     
    <div className="container mx-auto overflow-x-hidden">

        
            
                
    {/* <pre>{JSON.stringify(jAllProjects, null, 2)}</pre> */}

    <ProjectFilter allProjects={jAllProjects} frontEndProjects={jfrontEndProjects}
                fullStackProjects={jfullStackProjects} email={session?.user?.email}
                locale={locale}
                 />
        
       




        
    </div>
        
  )
}

export default page
