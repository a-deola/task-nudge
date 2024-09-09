"use client";
import Dashboard from "@/components/Dashboard";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <main className="flex-grow">
        <Dashboard />
      </main>
    </SessionProvider>
  );
}
