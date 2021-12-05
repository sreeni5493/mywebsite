import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/work.png",
      company: "ManageArtworks",
      title: "AI Team Lead",
      desc: "Work involves interacting with client, understanding their requirements then come up with design and development of AI products in the artwork management domain.",
      img: "/assets/highres-ma.png",
      website: "https://www.manageartworks.com/",
    },
    {
      id: "2",
      icon: "./assets/academic_research.png",
      company: "FIAS",
      title: "Research Scientist",
      desc: "Bridging model based design with deep neural networks. Modeling computer vision algorithms based on user requirements, along with simulation of rendered data using physically based rendering.",
      img: "/assets/fias.png",
      website: "https://fias.institute/en/",
    },
    {
      id: "3",
      icon: "./assets/academic_research.png",
      company: "MIA",
      title: "Research Assistant-HiWi",
      desc: "Worked on Image Segmentation, Registration and Statistical Analysis of both 2D and 3D medical image data",
      img: "/assets/mia.png",
      website: "https://www.mia.uni-saarland.de/index.shtml",
    },
    {
      id: "4",
      icon: "./assets/academic_research.png",
      company: "MPI",
      title: "Research Assistant-HiWi",
      desc: "High Dynamic Range imaging project titled 'Exposure bracketing for videos on android device'.",
      img: "/assets/mpi.png",
      website: "https://www.mpi-inf.mpg.de/home",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  {/* <h3>{d.company}</h3> */}
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                  onClick={() => window.open(d.website)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
