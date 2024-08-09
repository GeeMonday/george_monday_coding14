import React from 'react';

const Skills = () => (
  <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
    <h1 className="text-2xl font-bold mb-4">Skills</h1>
    <p className="font-semibold">Backend:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Spring Boot</li>
      <li>Python</li>
      <li>PHP</li>
      <li>SQL</li>
      <li>Java</li>
      <li>Ruby</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Django</li>
      <li>RESTful APIs</li>
      <li>GraphQL</li>
    </ul>
    <p className="font-semibold">Frontend:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Angular</li>
      <li>Vue.js</li>
    </ul>
    <p className="font-semibold">Other:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Git</li>
      <li>Docker</li>
      <li>Linux Environments</li>
      <li>Agile Methodologies</li>
      <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
      <li>Microservices Architecture</li>
      <li>Serverless Computing</li>
    </ul>
  </section>
);

export default Skills;
