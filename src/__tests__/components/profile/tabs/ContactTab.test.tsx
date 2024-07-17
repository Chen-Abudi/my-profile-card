import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";

import ContactTab from "@/components/profile/tabs/ContactTab";

describe("ContactTab", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<ContactTab />);
  });

  it("should render the Contact section", () => {
    const { getByText } = component;

    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("should render the contact paragraph", () => {
    const { getByText } = component;

    expect(
      getByText(
        /If you have any questions or would like to collaborate on a project/
      )
    ).toBeInTheDocument();
  });

  it("should render the email link with the correct href", () => {
    const { getByText } = component;
    const emailLink = getByText("GMail");

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:cheezumcali23@gmail.com");
  });

  it("should mention social media platforms", () => {
    const { getByText } = component;

    expect(getByText(/GitHub/)).toBeInTheDocument();
    expect(getByText(/LinkedIn/)).toBeInTheDocument();
    expect(getByText(/Medium/)).toBeInTheDocument();
  });

  it("should apply the correct CSS classes", () => {
    const { getByText } = component;
    const heading = getByText("Contact");

    expect(heading).toHaveClass("text-xl", "font-bold", "text-blue-700");

    const emailLink = getByText("GMail");
    expect(emailLink).toHaveClass(
      "font-medium",
      "text-blue-900",
      "hover:text-blue-500"
    );
  });

  it("should match the snapshot", () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });
});
