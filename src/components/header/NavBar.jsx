import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import me from "/public/edwin.png";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 mt-3 navbar-backdrop rounded-b-md">
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12">
        <div
          className="flex justify-center mt-1 pl-3 md:col-start-3"
          onClick={() => router.push("/")}
        >
          <Image
            src={me}
            placeholder="blur"
            // layout="responsive"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <Search />
        <div className="hidden sm:block sm:col-span-4 md:col-span-4 my-2 mx-2 text-center">
          <Link href="/proyectos">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Mis proyectos</a>
          </Link>
          <Link href="/habilidades">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Habilidades</a>
          </Link>
          <Link href="/contacto">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Contacto</a>
          </Link>
          <Link href="/acerca">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Acerca de</a>
          </Link>
        </div>
        <div className="sm:hidden flex justify-center">
          <Hamburger toggled={open} color="#6366F1" toggle={setOpen} />
        </div>
      </div>
      <div className={` ${open ? "block" : "hidden"}`}>
        <div className="flex flex-col bg-indigo-500 rounded-lg my-2 shadow-2xl text-center text-white font-semibold">
          <Link href="/proyectos">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Mis proyectos</a>
          </Link>
          <Link href="/habilidades">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Habilidades</a>
          </Link>
          <Link href="/contacto">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Contacto</a>
          </Link>
          <Link href="/acerca">
            <a className="py-2 hover:bg-indigo-400 rounded-lg">Acerca de</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
