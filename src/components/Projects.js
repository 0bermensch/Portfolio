import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import { projectinfo } from "./ProjectsInfo";

// console.log(projectinfo);

const Projects = ({ projectinfo }) => {
  console.log(projectinfo);
  return (
    <div className="projectcontainer">
      <div className="projectitle">Projects</div>
      <div className="projects">
        {/* {projectinfo.map((content) => (
          <div className="projects__prorject">
            <div className="projects__project--name">{content.title}</div>
            <Carousel>
            <Carousel.Item>
              <img
                className="projects__project--image"
                src={projectcontent.images.image1}
                alt="image1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="projects__project--image"
                src={projectcontent.images.image2}
                alt="image1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="projects__project--image"
                src={projectcontent.images.image3}
                alt="image1"
              />
            </Carousel.Item>
          </Carousel>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Projects;
