import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function MoodMnkyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-zinc-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">MOOD MNKY</h1>
        <h2 className="text-3xl font-semibold mb-8 animate-fade-in-delay-1">The Personal Vibe Creator</h2>
        <p className="text-xl mb-12 italic animate-fade-in-delay-2 text-zinc-400">
          "Craft your personal vibe, scent the mood."
        </p>
        
        <img src="/mood_mnky.png" alt="MOOD MNKY" className="w-64 h-64 rounded-full mb-12 mx-auto shadow-lg animate-fade-in-delay-3" />
        
        <div className="space-y-8 mb-12">
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Overview</h3>
            <p className="text-lg text-zinc-300">
              MOOD MNKY is your personal vibe curator, designed to help you craft a fragrance that reflects your personality, mood, and the experience you want to create. More than just a fragrance generator, MOOD MNKY taps into the power of scent to express who you are and set the tone for any occasion.
            </p>
          </section>
          
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">What MOOD MNKY Does</h3>
            <p className="text-lg text-zinc-300">
              MOOD MNKY uses advanced AI to help you create a one-of-a-kind fragrance blend tailored specifically to your preferences. By combining your input with a comprehensive fragrance database, MOOD MNKY selects top, middle, and base notes that come together in a harmonious blend.
            </p>
          </section>
          
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="text-lg list-disc list-inside space-y-2 text-zinc-300">
              <li>Personalized Fragrance Creation</li>
              <li>Fragrance Library Access</li>
              <li>Mood-Based Suggestions</li>
              <li>Curated for Seasons and Events</li>
            </ul>
          </section>
          
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Why Choose MOOD MNKY?</h3>
            <p className="text-lg text-zinc-300">
              MOOD MNKY is more than a fragrance tool—it's a journey into self-discovery. Every interaction with MOOD MNKY is an opportunity to express yourself in a unique and personal way. Through the power of scent, you can create a lasting impact and elevate your surroundings.
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
