import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mohit Jain",
      title: "IIT Kharagpur",
      img:
        "/assets/mohit.png",
      icon: "assets/linkedin.png",
      linkedin: "https://www.linkedin.com/in/mohit-jain-07a5ba155/",
      desc:
        "Mr. Sreenivas is one of the best mentors I have worked with. I am really thankful for his support and guidance",
    },
    {
      id: 2,
      name: "Siddhant Toknekar",
      title: "Co-Founder of DELKA",
      img:
      "/assets/sidhant.png",
      icon: "assets/linkedin.png",
      linkedin: "https://www.linkedin.com/in/siddhant-toknekar/",
      desc:
        "The down-to-earth and friendly nature of Sreenivas sir is a true inspiration for the kind of human I aspire to be.",
      featured: true,
    },
    {
      id: 3,
      name: "Neha Rana",
      title: "IIT Madras",
      img:
      "/assets/neha.png",
      icon: "assets/linkedin.png",
      linkedin: "https://www.linkedin.com/in/neha-rana11/",
      desc:
        "Mentor's attitude was extremely exceptional. Training especially was taken care of pretty well. I learnt a lot over the past few weeks. ",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" 
                onClick={() => window.open(d.linkedin)}/>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
