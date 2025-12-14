import React from "react";
import { Link } from "react-router-dom";
import "./SkillsOverview.css";

const skillsData = {
  "Lanuages": [
    { name: "Python", level:"80%"},
    { name: "SQL", level: "60%"},
    // { name: "C", level: "80%" },
    { name: "C++", level: "85%"},
    { name: "Java", level: "50%" },
  ],
  "Frameworks": [
    { name: "TensorFlow", level: "85%" },
    { name: "Scikit-Learn", level: "88%" },
    { name: "Hugging Face", level: "80"},
    { name: "Langchain", level: "75%" },
    { name: "Streamlit", level: "82%" },
  ],
  "Tools": [
    { name: "Matplotlib", level: "85%"},
    { name: "Seaborn", level: "82%"},
    { name: "Jupyter Notebook", level: "90%" },
    { name: "Google Colab", level: "88%" },
    { name: "Git", level: "80%" },
  ],
};

const SkillsOverview = () => {
  return (
    <div className="skills-overview" id="skills">
      <h2 className="main-title">My Skills</h2>
      <div className="main-underline" />
      <p className="subtitle">A comprehensive overview of my technical expertise and proficiency</p>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skill-card" key={category}>
            <h3 className="category-title">{category}</h3>
            <ul>
              {skills.map((skill, idx) => (
                <li key={idx}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: skill.level }}></div>
                  </div>
                  <span className="skill-percent">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/skills">
        <button className="view-more-btn">View More Skills</button>
      </Link>
    </div>
  );
};

export default SkillsOverview;
