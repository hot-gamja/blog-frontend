// components/Layout/Layout.js
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
