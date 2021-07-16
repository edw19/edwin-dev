import Navbar from "../header/NavBar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="relative grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 mx-4 mt-3">{children}</main>
      {/* <footer>este el pie</footer> */}
    </div>
  );
}

export default Layout;
