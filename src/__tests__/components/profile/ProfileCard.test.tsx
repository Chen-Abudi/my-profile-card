import React from "react";
import { render, RenderResult, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProfileCard from "@/components/profile/ProfileCard";

describe("ProfileCard", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<ProfileCard />);
  });

  it("should render the profile information correctly", () => {
    const { getByAltText, getByText } = component;

    expect(getByAltText("My profile photo")).toBeInTheDocument();

    expect(getByText("Grace Chen Abudi")).toBeInTheDocument();
    expect(getByText("Software Engineer")).toBeInTheDocument();
  });

  it("should render the Tabs component", async () => {
    await waitFor(() => {
      expect(component.getByTestId("tabs")).toBeInTheDocument();
    });
  });
});
