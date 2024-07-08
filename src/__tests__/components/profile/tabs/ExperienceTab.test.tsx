import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ExperienceTab from "@/components/profile/tabs/ExperienceTab";

describe("ExperienceTab", () => {
  it("should render the Experience section", () => {
    const { getByText } = render(<ExperienceTab />);

    expect(getByText("Experience")).toBeInTheDocument();
  });

  it("should render the company name and job title", () => {
    const { getByText } = render(<ExperienceTab />);

    expect(getByText("Software Engineer")).toBeInTheDocument();
    expect(getByText("webeet.io")).toBeInTheDocument();
  });

  it("should render the list items", () => {
    const { getByText } = render(<ExperienceTab />);

    expect(
      getByText(
        "Built a system that enables organizations to manage their authentication systems, providing functionalities to filter, sort, remove, and create new roles with tailored authorization."
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Collaborated with a team on designing and implementing end-to-end features for a SaaS platform, encompassing front and backend developments to enhance the ecosystem."
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Working with the CTO in planning and defining the technical roadmap. Responsibilities encompassed creating technical designs, drafting documentation, and establishing detailed specifications."
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Utilized a tech stack that includes Vue.js, TypeScript, JavaScript, Node.js, MongoDB, Jest, Vite, Sass, and Gitlab to address platform requirements and deliver consistent results."
      )
    ).toBeInTheDocument();
  });

  it("should render the correct number of list items", () => {
    const { container } = render(<ExperienceTab />);
    const listItems = container.querySelectorAll("ul li");

    expect(listItems.length).toBe(4);
  });

  it("should applies correct classes to the elements", () => {
    const { container } = render(<ExperienceTab />);
    const header = container.querySelector("h2");
    const company = container.querySelector(".text-blue-500");

    expect(header).toHaveClass("text-xl font-bold");
    expect(company).toHaveClass("float-right text-blue-500");
  });
});
