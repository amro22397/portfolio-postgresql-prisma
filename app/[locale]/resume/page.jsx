"use client";
import React from "react";

import "./page.css";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

import {
  about,
  experience,
  education,
  skills,
  realProjectsExperience,
} from "../../../public/Constants";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

import { ScrollArea } from "../../../components/ui/scroll-area";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const page = () => {
  const resumePage = useTranslations("ResumePage");

  const pathName = usePathname();
  console.log(pathName.includes("en"));

  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className={`max-h-full mt-16 flex items-center justify-center py-12 xl:py-0
      max-xl:max-w-[90vw] mx-auto max-xl:mt-5`}
    >
      <div
        className={`container mx-auto max-w-[1350px] ${
          pathName.includes("ar") && "rtl-container"
        }`}
      >
        <Tabs
          defaultValue={localStorage.getItem("tab") || "education"}
          className={`flex flex-col xl:flex-row xl:gap-[60px] gap-[90px] xl:mt-20 mt-24
            ${locale === 'ar' && 'xl:mt-20 mt-24'}`}
        > 
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6 text-3xl text-white"
          >
            <TabsTrigger
              value="experience"
              className="tabs-trigger"
              onClick={() => {
                localStorage.setItem("tab", "experience");
              }}
            >
              {resumePage("Experience")}
            </TabsTrigger>

            <TabsTrigger
              value="real-projects-experience"
              className="tabs-trigger"
              onClick={() => {
                localStorage.setItem("tab", "real-projects-experience");
              }}
            >
              {resumePage("Real Projects Experience")}
            </TabsTrigger>

            <TabsTrigger
              value="education"
              className="tabs-trigger"
              onClick={() => {
                localStorage.setItem("tab", "education");
              }}
            >
              {resumePage("Education")}
            </TabsTrigger>

            <TabsTrigger
              value="skills"
              className="tabs-trigger"
              onClick={() => {
                localStorage.setItem("tab", "skills");
              }}
            >
              {resumePage("Skills")}
            </TabsTrigger>

            <TabsTrigger
              value="about"
              className="tabs-trigger"
              onClick={() => {
                localStorage.setItem("tab", "about");
              }}
            >
              {resumePage("About Me")}
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full mt-24 xl:mt-0">
            <TabsContent value="experience" className="w-full">
              {!experience.items && (
                <div className="mt-6 text-center text-xl font-semibold">
                  {resumePage("No work experience")}
                </div>
              )}

              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {pathName.includes("en") && (
                  <h3 className="text-4xl font-bold">
                    {locale === "en" ? experience.title : experience.arTitle}
                  </h3>
                )}

                {pathName.includes("ar") && <></>}

                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.descripiton}
                  </p> */}

                <ScrollArea className="h-[400px]">
                  {experience.items.length > 0 && (
                    <ul className="flex flex-col justify-center items-start gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329]/90
                      dark:bg-neutral-700 py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1 w-full"
                          >
                            <div className="flex flex-row justify-between items-center w-full
                            md:mb-0 mb-1">
                              <p className="text-white/80 text-lg">
                                {item.company}
                              </p>
                              <span className="text-white">
                                {item.duration}
                              </span>
                            </div>


                            <h3
                              className="text-xl
                        text-center lg:text-left mx-4 mt-1 mb-2
                        text-white"
                            >
                              {item.position}
                            </h3>

                            <p className="text-white/60">{item.desc}</p>

                            {item?.link && (
                              <Link
                                href={item?.link}
                                target="_blank"
                                className="bg-blue-700 text-white active:scale-95
                                px-5 py-[3px] mt-4"
                              >
                                Visit the website
                              </Link>
                            )}

                            <div className="flex items-center gap-3">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-gray-700"></span> */}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="real-projects-experience" className="w-full">
              {!realProjectsExperience.items && (
                <div className="mt-6 text-center text-xl font-semibold">
                  {resumePage("No work experience")}
                </div>
              )}

              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {pathName.includes("en") && (
                  <h3 className="text-4xl font-bold">
                    {locale === "en"
                      ? realProjectsExperience.title
                      : realProjectsExperience.arTitle}
                  </h3>
                )}

                {pathName.includes("ar") && <></>}

                <p className="text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                  {locale === "en"
                    ? realProjectsExperience.descripiton
                    : realProjectsExperience.arDescripiton}
                </p>

                <ScrollArea className="h-[400px]">
                  {realProjectsExperience.items.length > 0 && (
                    <ul className="flex flex-col justify-center items-start gap-[30px]">
                      {realProjectsExperience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329]/90
                      dark:bg-neutral-700 py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1 w-full"
                          >
                            <div className="flex flex-row justify-between items-center w-full">
                              {/* <p className="text-white/60 text-lg">{item.project}</p> */}
                              <span className="text-white">
                                {item.duration}
                              </span>
                            </div>
                            <h3
                              className="text-2xl
                        text-center lg:text-left mx-4 mt-1 mb-2
                        text-white"
                            >
                              {item.project}
                            </h3>

                            <p className="text-white/60">{item.desc}</p>

                            <div
                              className="flex flex-wrap gap-4 justify-start mx-6 items-center w-full
                              mt-2 -mb-1"
                            >
                              {item?.features &&
                                item?.features.map((feature, index) => {
                                  return (
                                    <span
                                      className="bg-stone-500 dark:bg-zinc-800 text-white px-4 py-[3px] rounded-full"
                                      key={feature}
                                    >
                                      {feature}
                                    </span>
                                  );
                                })}

                              
                            </div>

                            {item?.link && (
                                <Link
                                  href={item?.link}
                                  target="_blank"
                                  className="bg-blue-700 text-white active:scale-95
                                px-5 py-[3px] mt-4"
                                >
                                  Visit the website
                                </Link>
                              )}

                            <div className="flex items-center gap-3">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-gray-700"></span> */}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              {education.items === 0 && (
                <div className="mt-6 text-center text-xl font-semibold">
                  {resumePage("No Education")}
                </div>
              )}

              <div
                className="flex flex-col gap-[30px] text-center xl:text-left
                max-xl:text-center"
              >
                {pathName.includes("en") && (
                  <h3
                    className="text-4xl font-bold 
                    max-xl:text-center"
                  >
                    {education.title}
                  </h3>
                )}
                {pathName.includes("ar") && (
                  <h3
                    className="text-4xl font-bold 
                    max-xl:text-center"
                  >
                    {education.arTitle}
                  </h3>
                )}

                <p className="max-w-[600px] text-gray-800 dark:text-slate-200 mx-auto xl:mx-0">
                  {pathName.includes("en")
                    ? education.descripiton
                    : education.arDescripiton}
                </p>

                <ScrollArea className="h-[400px] left-to-right">
                  {education.items.length > 0 && (
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329]/90
                      dark:bg-neutral-700
                      py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1"
                          >
                            <span id="item-duration">{item.duration}</span>

                            <h3
                              id="item-name"
                              className="text-xl max-w-[260px]
                        text-center lg:text-left"
                            >
                              {item.degree}
                            </h3>

                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full"></span>

                              <p id="item-company" className="text-white/60">
                                {item.institution}
                              </p>
                            </div>

                            <a
                              href={item.certificateDownload}
                              target="_blank"
                              className="text-red-600 hover:text-white px-2 py-0 mt-2
                        hover:underline cursor-pointer"
                            >
                              {resumePage("Download Certificate")}
                            </a>

                            {item.englishTranslation && (
                              <a
                                href={item.englishTranslation}
                                target="_blank"
                                className="text-red-600 hover:text-white px-2 py-0 mt-2
                          hover:underline cursor-pointer"
                              >
                                {resumePage("Download English Translation")}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {pathName.includes("en") ? skills.title : skills.arTitle}
                  </h3>
                  <p
                    className="max-w-[600px] text-gray-800 dark:text-slate-200 text-md mx-auto xl:mx-0
                font-semibold"
                  >
                    {pathName.includes("en")
                      ? skills.descripiton
                      : skills.arDescripiton}
                  </p>
                </div>
                <ul
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
              lg:grid-cols-5 xl:grid-cols-4
              xl:gap-[30px] mb-20 left-to-right"
                >
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="left-to-right">
                        <TooltipProvider
                          delayDuration={100}
                          className="left-to-right"
                        >
                          <Tooltip className="left-to-right">
                            <TooltipTrigger
                              id="skill-div"
                              className="w-full h-[150px] bg-[#232329]/90 dark:bg-neutral-700
                          rounded-xl flex flex-col justify-center items-center group
                          cursor-auto"
                            >
                              <div
                                id="skill-icon"
                                className="text-6xl transition-all duration-300
                            text-white"
                              >
                                {skill.icon}
                              </div>
                              <p
                                id="skill-text"
                                className="text-md text-white mt-2 font-semibold
                            "
                              >
                                {skill.name}
                              </p>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full xl:mx-20">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {pathName.includes("en") ? about.title : about.arTitle}
                </h3>
                <p className="max-w-[600px] text-gray-800 dark:text-slate-200 mx-auto xl:mx-0">
                  {pathName.includes("en")
                    ? about.descripiton
                    : about.arDescripiton}
                </p>

                <ul
                  className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2
              max-xl:grid-cols-2
              xl:grid-cols-2 gap-y-6 max-w-[620px]
              mx-auto xl:mx-0 mb-20"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center xl:justify-start gap-4
                    border-b border-gray-600 pb-4 mx-2 "
                      >
                        <span className="">
                          {pathName.includes("en")
                            ? item.fieldName
                            : item.arFieldName}
                        </span>
                        <span className={`text-xl`}>
                          {pathName.includes("en")
                            ? item.fieldValue
                            : item.arFieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
