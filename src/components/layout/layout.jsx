import Navbar from "../header/NavBar";

function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
