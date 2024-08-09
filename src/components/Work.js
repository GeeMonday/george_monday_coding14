import React from 'react';

const Work = () => (
  <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
    <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
    <div className="mb-4">
      <h3 className="text-lg font-semibold">E-Commerce Platform Development</h3>
      <p>
        Led the development of an innovative e-commerce platform using modern
        technologies, including React and Node.js, integrating various payment
        gateways and optimizing performance.
      </p>
    </div>
    <div className="mb-4">
      <h3 className="text-lg font-semibold">CRM System Overhaul</h3>
      <p>
        Spearheaded the redesign of a CRM system, enhancing its capabilities
        with microservices architecture and containerization for improved
        scalability.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Tech List</h3>
      <p>Microservices, Docker, Kubernetes</p>
    </div>
  </section>
);

export default Work;
