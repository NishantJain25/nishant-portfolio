import { forwardRef } from "react";
import Button from "./button";

const SkillsSection = forwardRef(({}, skillsRef) => {
  const skills = [
    { LANGUAGES: ["JavaScript", "Python", "SQL", "Java"] },
    {
      "FRAMEWORKS / TECHNOLOGIES": [
        "ReactJS",
        "Redux",
        "NextJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Firebase",
        "Django",
        "Flutter",
      ],
    },
  ];
  return (
    <section id="skills" ref={skillsRef}>
      <div className="grid h-full">
        <div className="left text-orange-200 font-extrabold flex flex-col justify-end ">
          <div id="text">
            <h2 className="text-[6em] p-0">MY SKILLS</h2>
          </div>
        </div>
        <div className="right text-white flex flex-col gap-2 items-end justify-end ">
          <div className="w-[75%]">
            {skills.map((obj, key) => {
              return (
                <div key={key} className="mt-20">
                  <h2 className="pb-2 text-[3em]">{Object.keys(obj)[0]}</h2>
                  <div className="flex flex-wrap gap-x-2 gap-y-4 w-[75%]">
                    {obj[Object.keys(obj)].map((skill, key) => (
                      <div
                        key={key}
                        className="p-2 border-white border-[1px] rounded-full select-none"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;
