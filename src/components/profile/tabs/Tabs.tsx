"use client";

import React, { useState } from "react";

import TabButton from "@/common/TabButton";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import TechStackTab from "./TechStack";
import ContactTab from "./ContactTab";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabContent = () => {
    switch (activeTab) {
      case "About Me":
        return <AboutTab />;
      case "Experience":
        return <ExperienceTab />;
      case "Tech Stack":
        return <TechStackTab />;
      case "Contact":
        return <ContactTab />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        {["About Me", "Experience", "Tech Stack", "Contact"].map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className="p-4 border rounded">{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;
