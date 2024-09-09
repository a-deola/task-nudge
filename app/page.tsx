"use client";
import Dashboard from "@/components/Dashboard";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <main>
        <Dashboard />
      </main>
    </SessionProvider>
  );
}
