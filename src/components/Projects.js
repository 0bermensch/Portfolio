import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import track1 from "../Assets/Projectpics/trailtrack1.PNG";
import track2 from "../Assets/Projectpics/trailtrack2.PNG";
import track3 from "../Assets/Projectpics/trailtrack4.PNG";
import trackervid from "../Assets/projectvids/trailtracker-vid.mp4";
import food1 from "../Assets/Projectpics/food1.PNG";
import food2 from "../Assets/Projectpics/food2.PNG";
import food3 from "../Assets/Projectpics/food3.PNG";
import foodvid from "../Assets/projectvids/Yelp-Clone Vid.mp4";
import country1 from "../Assets/Projectpics/country1.PNG";
import country2 from "../Assets/Projectpics/country2.PNG";
import country3 from "../Assets/Projectpics/country3.PNG";
import countryvid from "../Assets/projectvids/RestCountry-App - Vid.mp4";
import instock1 from "../Assets/Projectpics/instock1.PNG";
import instock2 from "../Assets/Projectpics/instock2.PNG";
import instock3 from "../Assets/Projectpics/instock3.PNG";
import instockvid from "../Assets/projectvids/InStock - Vid.mp4";
import weather1 from "../Assets/Projectpics/typescript-weather1.PNG";
import weather2 from "../Assets/Projectpics/typescript-weather2.PNG";
import weather3 from "../Assets/Projectpics/typescript-weather3.PNG";
import weathervid from "../Assets/projectvids/WeatherApp - Vid.mp4";
import omdb1 from "../Assets/Projectpics/omdb1.PNG";
import omdb2 from "../Assets/Projectpics/omdb2.PNG";
import omdb3 from "../Assets/Projectpics/omdb3.PNG";
import omdbvid from "../Assets/projectvids/OMDB - Vid.mp4";

const Projects = () => {
  const [projectinfo] = useState([
    {
      id: 1,
      title: "Trail-Tracker",
      images: [{ image1: track1 }, { image2: track2 }, { image3: track3 }],
      modal: [
        { title: "Trail-Tracker" },
        { github: "https://github.com/0bermensch/Trail-Tracker" },
        { video: trackervid },
        {
          techstack:
            "React Native, Node.js, Express, MongoDB, Expo, React-Navigation, User Authentication, ngrok, ",
        },
      ],
    },
    {
      id: 2,
      title: "Yelp-Clone",
      images: [{ image1: food1 }, { image2: food2 }, { image3: food3 }],
      modal: [
        { title: "Yelp-Clone" },
        { github: "https://github.com/0bermensch/yelp-clone" },
        { video: foodvid },
        { techstack: "React Native, Expo, RESTful API" },
      ],
    },
    {
      id: 3,
      title: "RESTCountries-api",
      images: [
        { image1: country1 },
        { image2: country2 },
        { image3: country3 },
      ],
      modal: [
        { title: "RESTCountries-api" },
        { github: "https://github.com/0bermensch/Rest-Country-App" },
        { video: countryvid },
        { techstack: "React, sass.module, REST API" },
      ],
    },
    {
      id: 4,
      title: "InStock",
      images: [
        { image1: instock1 },
        { image2: instock2 },
        { image3: instock3 },
      ],
      modal: [
        { title: "Instock" },
        { github: "https://github.com/0bermensch/Instock" },
        { video: instockvid },
        { techstack: "React, sass, Node.js, Express, json" },
      ],
    },
    {
      id: 5,
      title: "OpenWeather",
      images: [
        { image1: weather1 },
        { image2: weather2 },
        { image3: weather3 },
      ],
      modal: [
        { title: "OpenWeather" },
        { github: "https://github.com/0bermensch/SimpleWeatherApp" },
        { video: weathervid },
        { techstack: "React, redux, typescript, CSS" },
      ],
    },
    {
      id: 6,
      title: "OMDB-Movies",
      images: [{ image1: omdb1 }, { image2: omdb2 }, { image3: omdb3 }],
      modal: [
        { title: "OMDB-Movies" },
        { github: "https://github.com/0bermensch/SimpleWeatherApp" },
        { video: omdbvid },
        { techstack: "React, RESTful API, CSS" },
      ],
    },
  ]);
  const [modal, setModal] = useState(false);

  return (
    <div className="projectcontainer">
      <div className="projectitle">Projects</div>
      <div className="projects">
        {projectinfo.map((card) => (
          <div className="projects__project">
            <div className="projects__project--name">{card.title}</div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="projects__project--image"
                  src={card.images[0].image1}
                  alt="image1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="projects__project--image"
                  src={card.images[1].image2}
                  alt="image1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="projects__project--image"
                  src={card.images[2].image3}
                  alt="image1"
                />
              </Carousel.Item>
            </Carousel>
            <Button variant="light">
              <div className="projects__project--modalbutton">Details</div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
