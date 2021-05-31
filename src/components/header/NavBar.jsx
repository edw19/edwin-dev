import Link from "next/link";
function Navbar() {
  return (
    <nav className="grid grid-cols-1 sticky top-0">
      <div className="p-4 rounded-b-md navbar-backdrop shadow-lg">
        <div className="grid grid-cols-12">
          <div className="col-start-3 col-span-8 flex justify-between ">
            <h1 className="text-lg">
              <Link href="/">
                <a>Edwin Narváez</a>
              </Link>
            </h1>
            <div className="flex flex-row gap-x-4">
              <Link href="/proyectos">
                <a>Mis proyectos</a>
              </Link>
              <Link href="/habilidades">
                <a>Habilidades</a>
              </Link>
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
              <Link href="/acercade">
                <a className="hover:bg-blue-500">Acerca de</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
