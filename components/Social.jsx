'use client'

import Link from "next/link";
import React, { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLocale, useTranslations } from "next-intl";

const socials = [
  { icon: "FaLinkedin", path: "https://www.linkedin.com/in/amro97/" },
  { icon: "FaFacebook", path: "https://www.facebook.com/amro97/" },
  { icon: "FaWhatsapp", path: "http://wa.me/+249995291772" },
  { icon: "FaYoutube", path: "https://www.youtube.com/@AmroAlmutasim/videos" },
  {
    icon: "FaSquareUpwork",
    path: "https://www.upwork.com/freelancers/~01a0eb164053da3046",
  },
  { icon: "FaGithub", path: "https://github.com/amro22397" },
];

const Social = ({ containerStyles, iconStyles }) => {

  const header = useTranslations("Header");
  const locale = useLocale();

  const [isGithubDialogOpen, setIsGithubDialogOpen] = useState(false);

  return (
    <div className={containerStyles}>
      <Link href={socials[0].path} target="_blank">
        <FaLinkedin className={`${iconStyles} text-blue-700 dark:text-white`} />
      </Link>



      <Dialog open={isGithubDialogOpen} onOpenChange={() => setIsGithubDialogOpen(!isGithubDialogOpen)}
        className="dark:text-black right-dir"
        /* dir={`${locale === 'ar' && 'rtl'}`} */>

        <DialogTrigger asChild>
        <Link href={"#"}>
        <FaGithub className={`${iconStyles} text-gray-900 dark:text-white`} />
      </Link>
        </DialogTrigger>


        <DialogContent className="bg-white text-black dark:text-black">
          <DialogHeader>
            <DialogTitle className="text-3xl dark:text-black">
              {header("Are you a job recruiter?")}
            </DialogTitle>
            <DialogDescription className="text-gray-800 dark:text-gray-800 text-lg">
            {header("If you want access")}
              <Link href={`/${locale}/contact`}
              target="_blank"
              className="hover:underline text-indigo-600 active:text-indigo-800 underline-offset-4 mx-1"
              onClick={() => setIsGithubDialogOpen(false)}
              >
              {header("Click Here")}
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      <Link href={socials[1].path} target="_blank">
        <FaFacebook className={`${iconStyles} text-blue-600 dark:text-white`} />
      </Link>

      <Link href={socials[2].path} target="_blank">
        <FaWhatsapp
          className={`${iconStyles} text-green-600 dark:text-white`}
        />
      </Link>

      <Link href={socials[3].path} target="_blank">
        <FaYoutube className={`${iconStyles} text-red-600 dark:text-white`} />
      </Link>

      <Link href={socials[4].path} target="_blank">
        <FaSquareUpwork
          className={`${iconStyles} text-green-600 dark:text-white`}
        />
      </Link>
    </div>
  );
};

export default Social;
