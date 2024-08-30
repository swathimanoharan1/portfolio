import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Swathi</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="mailto:swathimanoharan45303@gmail.com">
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/swathi-manoharan-73673b1a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/swathimanoharan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills" id="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
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
              MongoDB, MS SQL Server, SQLAlchemy(Python), Sequelize (Node.js),
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
