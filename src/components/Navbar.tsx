import "../css/styles.css"
function Navbar(){
  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <nav>
        <h3 className="logo" onClick={pageUp}>Manvendra</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#bloglist">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
