import "../css/styles.css"
const Intro = () => {
  return (
      <>
      <section id="home" className="intro">
        <div className="container">
          <div className="content">
            <div className="intro-main">
              <div className="intro-text">
                <h1>Full-Stack Web Developer  💻</h1>
                <p>
                  Hi! I'm Manvendra Rathore,
                    A Software Engineer at Qualcomm,
                     Hyderabad, India 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/stefvndev"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="intro-img"></div>
            </div>

            {/*  */}
            {/* <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src={Html} title="HTML5" alt="program_img" />
                  </li>
                  <li>
                    <img src={Css} title="CSS3" alt="program_img" />
                  </li>
                  <li>
                    <img src={Js} title="Javascript" alt="program_img" />
                  </li>
                  <li>
                    <img src={React} title="React JS" alt="program_img" />
                  </li>
                  <li>
                    <img
                      src={Tailwind}
                      title="Tailwind CSS"
                      alt="program_img"
                    />
                  </li>
                  <li>
                    <img src={Sass} title="Sass/Scss" alt="program_img" />
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
