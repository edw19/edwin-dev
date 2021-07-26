import { proyects } from "../conts/proyects";
import Head from "next/head";
import { prefixEdwinDevAssets } from "../constants";

function proyectos() {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Mis Proyectos</title>
      </Head>
      <div className="sm:col-start-2 sm:col-span-6 md:grid-cols-4 md:col-start-3 md:col-span-6 lg:col-start-4 lg:col-span-7">
        {proyects.map((proyect) => (
          <div
            key={proyect.title}
            className="hover:shadow-2xl hover:bg-opacity-25 p-2"
          >
            <h1 className="font-semibold text-2xl">{proyect.title}</h1>
            <p>{proyect.description}</p>
            <div className="flex justify-end">
              <a
                href={proyect?.url}
                className=" px-4 py-2 bg-indigo-500 rounded-md text-white mb-2"
                target="_black"
              >
                Revisar
              </a>
            </div>
            <img
              src={prefixEdwinDevAssets + "/lessa.png"}
              alt="edwin narváez sistema de ventas ecuador"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default proyectos;
