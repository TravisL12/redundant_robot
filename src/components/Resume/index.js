import React from "react";
import { ResumeContainer } from "../../styles/resume";
import { getAsset } from "../utilities";
import { jobs, education, skills, additionalSkills } from "./info";

const Resume = () => (
  <>
    <a href={getAsset("/assets/resume/travis_lawrence_resume.pdf")}>
      PDF Version
    </a>
    <ResumeContainer>
      <div className="resume">
        <header>
          <div className="name">
            <div className="header-name">TRAVIS LAWRENCE</div>
            <div className="header-title">Front End Developer</div>
          </div>
          <div className="header-portfolio">
            <ul>
              <li>
                <a
                  href="https://redundantrobot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon web-icon"></span>redundantrobot.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TravisL12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon github-icon"></span>
                  github.com/TravisL12
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/TravisL12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon codepen-icon"></span>
                  codepen.io/TravisL12
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="body">
          <div className="left-panel">
            <div className="contact panel">
              <h1>CONTACT</h1>
              <ul>
                <li>travis.lawrence12@gmail.com</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>

            <div className="skill-set panel">
              <h1>EXPERTISE</h1>
              <ul>
                {skills.map(({ name }) => (
                  <li>{name}</li>
                ))}
              </ul>
            </div>

            <div className="skill-set panel">
              <h1>ADD. SKILLS</h1>
              <ul>
                {additionalSkills.map(({ name }) => (
                  <li>{name}</li>
                ))}
              </ul>
            </div>

            <div className="education panel" id="education">
              <h1>EDUCATION</h1>
              {education.map((edu, idx) => {
                return (
                  <div className="education-item" key={idx}>
                    <p className="degree">{edu.degree || ""}</p>
                    <p className="school">{edu.school}</p>
                    {/* <p className="year">{edu.year}</p> */}
                    <p className="location">{edu.location}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="right-panel">
            <div className="body-mission panel">
              <p>
                The rotation of languages and technologies year over year is
                part of the job, and I'm comfortable knowing that there will be
                more to come in the years ahead.
              </p>
            </div>
            <div className="work-experience panel" id="experience">
              <h1>EXPERIENCE</h1>
              {jobs
                .filter((j) => !j.hide)
                .map((job, idx) => {
                  return (
                    <div className="experience" key={idx}>
                      <p className="company">
                        {job.name} / {job.title}
                      </p>
                      <p className="title">{job.term}</p>
                      <p className="description">{job.description}</p>
                    </div>
                  );
                })}
            </div>
            <div className="other-experience panel">
              <h1>ADDITIONAL STUFF</h1>
              <div className="experience">
                <p className="description">
                  Prior to Web Development I was an acoustic consultant for 6
                  years in San Francisco. I spent a lot of time measuring noise,
                  crunching data using Excel VBA scripts, and writing reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResumeContainer>
  </>
);

export default Resume;
