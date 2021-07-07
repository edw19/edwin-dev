import Navbar from "../header/NavBar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="relative mx-4 mt-3">{children}</main>
      <footer>este el pie</footer>
    </div>
  );
}

export default Layout;
