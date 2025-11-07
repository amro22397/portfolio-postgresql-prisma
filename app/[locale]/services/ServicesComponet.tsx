"use client";

import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

// import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

interface Feature {
  heading: string;
  arHeading?: string;
  description: string;
  arDescription?: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  arTitle?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
}

const Feature43 = ({
  title = "What skills and services that I can offer",
  arTitle = "ما المهارات والخدمات التي يمكنني توفيرها",
  features = [
    {
      heading: "Build Full Authentication",
      arHeading: "بناء جميع فورمات تسجيل الدخول",
      description:
        "I can build full authentication for your app, including: login - register - forgot password - reset password - verify email - sign in with google and many checks and validations for username, password and email.",
      arDescription:
        "أستطيع بناء authentication كامل في تطبيقك : تسجيل الدخول - تسجيل الحساب - إسترجاع كلمة السر - تأكيد البريد الإلكتروني - تسجيل الدخول عن طريق قوقل والعديد من التحققات والفنكشنس من أجل اسم المستخدم وكلمة السر والبريد الإلكتروني.",
      icon: <GitPullRequest className="size-6" />,
    },
    {
      heading: "Forms and upload images, videos and files",
      arHeading: "الفورمات ورفع الصور والفيديوهات والملفات",
      description:
        "I can build forms with different kind of inputs, including text, email, password, number, checkbox, radio, select, textarea. And make your app can upload images, videos, files and multiple photos and files.",
      arDescription:
        "أستطيع بناء فورمات فيها العديد من أنواع المدخلات مثل النصوص، البريد الإلكتروني، كلمات السر، الأرقام، checkboxes، الإختيار من متعدد، select، ومساحة لنص. وأستطيع جعل تطبيقك يرفع الصور، الفيديوهات، الملفات، وأكثر من ملف أو صورة في نفس الوقت.",
      icon: <SquareKanban className="size-6" />,
    },

    {
      heading: "Design and send email functions",
      arHeading: "تصميم وإرسال رسائل البريد الإلكتروني",
      description:
        "I can design emails using react-email library to send them to users by pressing a button or making the app sending them in a specific time using SMTP from email providers and nodemailer library.",
      arDescription:
      "أستطيع تصميم رسائل البريد الإلكتروني عن طريق مكتبة react-email لإرسالهم للمستخدمين عند ضغط زر معين أو جعل التطبيق يرسلهم في وقت معين بإستخدام SMTP من خدمات بريد إلكتروني ومكتبة nodemailer.",
        icon: <Layers className="size-6" />,
    },

    {
      heading: "Switch light and dark mode",
      arHeading: "التغيير بين الوضع النهاري والوضع الليلي في التطبيق",
      description: "I can make the app can switch between light and dark mode.",
      arDescription: "أستطيع جعل التطبيق يستطيع التغيير بين الوضع النهاري والوضع الليلي.",
      icon: <RadioTower className="size-6" />,
    },
    {
      heading: "Multiple languages website with next-intl",
      arHeading: "تطبيق متعدد اللغات عن طريق مكتبة next-intl",
      description:
        "I can make the app support multiple languages like arabic, english and others with next-intl i18n library.",
      arDescription:
        "أستطيع جعل التطبيق يدعم عدد من اللغات مثل العربية والإنجليزية وأخرى عن طريق مكتبة next-intl i18n.",
      icon: <WandSparkles className="size-6" />,
    },
    
    
  ],
  //   buttonText = "More Features",
  //   buttonUrl = "https://shadcnblocks.com",
}: Feature43Props) => {
  const locale = useLocale();

  return (
    <section className="py-32">
      <div className="container flex flex-col items-center justify-center w-full">
        {title && (
          <div className="mb-16 text-center
          md:mx-0 mx-5">
            <h2 className="text-pretty lg:text-5xl text-4xl font-medium">
              {locale === "en" && title}
              {locale === "ar" && arTitle}
            </h2>
          </div>
        )}
        <div className="grid gap-x-32 gap-y-20 lg:grid-cols-3 md:grid-cols-2 my-14
        xl:mx-0 mx-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col gap-[17px] bg-black/75 dark:bg-stone-700 text-white
            shadow-lg mb-3 transform hover:scale-[1.01] transition-all duration-300 ease-in-out
            p-5 rounded-xl"
            >
              {/* <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full">
                {feature.icon}
              </div> */}
              <h3 className="mb-2 text-2xl font-semibold text-center">
                {locale === "en" && feature.heading}
                {locale === "ar" && feature.arHeading}
              </h3>
              <p className="text-muted-foreground text-center text-[17px]">
                {locale === "en" && feature.description}
                {locale === "ar" && feature.arDescription}
              </p>
            </div>
          ))}
        </div>

        {/* {buttonUrl && (
          <div className="mt-16 flex justify-center">
            <Button size="lg" asChild>
              <a href={buttonUrl}>{buttonText}</a>
            </Button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export { Feature43 };
