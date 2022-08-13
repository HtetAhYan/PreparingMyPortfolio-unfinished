import React, { useState, useEffect } from "react";

import { motion, MotionConfig } from "framer-motion";
import SideSlider from "./Components/Home/SideSlider";
import TxtHome from "./Components/Home/TxtHome";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack, Button } from "@mui/material";
import Mimi from "./Pages/ThreeDelements/Mimi";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./App.css";
import Behance from "./Assets/Images/behance.svg";
import Caller from "./Caller";
import Linear from "./Pages/About/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicPlayer from "./Pages/Projects/MusicPlayer";
import MusicThreeD from "./Pages/ThreeDelements/MusicThreeD";
function FixedHome() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setLoad(false);
      }, 4000);
    }
  }, []);
  return (
    <div className="A_Home_Page_Main">
      {load ? (
        <Linear />
      ) : (
        <div className="A_Home_Page">


          <motion.div className="box">
            <motion.div
              className="box_stick"
              animate={{ x: 0, scale: 1 }}
              initial={{ x: 600 }}
              transition={{ type: "tween", duration: 1 }}
            ></motion.div>
            <motion.div className="box_head">
              <motion.h2
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ type: "tween", duration: 0.6, delay: 0.3 }}
              >
                Hello, there
              </motion.h2>
              <motion.h1
                animate={{ x: 0, scale: 1, opacity: 1 }}
                initial={{ x: -200, opacity: 0 }}
                drag
                dragConstraints={{
                  top: -10,
                  left: -10,
                  right: 20,
                  bottom: 2,
                }}
                transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
              >
                I'm Htet Ah Yan
              </motion.h1>
              <TxtHome />
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Stack
                  className="box_button_stack"
                  sx={{ width: "130px", marginTop: "4rem" }}
                >
                  <Button
                    href="https://drive.google.com/file/d/1nP7a_BxehNYATKQ9qFnzqrBfUQ3MbPF7/view?usp=sharing"
                    className="btn"
                    color="secondary"
                    variant="contained"
                    size="small"
                  >
                    Download CV
                  </Button>
                </Stack>
              </motion.div>
            </motion.div>
          </motion.div>

          <Stack className="bottom">
            <Stack
              className="bottom_icons"
              spacing={5}
              direction="row"
              sx={{ margin: "0 2rem" }}
            >
              <Stack>
                <GitHubIcon className="bottom_gh i" sx={{ fontSize: "3rem" ,color: "white" }}/>
              </Stack>
              <Stack>
                <FacebookOutlinedIcon
                  className="bottom_fb i"
                  color="primary"
                  sx={{ fontSize: "3rem" }}
                />
              </Stack>
              <Stack sx={{ cursor: "pointer" }}>
                {" "}
                <img
                  className="bottom_i i"
                  src={Behance}
                  style={{ maxWidth: "3rem" ,background:'white',borderRadius:'50%'}}
                />
              </Stack>
              <Stack>
                <Caller className="bottom_call i" />
              </Stack>
            </Stack>
          </Stack>
          <Mimi />
        </div>
      )}
    </div>
  );
}

export default FixedHome;
