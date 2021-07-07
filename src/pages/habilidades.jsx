import { useState } from "react";
import { skills } from "../conts/skills";
import Head from "next/head";

function Habilidades() {
  const [filterSkills, setFilterSkills] = useState([...skills]);
  return (
    <>
      <Head>
        <title>Edwin Narváez - Habilidades</title>
      </Head>
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-bold">Mis Habilidades</h1>
        <div className="flex ml-6">
          <select
            className="m-auto"
            onChange={(e) =>
              setFilterSkills(
                skills.filter((skill) =>
                  e.target.value === "todas"
                    ? [...skills]
                    : skill.category === e.target.value
                )
              )
            }
          >
            <option value="todas">todas</option>
            <option value="front-end">Front-End</option>
            <option value="back-end">Back-End</option>
            <option value="db">Databases</option>
            <option value="others">Otras</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
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
    </>
  );
}

export default Habilidades;
