import Hero from "@/components/hero";
import { AgentBento_4x4Dark } from "@/components/agent-bento-4x4-dark"; // Import the AgentBento component

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <AgentBento_4x4Dark /> {/* Replace the Next steps section with AgentBento */}
      </main>
    </>
  );
}
