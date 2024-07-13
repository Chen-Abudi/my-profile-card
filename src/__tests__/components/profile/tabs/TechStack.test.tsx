import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";

import TechStackTab from "@/components/profile/tabs/TechStack";

describe("TechStackTab", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<TechStackTab />);
  });

  it("should render Tech Stack section", () => {
    const { getByText } = component;

    expect(getByText("Tech Stack")).toBeInTheDocument();
  });

  it("should render Programming Languages section", () => {
    const { getByText } = component;

    expect(getByText("Programming Languages:")).toBeInTheDocument();
  });

  it("should render all Programming Languages items", () => {
    const { getByText } = component;

    ["TypeScript", "JavaScript", "Java", "HTML", "CSS", "SCSS", "Sass"].forEach(
      (item) => {
        expect(getByText(item)).toBeInTheDocument();
      }
    );
  });

  it("should render Frontend Frameworks & Libraries section", () => {
    const { getByText } = component;

    ["React", "Vue.js", "Next.js", "Vite", "TailwindCSS", "Redux"].forEach(
      (item) => {
        expect(getByText(item)).toBeInTheDocument();
      }
    );
  });

  it("should render Backend Frameworks section", () => {
    const { getByText } = component;

    expect(getByText("Backend Frameworks:")).toBeInTheDocument();
  });

  it("should render all Backend Frameworks items", () => {
    const { getByText } = component;

    ["Node.js", "Express.js", "Spring", "Spring Boot"].forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it("should render Databases section", () => {
    const { getByText } = component;

    expect(getByText("Databases:")).toBeInTheDocument();
  });

  it("should render all Databases items", () => {
    const { getByText } = component;

    ["SQL & NoSQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"].forEach(
      (item) => {
        expect(getByText(item)).toBeInTheDocument();
      }
    );
  });

  it("should render DevOps & CI/CD section", () => {
    const { getByText } = component;

    expect(getByText("DevOps & CI/CD:")).toBeInTheDocument();
  });

  it("should render all DevOps & CI/CD items", () => {
    const { getByText } = component;

    expect(getByText("Docker")).toBeInTheDocument();
  });

  it("should render all Version Control section", () => {
    const { getByText } = component;

    expect(getByText("Version Control:")).toBeInTheDocument();
  });

  it("should render all Version Control items", () => {
    const { getByText } = component;

    ["Git", "GitHub", "GitLab"].forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it("should render Design Tools section", () => {
    const { getByText } = component;

    expect(getByText("Design Tools:")).toBeInTheDocument();
  });

  it("should render all Design Tools items", () => {
    const { getByText } = component;

    ["Figma", "Canva"].forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it("should render Testing Tools section", () => {
    const { getByText } = component;

    expect(getByText("Testing Tools:")).toBeInTheDocument();
  });

  it("should render all Testing Tools items", () => {
    const { getByText } = component;

    ["Jest", "React Testing Library", "JUnit"].forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it("should match snapshot", () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});
