function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
