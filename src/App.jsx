import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-228px)] max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
