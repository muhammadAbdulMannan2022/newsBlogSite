import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";

function Home(props) {
  const [topNews, setTopNews] = useState([]);
  useEffect(() => {
    fetch("/data/topNews.json")
      .then((res) => res.json())
      .then((data) => {
        setTopNews(data?.articles);
        console.log(data?.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="overflow-x-hidden w-[100vw]">
      <Navbar />
      <div className="w-full flex">
        <Carousel items={topNews} />
      </div>
    </div>
  );
}

export default Home;
