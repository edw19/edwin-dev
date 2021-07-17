import { useState } from "react";
import { skills } from "../conts/skills";
import Head from "next/head";

function Habilidades() {
  const [filterSkills, setFilterSkills] = useState([...skills.filter(skill => skill.category === "front-end")]);
  return (
    <>
      <Head>
        <title>Edwin Narváez - Habilidades</title>
      </Head>
      <div className="sm:col-span-8 md:col-span-10 flex flex-row justify-center text-center">
        <h1 className="text-2xl font-bold">Conocimientos en</h1>
        <div className="flex ml-6">
          <select
          defaultValue="front-end"
            className="m-auto bg-transparent border-none outline-none font-bold"
            onChange={(e) =>
              setFilterSkills(
                skills.filter((skill) =>
                  e.target.value === "*"
                    ? [...skills]
                    : skill.category === e.target.value
                )
              )
            }
          >
            <option className="text-right font-extrabold" value="*">
              *
            </option>
            <option value="front-end">Front-End</option>
            <option value="back-end">Back-End</option>
            <option value="db">Databases</option>
            <option value="others">Otras</option>
          </select>
        </div>
      </div>
      <div className="sm:col-start-2 sm:col-span-6 md:col-start-2 md:col-span-8 gap-x-4 gap-y-2 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {filterSkills.map((skill) => (
            <a
              href={skill.uri}
              key={skill.title}
              target="_blank"
              className="hover:bg-gray-400 hover:bg-opacity-25 cursor-pointer p-2 flex flex-col items-center"
            >
              <div className="">
                <img
                  src={skill.uriImage}
                  alt={skill.description}
                  width="100px"
                  height="100px"
                />
              </div>
              <span className="mt-2">{skill.title}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Habilidades;
