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
    <div className="tech" id="tech">
      <img className="tech__pic" src={pic} alt="pic" />

      <div></div>
    </div>
  );
};

export default Tech;
