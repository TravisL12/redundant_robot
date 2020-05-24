import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => {
  const jobs = [
    {
      name: "Uber",
      title: "Software Developer",
      term: "April 2019 - Current",
      location: "San Francisco",
      description: `I was on the Marketplace Experimentation team and built out their
        experimentation platform. My work included building out mocks, and implenting features backend
        to frontend. My final feature built was a "tags" system in which I built the tables, migrated the database,
        and implemented the UI.`,
    },
    {
      name: "Tumblr",
      title: "Front End Developer",
      term: "November 2016 - April 2019",
      location: "San Francisco",
      description: `
          I worked on the commenting system (Notes & Activities team) for Tumblr's web platform.
          During my time a complete re-write of the web client was undertaken and I
          rebuilt the notes interface in ReactJS and Typescript with 100% test coverage using
          Enzyme and Jest.
    `,
    },
    {
      name: "Sincerely Inc.",
      title: "Full Stack Developer",
      term: "May 2014 - November 2016",
      location: "San Andreas",
      description: `
      I rewrote Sincerely's internal Admin system as a web client using AngularJS and Grunt.
      During this time I began working with PHP to build out API endpoints needed for
      the Admin client to interface with. My backend work also included MySQL database
      management including writing migrations and querying the database directly.
      My final project was rebuiling www.sincerely.com as a web client using AngularJS.
    `,
    },
    {
      name: "50 Cubes Inc.",
      title: "Junior Developer",
      term: "October 2013 - April 2014",
      location: "San Andreas",
      description: `
          I used the MEAN stack to create Wardrobe.me, a social network
      focused on fashion and clothing. Various ideas were prototyped
      and built out for the site including quiz games that focused on clothing
      and brands and a reward system using online coupons.
    `,
    },
  ]

  const education = [
    {
      school: "Univ. of California at Riverside",
      degree: "BS Theoretical Physics",
      year: "1999 - 2004",
      location: "Riverside, CA",
    },
    {
      school: "Salford University",
      degree: "MSc Audio Acoustics",
      year: "2005 - 2007",
      location: "Manchester, England",
    },
    {
      school: "Dev Bootcamp",
      year: "Summer 2013",
      location: "San Francisco, CA",
    },
  ]

  return (
    <Layout>
      <SEO title="Page two" />
      <div className=" resume-container">
        <div className="resume">
          <header>
            <div className="name">
              <div className="header-name">
                <span className="first">TRAVIS LAWRENCE</span>
              </div>
              <div className="header-title">Front End Developer</div>
            </div>
            <div className="header-portfolio">
              <ul>
                <li>
                  <a
                    href="https://redundantrobot.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon web-icon"></span>redundantrobot.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TravisL12"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon github-icon"></span>
                    github.com/TravisL12
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/TravisL12"
                    target="_blank"
                    rel="noreferrer"
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
                  <li>react js</li>
                  <li>typescript / flow</li>
                  <li>jest / enzyme</li>
                  <li>redux</li>
                  <li>styled components</li>
                  <li>webkit / gulp / grunt</li>
                  <li>ruby / php / python / go</li>
                  <li>mysql</li>
                </ul>
              </div>

              <div className="education panel" id="education">
                <h1>EDUCATION</h1>
                {education.map((edu, idx) => {
                  return (
                    <div className="education-item" key={idx}>
                      <p className="degree">{edu.degree || ""}</p>
                      <p className="school">{edu.school}</p>
                      <p className="year">{edu.year}</p>
                      <p className="location">{edu.location}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="right-panel">
              <div className="body-mission panel">
                <p>
                  The rotation of languages and technologies year over year is
                  part of the job, and I'm comfortable knowing that there will
                  be more to come in the years ahead.
                </p>
              </div>
              <div className="work-experience panel" id="experience">
                <h1>EXPERIENCE</h1>
                {jobs.map((job, idx) => {
                  return (
                    <div className="experience" key={idx}>
                      <p className="company">
                        {job.name} / {job.title}
                      </p>
                      <p className="title">{job.term}</p>
                      <p className="description">{job.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="other-experience panel">
                <h1>ADDITIONAL STUFF</h1>
                <div className="experience">
                  <p className="description">
                    Prior to Web Development I was an acoustic consultant for 6
                    years in San Francisco. I spent a lot of time measuring
                    noise, crunching data using Excel VBA scripts, and writing
                    reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resume
