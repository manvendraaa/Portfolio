import "../css/styles.css";
import Blog from "./Blog";
const BlogList = () => {
  return (
    <>
      <section id="bloglist" className="bloglist">
        <div className="container">
          <div className="bloglist-content">
            <p>blogs</p>
            <h3>Learnings you might find insightful.</h3>
            <div className="bloglist-grid">
              
              {/* <Blog img heading content/> */}
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              {/* <ProBox
                title="Raouf Ecommerce"
                img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/stefvndev/Minimalist-E-commerce"
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
