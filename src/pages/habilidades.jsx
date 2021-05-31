import { useState } from "react";
import NavBar from "../components/header/NavBar";
import LayoutBlog from "../components/layout/main-layout";
import { skills } from "../conts/skills";
import Head from 'next/head'

function Habilidades() {
  const [filterSkills, setFilterSkills] = useState([...skills]);
  return (
    <>
      <Head>
        <title>Edwin Narváez - Habilidades</title>
      </Head>
      <NavBar />
      <LayoutBlog>
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl font-bold  my-10">Mis Habilidades</h1>
          <div className="flex">
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
        <div className="grid grid-cols-4 gap-x-4 gap-y-7">
          {filterSkills.map((skill) => (
            <a
              href={skill.uri}
              key={skill.title}
              target="_blank"
              className="hover:bg-gray-400 hover:bg-opacity-25 cursor-pointer p-2 flex flex-col items-center"
            >
              <div className="h-24">
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
      </LayoutBlog>
    </>
  );
}

export default Habilidades;
