"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import ShinyButton from "@/components/ui/shiny-button";
import Ripple from "@/components/ui/ripple";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoodCrafterComponent } from "@/components/mood-crafter";
import { MoodCrafterStreaming } from "@/components/mood-crafter-streaming";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 mb-4 bg-transparent border border-gray-300 rounded-lg shadow-md">
    {children}
  </div>
);

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
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
      
      <Ripple className="opacity-50 z-10" />
      
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-zinc-100 p-8">
        <header className="w-full max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            CODE MNKY
          </h1>
          <div className="h-0.5 w-32 bg-zinc-400 mx-auto mb-4"></div>
          <h2 className="text-3xl font-light mb-6 animate-fade-in-delay-1">
            Your Development Sidekick
          </h2>
          <p className="text-xl italic animate-fade-in-delay-2 text-zinc-400">
            "Empower your code. Accelerate your projects."
          </p>
        </header>
        
        <img src="/code_mnky.png" alt="CODE MNKY" className="w-64 h-64 rounded-full mb-8 mx-auto shadow-lg animate-fade-in-delay-3" />

        <div className="mt-12"></div>

        <Drawer>
          <DrawerTrigger asChild>
            <ShinyButton className="py-4 font-medium hover:underline">Code's Dossier</ShinyButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex-1 p-4">
                <DrawerHeader>
                  <DrawerDescription>
                    <Card>
                      <ScrollArea className="h-64">
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
                      </ScrollArea>
                    </Card>
                  </DrawerDescription>
                </DrawerHeader>
              </div>
              <div className="flex-1 p-4 rounded-lg shadow-md">
                <HeroVideoDialog
                  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  thumbnailSrc="/code_dojo.png"
                  thumbnailAlt="Code MNKY Video thumbnail"
                />
              </div>
              <div className="flex-1 p-4">
                <MoodCrafterStreaming />
              </div>
            </div>
            <DrawerClose asChild>
              <button className="mt-4">Close</button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>

        <Button 
          asChild 
          className="mt-8 bg-black text-white hover:bg-zinc-800 text-sm font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          style={{ width: '75px', height: '30px' }} // Approximate 75% reduction
        >
          <Link href="/">Return</Link>
        </Button>
      </div>
    </div>
  );
}
