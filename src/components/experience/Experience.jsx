import React from "react";
import "./experience.css";
import { frontend, backend } from './skills.js'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  console.log(frontend);
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontend.map(({ type, status }) => {
                return (
                  <article className="experience__details">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{type}</h4>
                      <small className="text-light">{status}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {
              backend.map(({ type, status }) => {
                return (
                  <article className="experience__details">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{type}</h4>
                      <small className="text-light">{status}</small>
                    </div>
                  </article>
                )
              })
            }

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
