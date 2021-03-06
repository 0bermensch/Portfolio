import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import pay1 from "../../Assets/Projectpics/payment1.PNG";
import pay2 from "../../Assets/Projectpics/payment2.PNG";
import pay3 from "../../Assets/Projectpics/payment3.PNG";

const Project6 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">PayAPI</div>
        <Carousel>
          <Carousel.Item>
            <img className="project__card--mainpic" src={pay1} alt="mainpic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="project__card--mainpic" src={pay2} alt="mainpic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="project__card--mainpic" src={pay3} alt="mainpic" />
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
          href="https://payment-website.vercel.app/"
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
          BandSite
        </Modal.Header>
        <Modal.Body>
          <div className="project__modal--video">video</div>
          <div className="project__modal--techstack">
            TECHSTACK: React, Scss, Figma
          </div>
          <div className="project__modal--github">
            GITHUB: https://github.com/0bermensch/payment-website
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project6;
