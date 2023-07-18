import React from "react";
import "../App.css";
import logo from '../assets/icons8-workout-100 (1).png'
const Intro = () => {
  return (
    <div className="intro">
    <img src={logo} className="logo" alt="LOGO" />
      <h1>Ai Fitness</h1>
      <div className="text">
        <span>Transform your workouts with AI fitness.</span><br />
        <span>
          Answer a questionnaire and get personalized workouts based on your
          fitness level, goals, and equipment.
        </span><br />
        <span>Experience fitness redefined.</span>
      </div>
    </div>
  );
};

export default Intro;
