import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function SageMnkyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-zinc-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">SAGE MNKY</h1>
        <h2 className="text-3xl font-semibold mb-8 animate-fade-in-delay-1">The Empathetic World Traveler</h2>
        <p className="text-xl mb-12 italic animate-fade-in-delay-2 text-zinc-400">
          "Expand your mind. Cultivate your emotional intelligence."
        </p>
        
        <img src="/sage_mnky.png" alt="SAGE MNKY" className="w-64 h-64 rounded-full mb-12 mx-auto shadow-lg animate-fade-in-delay-3" />
        
        <div className="space-y-8 mb-12">
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Overview</h3>
            <p className="text-lg text-zinc-300">
              SAGE MNKY is your personal guide to emotional intelligence and self-discovery through the lens of global cultures and mindful exploration. With SAGE MNKY, you embark on a journey that blends emotional growth, cultural awareness, and mindfulness, helping you to not only understand the world better but also yourself.
            </p>
          </section>
          
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">What SAGE MNKY Does</h3>
            <p className="text-lg text-zinc-300">
              SAGE MNKY uses AI-driven insights, cultural anecdotes, and emotionally intelligent recommendations to guide you through personal growth and emotional development. Drawing inspiration from the world's diverse cultures, this persona is designed to help you navigate emotions, relationships, and introspection with empathy and wisdom.
            </p>
          </section>
          
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="text-lg list-disc list-inside space-y-2 text-zinc-300">
              <li>Emotional Growth Guidance</li>
              <li>Cultural Awareness and Perspective</li>
              <li>Mindfulness and Reflection</li>
              <li>Cross-Cultural Playlists and World Music</li>
              <li>Calm in the Storm</li>
            </ul>
          </section>
          
          <section className="bg-zinc-800/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Why Choose SAGE MNKY?</h3>
            <p className="text-lg text-zinc-300">
              In a world that often feels fast-paced and overwhelming, SAGE MNKY is your oasis of calm and understanding. This persona encourages you to slow down, reflect, and engage with the world's emotional and cultural richness. Through a deep understanding of emotional intelligence and the wisdom of diverse cultures, SAGE MNKY provides you with tools to grow, connect, and thrive in both your personal and social spheres.
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
