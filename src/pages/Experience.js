import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan, 2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Systems Engineer - Infosys
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai, TamilNadu
          </h4>
          <p>
            Worked as an Angular Developer, transforming designs into functional
            code for an internal project. Worked as a .NET Developer, retrieved
            data from third-party websites, converted it to the desired format,
            and significantly reduced processing time.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug, 2022 - Jan, 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Systems Engineer Trainee - Infosys
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mysore, Karnataka
          </h4>
          <p>
            Collaborated with the team to develop a full-stack application,
            contributing to front-end, back-end, and database development.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul, 2021 - Aug, 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Python Blogger - TechSnap
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai, TamilNadu
          </h4>
          <p>
            Carefully crafted four blogs on various Python core concepts and
            award as Best Intern for my work.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dhanalakshmi Srinivasan College of Engineering, Coimbatore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Engineering
          </h4>

          <p> Electronics and Communication Engineering - 8.2 </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri P. Mallaiyan Matric Hr. Sec. School, Coimbatore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">State Board</h4>

          <p> HSC - 71% </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri P. Mallaiyan Matric Hr. Sec. School, Coimbatore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">State Board</h4>

          <p> SSLC - 93% </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#d9d9d9", color: "#000000" }}
          icon={<ArrowUpwardIcon />}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
