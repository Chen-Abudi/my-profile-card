import React from "react";

const ContactTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Contact</h2>
      <p>
        If you have any questions or would like to collaborate on a project,
        please feel free to reach out to me. You can find me on various social
        media platforms, including GitHub, LinkedIn, and Medium. Additionally,
        you can email me at{" "}
        <a href="mailto:cheezumcali23@gmail.com" className="text-blue-900">
          GMail
        </a>
        .
      </p>
    </div>
  );
};

export default ContactTab;
