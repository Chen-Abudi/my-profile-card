import React from "react";
import { render, fireEvent, screen, findByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import Tabs from "@/components/profile/tabs/Tabs";

describe("Tabs component", () => {
  it("should renders Tabs component with default About Me tab content", () => {
    render(<Tabs />);

    expect(screen.getAllByText("About Me")).toBeDefined();
    expect(screen.queryByText("Experience")).toBeInTheDocument();
    expect(screen.queryByText("Tech Stack")).toBeInTheDocument();
    expect(screen.queryByText("Contact")).toBeInTheDocument();
  });

  it("should switch tab content when clicking on a different tab", () => {
    render(<Tabs />);

    fireEvent.click(screen.getByText("Tech Stack"));

    expect(screen.getAllByText("Tech Stack")).toBeDefined();
    expect(screen.queryByText("About Me")).toBeInTheDocument();
    expect(screen.queryByText("Experience")).toBeInTheDocument();
    expect(screen.queryByText("Contact")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Contact"));

    expect(screen.getAllByText("Contact")).toBeDefined();
    expect(screen.queryByText("Tech Stack")).toBeInTheDocument();
    expect(screen.queryByText("About Me")).toBeInTheDocument();
    expect(screen.queryByText("Experience")).toBeInTheDocument();
  });

  it("should renders About Me content by default", () => {
    render(<Tabs />);

    expect(screen.getAllByText("About Me")).toBeDefined();
  });

  it("should apply active style to the currently active tab button", () => {
    render(<Tabs />);

    const aboutTabButton = screen.getByText("About Me");
    expect(aboutTabButton).toHaveClass(
      "px-4 py-2 rounded bg-gray-200 text-gray-800"
    );

    fireEvent.click(screen.getByText("Experience"));
    const experienceTabButton = screen.getAllByText("Experience");

    expect(experienceTabButton).toBeDefined();
    expect(aboutTabButton).toHaveClass(
      "px-4 py-2 rounded bg-gray-200 text-gray-800"
    );
  });

  it("does not apply active style to non-active tab buttons", () => {
    render(<Tabs />);

    const aboutTabButton = screen.getByText("About Me");
    const experienceTabButton = screen.getByText("Experience");

    expect(aboutTabButton).toHaveClass(
      "px-4 py-2 rounded bg-gray-200 text-gray-800"
    );
    expect(experienceTabButton).not.toHaveClass("active-class");

    fireEvent.click(experienceTabButton);
    expect(experienceTabButton).toHaveClass(
      "px-4 py-2 rounded bg-blue-500 text-white"
    );
    expect(aboutTabButton).not.toHaveClass("active-class");
  });

  it("renders content for each tab correctly", () => {
    render(<Tabs />);

    fireEvent.click(screen.getByText("Experience"));
    const regexExperience =
      /providing functionalities to filter, sort, remove, and create new roles/i;
    expect(screen.getByText(regexExperience)).toBeInTheDocument();
    expect(screen.queryByText("About Me Content")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Tech Stack"));
    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.queryByText("Experience Content")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Contact"));
    const regexContact = /social media platforms/i;
    expect(screen.getByText(regexContact)).toBeInTheDocument();
    expect(screen.queryByText("Tech Stack Content")).not.toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { container } = render(<Tabs />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches the snapshot after switching tabs", () => {
    const { getByText, container } = render(<Tabs />);

    fireEvent.click(getByText("Tech Stack"));
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText("Contact"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
