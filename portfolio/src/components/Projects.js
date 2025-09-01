import React from "react";
const projects = [
  { title: "Fetal Health Classification", desc: "ML model for classifying fetal health conditions.", tech: "Python, Scikit-learn" },
  { title: "App Development Store", desc: "Kotlin-based Android store app.", tech: "Kotlin, Firebase" },
  { title: "Credit Card Fraud Detection", desc: "ML-based fraud detection system.", tech: "Python, Pandas, Sklearn" },
  { title: "Mountain Car Environment", desc: "Deep RL for MountainCar-v0.", tech: "Python, TensorFlow" },
  { title: "Fashion Detection (CNN)", desc: "Computer Vision project using CNN.", tech: "Python, TensorFlow, OpenCV" },
  { title: "Blockchain Research", desc: "Research paper on Blockchain & Cryptocurrency.", tech: "Blockchain, Cryptography" },
  { title: "Stock Management System", desc: "OOP project reading CSV and updating stock.", tech: "Java, OOP" },
  { title: "Fashion Detection (Computer Vision)", desc: "CNN + CV for fashion recognition.", tech: "Python, Keras, OpenCV" },
];
export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <p className="project-tech"><strong>Tech:</strong> {p.tech}</p>
        </div>
      ))}
    </section>
  );
}
