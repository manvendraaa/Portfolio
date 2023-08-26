import "../css/styles.css";
import AboutImage from "../assets/aboutImage.jpg"

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img
                src={AboutImage}
                alt="mee"
                className="img-side__main-img"
              />
            </div>
            <div className="text-side">
              <h4>About me</h4>
              <h3>
                A dedicated Software Engineer <br /> based in Hyderabad, India
                📍
              </h3>
              <p>
                As a Full Stack Developer, I possess an impressive arsenal
                of skills in React, C#, .net, Docker,
                 Kubernetes. I
                excel in making scalable web apps. I am currently working at Qualcomm
                as a Software Engineer 
                 I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
