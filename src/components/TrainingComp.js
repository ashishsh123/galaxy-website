import React from "react";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";
import { Link } from "react-router-dom";
import "./Training.css";
const TrainingComp = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          The reasons for space travel are countless. Population growth is a
          major problem that could be helped if space travel led to discovering
          potentially viable living environments other than Earth.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="img-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingComp;
