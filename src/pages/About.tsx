import { useAppSelector } from "@/store";
import { skills, experiences } from "../shared/constants/index.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Cta } from "@/components/Cta.js";
import { Suspense } from "react";
import { Loader } from "@/shared/components/Loader.js";

export const About = () => {
  const { theme } = useAppSelector((state) => state.folioDetail);
  return (
    <section className="max-container">
      <h2 className="text-[25px] font-semibold">
        Hello, I'm
        <span className="blue-gradient_text ml-3 font-semibold drop-shadow">
          Amaan{" "}
        </span>
      </h2>
      <div
        className={`mt-5 flex flex-col gap-3 ${
          theme == "light-theme" && "text-slate-500"
        }`}
      >
        <p>
          React Js Developer With 1.2+ of hands-on experience working with an
          array of cutting-edge technologies including HTML5, CSS3, JavaScript,
          TypeScript, React.js, Bootstrap, and Tailwind CSS.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="text-[18px] font-semibold">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill: any) => (
            <div
              key={skill.name}
              className="block-container h-20 w-20 bg-white rounded-xl"
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center cursor-pointer">
                <Suspense fallback={<Loader />}>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </Suspense>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="text-[18px] font-semibold">My Experience</h3>
        <div
          className={`mt-5 flex flex-col gap-3 ${
            theme == "light-theme" && "text-slate-500"
          }`}
        >
          <p>
            As an enthusiastic and skilled Frontend Developer,Throughout my
            career, I have collaborated with diverse companies, continuously
            leveling up my skills and teaming up with some of the brightest
            minds in the industry.
          </p>
        </div>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience: any) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg, color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  {experience.project_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point: any, index: any) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="border-slate-200" />
      <Cta />
    </section>
  );
};
