import { proyects } from "../conts/proyects";
import Head from "next/head";

function proyectos() {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Mis Proyectos</title>
      </Head>
      <div className="sm:col-start-2 sm:col-span-6 md:grid-cols-4 md:col-start-3 md:col-span-6">
        {proyects.map((proyect) => (
          <div
            key={proyect.title}
            className="hover:bg-gray-400 hover:bg-opacity-25"
          >
            <h1>{proyect.title}</h1>
            <p>{proyect.description}</p>
            <a href={proyect?.url} target="_black">
              Revisar
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default proyectos;
