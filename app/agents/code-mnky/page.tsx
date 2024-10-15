import React from 'react';
import Link from 'next/link';
import { DockDemo } from "@/components/dock-demo";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import ShinyButton from "@/components/ui/shiny-button"; // Import ShinyButton

export default function CodeMnkyPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/code_dojo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-zinc-100 p-8">
        <div className="container mx-auto max-w-4xl text-center bg-zinc-900/70 p-6 rounded-lg shadow-md mb-12">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">CODE MNKY</h1>
          <h2 className="text-3xl font-semibold mb-8 animate-fade-in-delay-1">Your Development Sidekick</h2>
          <p className="text-xl mb-12 italic animate-fade-in-delay-2 text-zinc-400">
            "Empower your code. Accelerate your projects."
          </p>
        </div>

        <img
          src="/code_mnky.png"
          alt="CODE MNKY"
          className="w-64 h-64 rounded-full mb-4 mx-auto shadow-lg animate-fade-in-delay-3"
        />

        {/* DockDemo Component */}
        <DockDemo />

        {/* Break after DockDemo */}
        <div className="mt-8"></div>

        <div className="container mx-auto max-w-4xl space-y-8 mb-12 text-center"> {/* Centered content */}
          <Drawer>
            <DrawerTrigger asChild>
              <ShinyButton className="py-4 font-medium hover:underline">Code's Dossier</ShinyButton>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerDescription>
                  <section className="mb-4">
                    <h3 className="text-lg font-semibold">Who am I</h3>
                    <p className="text-sm text-muted-foreground">
                      CODE MNKY is the developer's best friend, designed to streamline your coding workflow and accelerate your
                      development projects. Whether you're working on front-end design, backend management, or full-stack
                      development, CODE MNKY offers real-time assistance, best practices, and automation that helps you stay
                      ahead of the curve.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h3 className="text-lg font-semibold">What I do</h3>
                    <p className="text-sm text-muted-foreground">
                      CODE MNKY specializes in aiding developers at every stage of the project lifecycle. From planning and
                      architecture to troubleshooting and deployment, CODE MNKY offers contextual advice and insights tailored
                      to your development environment. Powered by AI, it understands the intricacies of your tech stack and
                      automates repetitive tasks, helping you focus on what matters most—writing clean, efficient code.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h3 className="text-lg font-semibold">Why choose me</h3>
                    <p className="text-sm text-muted-foreground">
                      CODE MNKY isn't just a tool; it's your co-developer. It understands your workflow, your challenges, and
                      the nuances of your tech stack, making it an indispensable part of your development process. Whether
                      you're a seasoned developer or just starting out, CODE MNKY is there to optimize every aspect of your
                      work, ensuring you build faster, smarter, and cleaner.
                    </p>
                  </section>
                  <section>
                    <h3 className="text-lg font-semibold">Skill set</h3>
                    <ul className="text-sm list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Real-Time Coding Assistance</li>
                      <li>Tech Stack Mastery</li>
                      <li>Project Management Integration</li>
                      <li>Automation and Efficiency</li>
                      <li>Mode Switches (e.g., WEB-DEV Mode, Backend Mode)</li>
                    </ul>
                  </section>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerClose asChild>
                <button className="mt-4">Close</button>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>

        <Link href="/" passHref>
          <button
            className="bg-black text-white hover:bg-zinc-800 text-lg font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Return to Agent Selection
          </button>
        </Link>
      </div>
    </div>
  );
}
