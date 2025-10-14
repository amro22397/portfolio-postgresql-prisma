"use client"

import React from 'react'

import { useParams } from 'next/navigation';
// import { UploadButton } from "../utils/uploadthing";

// import { useSession } from 'next-auth/react'
// import { skills } from '../public/Constants';




import './ProjectForm.css'
// import Image from 'next/image';
// import { set } from 'mongoose';

import ProjectFormForId from '@/app/[locale]/add-project/ProjectFormForId';

// import ReactPlayer from 'react-player'

export type Project = {
  id?: string;
  title?: string,
  description?: string,
  technologies?: string,
  link?: string,
  date?: string,
  category?: string,
  imageUrls?: string[] | any[],
  technologiesArray?: string[] | any[],
  youtubeLink?: string,

}


const ProjectForm = ({/* project, id */ projects, email}: {
  // project?: any,
  // id?: string,
  projects?: Project[] | undefined | any,
  email?: string | null | undefined,
}) => {


  const params = useParams<any>();
  
  
      const id = params.id;
  
      console.log(id);

      // const [jProject, setJProject] = useState<Project | null>(null);

      // useEffect(() => {

      //   if (id) {
          
      //   // setJProject(project);
      //   }
        
      // }, [id]);

      
    
    
  return (
    <ProjectFormForId projects={projects} email={email} id={id} />
  )
}

export default ProjectForm
