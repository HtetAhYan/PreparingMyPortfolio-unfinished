import React, { useState,useEffect } from "react";
import "./Styles/Slider.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SideSlider() {

  const [isActive, setIsActive] = useState(false);

  const texts = [
    { id: 1, text: "Home" },
    { id: 2, text: "Projects" },
    { id: 3, text: "About" },
    { id: 4, text: "Services" },
    { id: 5, text: "Contact" },
  ];
  let Nav = useNavigate();
  return (
    <div className="Slider" style={{position:'fixed'}}>
      <motion.ul
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {texts.map((txt) => (
          <li
            onClick={() => setIsActive(txt.id)}
            className={isActive === txt.id ? "Active" : "Inactive"}
          >
            <span>
              <font onClick={() => Nav(`/${txt.text}`)}>{txt.text}</font>
            </span>
          </li>
        ))}
      </motion.ul>
      <div className="Slider_stick"></div>
    </div>
  );
}

export default SideSlider;
