import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Tabs from "@/components/profile/tabs/Tabs";

describe("Tabs component", () => {
  it('renders Tabs component with default "About Me" tab content', () => {
    render(<Tabs />);

    expect(screen.getAllByText("About Me")).toBeDefined();
    expect(screen.queryByText("Experience")).toBeDefined();
    expect(screen.queryByText("Tech Stack")).toBeDefined();
    expect(screen.queryByText("Contact")).toBeDefined();
  });

  it("switches tab content when clicking on a different tab", () => {
    render(<Tabs />);

    fireEvent.click(screen.getByText("Tech Stack"));

    expect(screen.getAllByText("Tech Stack")).toBeDefined();
    expect(screen.queryByText("About Me")).toBeDefined();
    expect(screen.queryByText("Experience")).toBeDefined();
    expect(screen.queryByText("Contact")).toBeDefined();

    fireEvent.click(screen.getByText("Contact"));

    expect(screen.getAllByText("Contact")).toBeDefined();
    expect(screen.queryByText("Tech Stack")).toBeDefined();
    expect(screen.queryByText("About Me")).toBeDefined();
    expect(screen.queryByText("Experience")).toBeDefined();
  });
});
