import React from 'react';

const Work = () => (
  <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
    <h1 className="text-2xl font-bold mb-4">Work</h1>
    <div className="mb-6">
      <h2 className="text-xl font-semibold">AWB Corporate Website</h2>
      <p>
        Developed and maintained the corporate website using Angular and a
        dockerized Spring Boot backend.
      </p>
      <p>Tech List: Angular, Spring Boot, Docker</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold">React Native Mobile App</h2>
      <p>
        Created a mobile application with React Native for cross-platform
        deployment.
      </p>
      <p>Tech List: React Native, JavaScript</p>
    </div>
  </section>
);

export default Work;
