import React from "react";

const ExperienceTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Experience</h2>
      <p className="px-3 py-2">
        Software Engineer{" "}
        <span className="flex float-right text-blue-500">webeet.io</span>
      </p>
      <ul className="flex flex-col list-disc pl-5">
        <li>
          Built a system that enables organizations to manage their
          authentication systems, providing functionalities to filter, sort,
          remove, and create new roles with tailored authorization.
        </li>
        <li>
          Collaborated with a team on designing and implementing end-to-end
          features for a SaaS platform, encompassing front and backend
          developments to enhance the ecosystem.
        </li>
        <li>
          Working with the CTO in planning and defining the technical roadmap.
          Responsibilities encompassed creating technical designs, drafting
          documentation, and establishing detailed specifications.
        </li>
        <li>
          Utilized a tech stack that includes Vue.js, TypeScript, JavaScript,
          Node.js, MongoDB, Jest, Vite, Sass, and Gitlab to address platform
          requirements and deliver consistent results.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceTab;
