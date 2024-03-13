"use client";
import { PortfolioContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const skills = [
  { id: 1, img: "/assets/img/technologyIcons/html-min.webp", value: "90" },
  { id: 2, img: "/assets/img/technologyIcons/css-3-min.webp", value: "90" },
  { id: 3, img: "/assets/img/technologyIcons/sass-min.webp", value: "85" },
  { id: 4, img: "/assets/img/technologyIcons/bootstrap-min.webp", value: "50" },
  { id: 5, img: "/assets/img/technologyIcons/js-min.webp", value: "85" },
  { id: 6, img: "/assets/img/technologyIcons/react-min.webp", value: "80" },
  { id: 7, img: "/assets/img/technologyIcons/redux-min.webp", value: "65" },
  { id: 8, img: "/assets/img/technologyIcons/nodejs-min.webp", value: "60" },
  { id: 9, img: "/assets/img/technologyIcons/Java.webp", value: "65" },
  { id: 10, img: "/assets/img/technologyIcons/mongodb-min.webp", value: "50" },
  { id: 11, img: "/assets/img/technologyIcons/seo-min.webp", value: "80" },
  { id: 12, img: "/assets/img/technologyIcons/figma-min.webp", value: "80" },
  { id: 13, img: "/assets/img/technologyIcons/git-min.webp", value: "80" },
  { id: 14, img: "/assets/img/technologyIcons/swagger.webp", value: "65" },
];

const Skills = () => {
  const { dark } = useContext(PortfolioContext);
  return (
    <SectionContainer id="skills">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          /* bigTitle={"resume"}*/
          colorTitle={"skills"}
          normalTitle={"my"}
        />
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          {/* Skills Starts */}
          <div className="flex w-full flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${skill.value} float-none mx-auto ${
                    dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                  }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.value}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>

                <img
                  className="iconeSkills"
                  src={skill.img}
                  alt="Skill Image"
                />
              </div>
            ))}
          </div>
          {/* Skills Ends */}

          {/* Resume Ends */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default Skills;
