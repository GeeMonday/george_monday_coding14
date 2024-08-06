import React from 'react';

const BasicInformation = () => (
  <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md text-center">
    <h1 className="text-2xl font-bold mb-4">Basic Information</h1>
    <img src="/profile.jpg" alt="Profile" className="profile" />
    <p>Name: Rafael Melo</p>
    <p>
      Currently a Full Stack Web Development student at Red River College
      Polytechnic. Passionate about web and mobile application development, with
      5 years of experience. Seeking opportunities to contribute within a team
      environment using Agile methodologies.
    </p>
  </section>
);

export default BasicInformation;
