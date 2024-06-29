import React from "react";

import ProfileCard from "@/components/profile/ProfileCard";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProfileCard />
    </div>
  );
};

export default HomePage;
