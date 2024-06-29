import React from "react";
import Image from "next/image";

import Tabs from "./tabs/Tabs";
import myImg from "@/assets/Me.jpeg";

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-blue-200 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col items-center space-x-4">
          <Image
            className="w-1/2 h-1/2 rounded-full"
            alt="My profile photo"
            src={myImg}
          />
          <div className="m-4">
            <h1 className="text-xl font-bold">Grace Chen Abudi</h1>
            <p className="text-gray-600">Software Engineer</p>
          </div>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default ProfileCard;
