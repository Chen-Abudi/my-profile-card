import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TabButton from "@/common/TabButton";

describe("TabButton", () => {
  it("renders correctly with active state", () => {
    const { getByText } = render(
      <TabButton label="About Me" isActive={true} onClick={() => {}} />
    );
    const button = getByText("About Me");

    expect(button.classList.contains("bg-blue-500")).toBe(true);
    expect(button.classList.contains("text-white")).toBe(true);
  });

  it("renders correctly with inactive state", () => {
    const { getByText } = render(
      <TabButton label="About Me" isActive={false} onClick={() => {}} />
    );
    const button = getByText("About Me");

    expect(button.classList.contains("bg-gray-200")).toBe(true);
    expect(button.classList.contains("text-gray-800")).toBe(true);
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <TabButton label="About Me" isActive={true} onClick={handleClick} />
    );
    const button = getByText("About Me");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
