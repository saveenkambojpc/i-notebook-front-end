import React, { Component, useContext, useEffect } from "react";
import noteContext from "../Context/notes/notecontext";

const About = () => {
  const context = useContext(noteContext);

  useEffect(() => {
    context.update();
  }, []);
  return (
    <div>
      This is About
      <h1>{context.state.name}</h1>
    </div>
  );
};

export default About;
