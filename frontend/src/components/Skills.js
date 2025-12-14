import React from "react";
import { Button } from "react-bootstrap";
import "./Skills.css";

const skillsData = {
  Languages: [
    { name: "Python", level: 80 },
    { name: "SQL", level: 60 },
    // { name: "C", level: 80 },
    { name: "C++", level: 85 },
    { name: "Java", level: 50 },
  ],
  Technology: [
    { name: "Generative AI", level: 85 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "Artificial Intelligence", level: 88 },
    { name: "NLP", level: 80 },
    { name: "RAG", level: 75 },
    { name: "LLM", level: 78 },
    { name: "Data Manipulation", level: 85 },
    { name: "Data Analysis", level: 88 },
    { name: "Statistical Analysis", level: 80 },
    { name: "Data Collection", level: 82 },
    { name: "Data Preprocessing", level: 85 },
  ],
  Frameworks: [
    { name: "TensorFlow", level: 85 },
    { name: "Scikit-Learn", level: 88 },
    { name: "Keras", level: 84 },
    { name: "Hugging Face", level: 80 },
    { name: "Langchain", level: 75 },
    { name: "Streamlit", level: 82 },
  ],
  Databases: [
    { name: "MySQL", level: 60 },
    { name: "NoSQL",level: 70 },
    // { name: "Chroma DB", level: 75 },
  ],
  Tools: [
    { name: "Matplotlib", level: 85 },
    { name: "Seaborn", level: 82 },
    { name: "Jupyter Notebook", level: 90 },
    { name: "Google Colab", level: 88 },
    { name: "VS Code", level: 90 },
    { name: "Kaggle", level: 80 },
    { name: "Microsoft Office", level: 85 },
    { name: "GIT", level: 80 },
  ],
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="main-title">My Skills</h2>
      <div className="main-underline" />
      <p className="subtitle">
        A comprehensive overview of my technical expertise and proficiency
      </p>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div className="skill-category" key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="category-underline" />
          <div className="bar-list">
            {skills.map((skill, idx) => (
              <div className="bar-item" key={idx}>
                <div className="bar-label">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Go to Home Button */}
      <div className="back-home-container text-center">
        <Button
          variant="outline-primary"
          className="back-home-button"
          onClick={() => (window.location.href = "/")}
        >
          ⬅ Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Skills;
