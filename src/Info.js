import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Info = () => {
  const [nasaInfo, setNasaInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY `)
      .then((response) => {
        setNasaInfo(response.data);
        console.log(response);
      })
      .catch((error) => console.log("Something is wrong!", error));
  }, []);
  return (
    <div>
      <Card
        date={nasaInfo.date}
        explanation={nasaInfo.explanation}
        title={nasaInfo.title}
        imgUrl={nasaInfo.url}
      />
    </div>
  );
};

export default Info;