import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import awslogo from "../Assets/icons/amazonwebservices-original.svg";
import reactlogo from "../Assets/icons/react-original.svg";
import reduxlogo from "../Assets/icons/redux-original.svg";
import reactnativelogo from "../Assets/icons/react-native-firebase-1.svg";
import nodejslogo from "../Assets/icons/nodejs-original.svg";
import expresslogo from "../Assets/icons/express.svg";
import javascriptlogo from "../Assets/icons/javascript-original.svg";
import typescriptlogo from "../Assets/icons/typescript-original.svg";
import sasslogo from "../Assets/icons/sass-original.svg";
import mysqllogo from "../Assets/icons/mysql-original.svg";
import graphqllogo from "../Assets/icons/graphql-icon.svg";
import mongodblogo from "../Assets/icons/mongodb-original.svg";
import postgresqllogo from "../Assets/icons/postgresql-original.svg";
import herokulogo from "../Assets/icons/heroku-original.svg";
import npmlogo from "../Assets/icons/npm-original-wordmark.svg";
import pic from "../Assets/pexels-negative-space-169573.jpg";

const Tech = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="techcontainer" id="tech">
      <div className="techtitle">Tech</div>
      <div className="tech">
        <img className="tech__pic" src={pic} alt="pic" />

        <div className="tech__content">
          <div data-aos="fade-up" className="tech__frontend">
            <h2 className="tech__title">Front-End</h2>
            <img className="tech__logo" src={reactlogo} alt="logo" />
            <img className="tech__logo" src={reduxlogo} alt="logo" />
            <img className="tech__logo" src={reactnativelogo} alt="logo" />
            <img className="tech__logo" src={sasslogo} alt="logo" />
          </div>
          <div data-aos="fade-up" className="tech__backend">
            <h2 className="tech__title">Back-End</h2>
            <img className="tech__logo" src={nodejslogo} alt="logo" />
            <img className="tech__logo" src={expresslogo} alt="logo" />
            <img className="tech__logo" src={graphqllogo} alt="logo" />
          </div>

          <div data-aos="fade-up" className="tech__database">
            <h2 className="tech__title">Database</h2>
            <img className="tech__logo" src={mysqllogo} alt="logo" />
            <img className="tech__logo" src={postgresqllogo} alt="logo" />
            <img className="tech__logo" src={mongodblogo} alt="logo" />
          </div>
          <div data-aos="fade-up" className="tech__others">
            <h2 className="tech__title">Other</h2>
            <img className="tech__logo" src={javascriptlogo} alt="logo" />
            <img className="tech__logo" src={typescriptlogo} alt="logo" />
            <img className="tech__logo" src={awslogo} alt="logo" />
            <img className="tech__logo" src={herokulogo} alt="logo" />
            <img className="tech__logo" src={npmlogo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
