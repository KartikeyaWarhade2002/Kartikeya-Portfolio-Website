import "./styles/Work.css";

const projects = [
  {
    title: "India Gaming Ecosystem Intelligence Platform",
    description:
      "Built to understand why certain games like BGMI and Free Fire dominate India's gaming market. The platform analyzes 20,000+ gaming records and delivers market insights through an interactive dashboard. It includes a Random Forest classifier, a Cosine Similarity recommendation engine, and VADER NLP sentiment analysis on real game reviews. All analytics are powered by SQL queries on a SQLite database.",
    highlights: [
      "Random Forest classifier — 84% accuracy, 5-fold cross-validation",
      "Cosine Similarity recommendation engine on 20,000+ records",
      "VADER NLP sentiment analysis on real game reviews",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "NLP", "SQLite", "Streamlit"],
    image: "/images/Project 1.png",
    liveDemo: "https://gaming-analytics-kartikeya.streamlit.app/",
    github: "https://github.com/KartikeyaWarhade2002/india-gaming-intelligence",
  },
  {
    title: "Universal Data Quality Auditor and Auto-Cleaning Pipeline",
    description:
      "Upload any CSV or Excel file and it instantly detects every issue, scores your data out of 100, and cleans it without writing a single line of code. The tool detects 8 types of issues — missing values, duplicates, type mismatches, IQR outliers, formatting inconsistencies, low variance columns, domain range violations, and invalid categories. It uses Isolation Forest ML for unsupervised anomaly detection and generates a downloadable JSON audit report.",
    highlights: [
      "8-issue detection system with quality score out of 100",
      "Isolation Forest ML anomaly detection",
      "Downloadable JSON audit report of every change made",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    image: "/images/Project 2.png",
    liveDemo: "https://data-quality-auditor-kartikeya.streamlit.app/",
    github: "https://github.com/KartikeyaWarhade2002/data-quality-auditor",
  },
  {
    title: "Smart Auto-Analytics and Insights Generator",
    description:
      "Upload any CSV or Excel file and the tool automatically profiles every column, generates up to 8 plain-English insights by detecting correlations, outliers, and category imbalances, creates the right charts automatically, detects the most unusual rows using dual-mode anomaly detection, and answers plain-English questions about your data — with no code required.",
    highlights: [
      "8 auto-generated plain-English insights per dataset",
      "Dual-mode anomaly detection — IQR and MAD-based",
      "Natural language query engine — no code required",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
    image: "/images/Project 3.png",
    liveDemo: "https://smart-analytics-kartikeya.streamlit.app/",
    github: "https://github.com/KartikeyaWarhade2002/smart-auto-analytics",
  },
];

const Work = () => {
  return (
    <div className="work-section projects-section" id="work">
      <div className="projects-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Image with overlay */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn overlay-btn-demo"
                    data-cursor="disable"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn overlay-btn-github"
                    data-cursor="disable"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="project-body">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-badges">
                  {project.techStack.map((tech, i) => (
                    <span className="tech-badge" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
