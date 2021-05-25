import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import photosnap1 from "../../Assets/Projectpics/photosnap1.PNG";
import photosnap2 from "../../Assets/Projectpics/photosnap2.PNG";
import photosnap3 from "../../Assets/Projectpics/photosnap3.PNG";

const Project8 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">Photosnap</div>
        <Carousel>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={photosnap1}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={photosnap2}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={photosnap3}
              alt="mainpic"
            />
          </Carousel.Item>
        </Carousel>
        <Button
          className="project__card--detailb"
          variant="light"
          onClick={() => setModal(true)}
        >
          <div className="project__card--buttontext">Details</div>
        </Button>
        <Button
          className="project__card--demob"
          href="https://photosnap-app-sigma.vercel.app/"
          variant="light"
        >
          Demo
        </Button>
      </div>
      <Modal
        className="project__modal"
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Header className="project__modal--header" closeButton>
          Architect-Studio
        </Modal.Header>
        <Modal.Body>
          <div className="project__modal--techstack">
            TECHSTACK: React, Scss, Figma
          </div>
          <div className="project__modal--github">
            GITHUB: https://github.com/0bermensch/Photosnap
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project8;
