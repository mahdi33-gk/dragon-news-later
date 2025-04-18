import React from "react";
import me from "../images/mahadi.jpg";
const About = () => {
  return (
    <div>
      <div>
        <img src={me} alt="" />
      </div>
      <p className="text-gray-700 leading-relaxed">
        Hi, I'm <span className="font-semibold text-black">Mahdi</span> — the
        developer behind Dragon News. I'm passionate about building clean,
        responsive, and user-friendly web applications. This news platform was
        designed and developed by me from scratch as part of my journey to
        master frontend development. Whether you're here to read global
        headlines or explore in-depth reports, I hope this site provides a
        smooth and engaging experience.
        <br />
        
      </p>
    </div>
  );
};

export default About;
