// App.js
import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Gallery from "./pages/Gallery";
import CCTV from "./pages/CCTV";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
