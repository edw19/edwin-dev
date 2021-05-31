import Navbar from "../components/header/NavBar";
import LayoutBlog from "../components/layout/main-layout";
import { proyects } from "../conts/proyects";
import Head from "next/head";

function proyectos() {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Mis Proyectos</title>
      </Head>
      <Navbar />
      <LayoutBlog>
        <div className="grid grid-cols-1 mt-10">
          {proyects.map((proyect) => (
            <div key={proyect.title} className="hover:bg-gray-400 hover:bg-opacity-25">
              <h1>{proyect.title}</h1>
              <p>{proyect.description}</p>
              <a href={proyect?.url} target="_black">Revisar</a>
            </div>
          ))}
        </div>
      </LayoutBlog>
    </>
  );
}

export default proyectos;
