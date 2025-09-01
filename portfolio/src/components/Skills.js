import React from "react";
export default function Skills() {
  const skills = ["React", "TypeScript", "Next.js", "HTML5", "CSS3 / SCSS", "Tailwind", "Responsive Design", "Accessibility", "SEO", "REST APIs", "Node.js", "Git / GitHub"];
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <ul>
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
