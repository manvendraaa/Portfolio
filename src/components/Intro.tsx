import "../css/styles.css";
import react from "../assets/react.svg";
import Js from "../assets/javascript.svg";
import docker from "../assets/docker.svg";
import kubernetes from "../assets/kubernetes.svg";

const Intro = () => {
  const skillsIcons = [
    {
      img: "src/assets/Csharp.png",
      title: "C#",
    },
    {
      img: "src/assets/dotnet.png",
      title: "Dotnet",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: react,
      title: "React",
    },
    {
      img: docker,
      title: "Docker",
    },
    {
      img: kubernetes,
      title: "Kubernetes",
    },
  ];
  return (
    <>
      <section id="home" className="intro">
        <div className="container">
          <div className="content">
            <div className="intro-main">
              <div className="intro-text">
                <h1>Full-Stack Web Developer 💻</h1>
                <p>
                  Hi! I'm Manvendra Rathore, A Software Engineer at Qualcomm,
                  Hyderabad, India 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/manvendra-rathore-610535191/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="medium"
                    rel="noreferrer"
                    target="_blank"
                    href="https://medium.com/@manvendra.rathore1607/"
                  >
                    <i className="fa-brands fa-medium"></i>
                  </a>
                  <a
                    aria-label="twitter"
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/RthoreManvendra"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/manvendraaa"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="intro-img"></div>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
