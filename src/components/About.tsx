import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hi, I'm Kartikeya Warhade, an aspiring Data Analyst with a strong
          foundation in Python, SQL, and Data Analysis.
        </p>
        <ul className="para about-list">
          <ul>
            <li>
              I enjoy working with real-world datasets and uncovering meaningful
              insights.
            </li>
            <li>
              My work focuses on exploratory data analysis, statistical
              techniques, and clear visualizations.
            </li>
            <li>
              I build practical data tools using{" "}
              Pandas, NumPy, Power BI, and Streamlit.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default About;
