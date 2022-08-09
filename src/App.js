import React,{useEffect,useState} from "react";
import FixedHome from "./FixedHome";
import { motion } from "framer-motion";
import Caller from "./Caller";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import SideSlider from "./Components/Home/SideSlider";
import Contact from "./Pages/Contact/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Projects from "./Pages/Projects/Projects";

import Header from "./Components/Home/Header";
import MusicPlayer from "./Pages/Projects/MusicPlayer";
const LazyLoading3d = React.lazy(() => import("./Pages/About/About"));
function App() {
  
  return (
    <div className="App">
      <MusicPlayer />

      <Router>
        <Routes>
          {["/home", "/"].map((path, index) => (
            <Route path={path} element={<FixedHome />} key={index} />
          ))}
          <Route path="/home" element={<FixedHome />} />
      
          <Route
            path="/about"
            element={
              <React.Suspense fallback='Loading'>
                <LazyLoading3d />
              </React.Suspense>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <SideSlider />
      </Router>
    </div>
  );
}

export default App;
