import React from "react";

const AboutTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">About Me</h2>
      <p className="flex text-lg text-pink-500">Aloha</p>
      <p className="flex mx-4">
        My name is Grace Chen Abudi and I am a Skilled Software Engineer with
        expertise in Full-Stack development, specializing in TypeScript,
        JavaScript, and Java. Currently, I work at webeet.io, where I develop
        and manage authentication systems and contribute to our SaaS platform
        technical roadmap. I hold a Software Engineering certificate from
        Masterschool and a Full-Stack Development certificate from TripleTen..
        Infusing my work with a genuine commitment to shaping the digital realm
        day by day. Fueled by a fervor for coding, logic, artistic expression,
        and cutting-edge technology, I aspire to contribute to a superior global
        landscape by enhancing the digital domain.
      </p>
      <p className="mx-4 py-5">
        In my spare time, I dive headfirst into the exciting worlds of 🎨 UI/UX
        design and photography while also relishing in 📚 language learning, 💃🏽
        dance, 🎶 music, and a profound love for nature, particularly the
        awe-inspiring 🌊 ocean. The exhilarating blend forming a vibrant mosaic
        that not only fuels my creativity but also ignites my adventurous
        spirit.
      </p>
    </div>
  );
};

export default AboutTab;
