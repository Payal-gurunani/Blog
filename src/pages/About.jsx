import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">About the Blog Management App</h1>
      <p className="text-lg mb-4">
        Welcome to the Blog Management App! This is a simple application that allows users to create, edit, and manage blog posts.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li>View a list of all blog posts.</li>
        <li>Add new blog posts with title and content.</li>
        <li>Edit existing blog posts.</li>
        <li>Delete blog posts.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li>React for the frontend.</li>
        <li>Redux Toolkit for state management.</li>
        <li>React Router for navigation.</li>
        <li>Tailwind CSS for styling.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">About the Developer:</h2>
      <p className="text-lg">
        This project was developed by a passionate developer who loves to build useful and interactive web applications.
        The goal of this app is to demonstrate how to manage state with Redux and create an efficient user interface with React and Tailwind CSS.
      </p>
    </div>
  );
};

export default About;
