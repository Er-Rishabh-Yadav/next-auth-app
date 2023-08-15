import Image from 'next/image'

// pages/index.js
import React from 'react';
const TopicSection = ({ title, content, imageSrc, alt }:any) => (
  <div className="flex items-center mt-6">
    <div className="w-1/2">
      <img src={imageSrc} alt={alt} className="rounded-lg shadow-md w-60" />
    </div>
    <div className="w-1/2 ml-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-gray-200">{content}</p>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-800 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-gray-400 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-white">Welcome to our Authenticated & JWT Secure App</h1>
        <p className="text-gray-200">
          In this we use some concept that, we'll explain the concepts of authorization, Next.js,
          and JSON Web Tokens (JWT) using Mailtrap for email testing.
        </p>

      <TopicSection 
      title="Authorization"
      content="Authorization is the process of determining whether a user has the right
      permissions to access certain resources or perform specific actions.
      It helps control access and protect sensitive data in your application."
      imageSrc="/auth.jpg"
      alt="Authorization"
      />

        
      <TopicSection
        title="Next.js"
        content="Next.js is a React framework that allows you to build modern, server-rendered React applications with ease. It provides features like server-side rendering, routing, and more out of the box."
        imageSrc="/next.jpg"
        alt="Nextjs"
        />


        <TopicSection
        title="JSON Web Tokens (JWT)"
        content="JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims
        between two parties. They are commonly used for authentication and
        authorization purposes, providing a secure way to transmit information
        between a client and a server."
        imageSrc="/jwt.jpg"
        alt="JSON Web Tokens"
        />

        <TopicSection
        title="Mailtrap"
        content="Mailtrap is a tool for email testing. It allows you to catch and inspect 
        emails sent from your application in a safe and controlled environment,
        without actually sending emails to real users."
        imageSrc="/mailtrap.jpg"
        alt="Mailtrap"
        />
      </div>
      
    </div>
  );
};

export default HomePage;
