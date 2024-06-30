import React from "react";
import Image from "next/image";

import Tabs from "./tabs/Tabs";
import myImg from "@/assets/Me.jpeg";

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-blue-200 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        {/* <div className="flex flex-col items-center"> */}
        <div className="grid min-h-[140px] w-full place-items-center rounded-lg p-6 lg:overflow-visible">
          <Image
            // className="relative w-1/2 h-1/2 rounded-full mt-6 text-gray-700 bg-white shadow-md bg-clip-border"
            className="relative object-cover object-center rounded-full w-fit h-60 mt-6 text-gray-700 bg-white shadow-md bg-clip-border"
            alt="My profile photo"
            src={myImg}
            priority
          />
          <div className="flex flex-col items-center m-4">
            <h1 className="text-xl font-bold text-blue-950">
              Grace Chen Abudi
            </h1>
            <p className="text-gray-600">Software Engineer</p>
          </div>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default ProfileCard;
