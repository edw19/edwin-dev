import Navbar from "../header/NavBar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 mx-4 mt-3">{children}</main>
      {/* <footer>este el pie</footer> */}
    </div>
  );
}

export default Layout;
