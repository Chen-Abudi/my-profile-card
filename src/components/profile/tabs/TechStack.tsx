import React from "react";

const TechStackTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Tech Stack</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>Programming Languages:</strong>
          <ul className="list-disc pl-5">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Sass</li>
          </ul>
        </li>
        <li>
          <strong>Frontend Frameworks & Libraries:</strong>
          <ul className="list-disc pl-5">
            <li>React</li>
            <li>Vue.js</li>
            <li>Next.js</li>
            <li>Vite</li>
            <li>TailwindCSS</li>
            <li>Redux</li>
          </ul>
        </li>
        <li>
          <strong>Backend Frameworks:</strong>
          <ul className="list-disc pl-5">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Spring</li>
            <li>Spring Boot</li>
          </ul>
        </li>
        <li>
          <strong>Databases:</strong>
          <ul className="list-disc pl-5">
            <li>SQL & NoSQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>SQLite</li>
          </ul>
        </li>
        <li>
          <strong>DevOps & CI/CD:</strong>
          <ul className="list-disc pl-5">
            <li>Docker</li>
          </ul>
        </li>
        <li>
          <strong>Version Control:</strong>
          <ul className="list-disc pl-5">
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </li>
        <li>
          <strong>Design Tools:</strong>
          <ul className="list-disc pl-5">
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </li>
        <li>
          <strong>Testing Tools:</strong>
          <ul className="list-disc pl-5">
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>JUnit</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TechStackTab;
