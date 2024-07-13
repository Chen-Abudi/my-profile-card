import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import TechStackTab from "@/components/profile/tabs/TechStack";

describe("TechStackTab", () => {
  it("should render Tech Stack section", () => {
    const { getByText } = render(<TechStackTab />);

    expect(getByText("Tech Stack")).toBeInTheDocument();
  });
});
