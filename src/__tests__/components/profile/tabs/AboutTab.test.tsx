import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import AboutTab from "@/components/profile/tabs/AboutTab";

describe("AboutTab", () => {
  it("renders About Me section", () => {
    const { getByText } = render(<AboutTab />);
    expect(getByText("About Me")).toBeInTheDocument();
  });
});
