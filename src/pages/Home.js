import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import "../styles/Home.css";

const tooltipStyles = {
  backgroundColor: "black",
  color: "white",
  fontSize: "14px",
  padding: "10px",
  borderRadius: "4px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
};

const links = [
  {
    href: "mailto:swathimanoharan45303@gmail.com",
    title: "Reach Out",
    icon: <EmailIcon />,
  },
  {
    href: "https://www.linkedin.com/in/swathi-manoharan-73673b1a6/",
    title: "View My Work",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://github.com/swathimanoharan1",
    title: "See My Code",
    icon: <GitHubIcon />,
  },
];

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Swathi</h2>
        <div className="prompt">
          <p>
            A Software Developer Turning Ideas into Reality with Code and
            Passion.
          </p>
          {links.map(({ href, title, icon }, index) => (
            <Tooltip key={index} title={title} sx={tooltipStyles} arrow>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="skills" id="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              AngularTS, ReactJS, HTML, CSS, JavaScript, TypeScript, BootStrap,
              Material-UI, Media Queries, Redux, React Context API, GitHub, Lazy
              Loading, NPM, RESTful APIs, GraphQL, Iconic, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Python, Django, .NET, NodeJS, ExpressJS, Java, SpringBoot,
              MongoDB, MS SQL Server, SQLAlchemy (Python), Sequelize (Node.js),
              CDN (Content Delivery Network)
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, JavaScript, TypeScript, Java, C#, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
