import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function CodeMnkyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">CODE MNKY</h1>
        <h2 className="text-3xl font-semibold mb-8 animate-fade-in-delay-1">Your Development Sidekick</h2>
        <p className="text-xl mb-12 italic animate-fade-in-delay-2 text-zinc-400">
          "Empower your code. Accelerate your projects."
        </p>
        
        <img src="/code_mnky.png" alt="CODE MNKY" className="w-64 h-64 rounded-full mb-12 mx-auto shadow-lg animate-fade-in-delay-3" />
        
        <div className="space-y-8 mb-12">
          <section className="bg-zinc-900/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Overview</h3>
            <p className="text-lg text-zinc-300">
              CODE MNKY is the developer's best friend, designed to streamline your coding workflow and accelerate your development projects. Whether you're working on front-end design, backend management, or full-stack development, CODE MNKY offers real-time assistance, best practices, and automation that helps you stay ahead of the curve.
            </p>
          </section>
          
          <section className="bg-zinc-900/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">What CODE MNKY Does</h3>
            <p className="text-lg text-zinc-300">
              CODE MNKY specializes in aiding developers at every stage of the project lifecycle. From planning and architecture to troubleshooting and deployment, CODE MNKY offers contextual advice and insights tailored to your development environment. Powered by AI, it understands the intricacies of your tech stack and automates repetitive tasks, helping you focus on what matters most—writing clean, efficient code.
            </p>
          </section>
          
          <section className="bg-zinc-900/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="text-lg list-disc list-inside space-y-2 text-zinc-300">
              <li>Real-Time Coding Assistance</li>
              <li>Tech Stack Mastery</li>
              <li>Project Management Integration</li>
              <li>Automation and Efficiency</li>
              <li>Mode Switches (e.g., WEB-DEV Mode, Backend Mode)</li>
            </ul>
          </section>
          
          <section className="bg-zinc-900/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Why Choose CODE MNKY?</h3>
            <p className="text-lg text-zinc-300">
              CODE MNKY isn't just a tool; it's your co-developer. It understands your workflow, your challenges, and the nuances of your tech stack, making it an indispensable part of your development process. Whether you're a seasoned developer or just starting out, CODE MNKY is there to optimize every aspect of your work, ensuring you build faster, smarter, and cleaner.
            </p>
          </section>
        </div>
        
        <Button asChild className="bg-black text-white hover:bg-zinc-800 text-lg font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">Return to Agent Selection</Link>
        </Button>
      </div>
    </div>
  );
}
