import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Chris Plants</title>
      </Head>

      <header className="fixed top-0 z-50 w-full bg-white">
        <NavBar />
      </header>
      <main className="pt-[110px]">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
