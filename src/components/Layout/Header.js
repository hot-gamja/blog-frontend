// components/Layout/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="font-bold">User</div>
      <div className="space-x-2">
        <button>🔔</button>
        <button>⚙️</button>
      </div>
    </header>
  );
};

export default Header;
