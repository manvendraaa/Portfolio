import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <BlogList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
