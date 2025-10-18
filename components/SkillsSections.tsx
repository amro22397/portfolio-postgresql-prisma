'use client'

import { skills } from '@/public/Constants';
import { useLocale } from 'next-intl';
import React from 'react'

const SkillsSections = ({ title, skillsArray }: {
    title: string | null | undefined,
    skillsArray: any,
}) => {

    const locale = useLocale();
  return (
    <section className="flex flex-col items-start justify-center w-full
    max-md:items-center">

                <div className={`text-white text-left mb-[11.70px] font-sans font-semibold
                text-[16.5px] tracking-wider max-md:mb-5 
                ${title === "Frontend >" ? "bg-blue-500" : "bg-yellow-600"}
                ${locale === "ar" ? "py-[0.65px] px-3" : "py-[0.2px] px-2"}`}
                
                >
                  {title}
                </div>

                <div className={`grid md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-5 2xl:grid-cols-7 lg:gap-y-8 
               grid-cols-3 gap-2 xl:gap-y-4 text-4xl
              text-gray-800 mb-8 gap-y-4 w-full `} >
              {skillsArray.map((skill: any, index: number) => (
                <div key={index}
                className={`flex flex-col items-center
                hover:transform hover:scale-105 hover:text-gray-900
                dark:text-slate-100 dark:hover:text-slate-200 w-full
                gap-1`}>

                <span className="">{skill.icon}</span>
                <span className={`text-sm font-semibold
                text-black dark:text-white text-center flex items-center justify-center
                text-[15px] ${locale === 'ar' && 'text-[16px]'}`}
                style={{fontFamily: "Arial, Helvetica, sans-serif"}}>{skill.name}</span>

                </div>

              ))}
              </div>


              </section>
  )
}

export default SkillsSections