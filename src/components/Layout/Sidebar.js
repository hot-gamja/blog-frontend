// components/Layout/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-lg font-bold">메뉴</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/gallery" className="hover:underline">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/board" className="hover:underline">
            Board
          </Link>
        </li>
        <li>
          <Link to="/cctv" className="hover:underline">
            CCTV
          </Link>
        </li>
        <li>
          <Link to="/test" className="hover:underline">
            Test
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
