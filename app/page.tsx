import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-canvas text-text-primary selection:bg-accent/30 selection:text-text-primary">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />
      </main>
    </div>
  );
}
