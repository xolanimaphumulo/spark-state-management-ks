import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Spark RFX , State Management Discussion
        </h1>
      </div>
      <br />
      <div className="hover:text-grey-200 flex w-full flex-row items-center justify-center gap-4 p-4 text-2xl text-white">
        {[
          {
            label: "Use State",
            href: "use-state",
          },
          {
            label: "Use Reducer",
            href: "use-reducer",
          },
          {
            label: "React Context",
            href: "react-context",
          },

          {
            label: "TanStack Query",
            href: "using-tanstack",
          },

          {
            label: "Data Fetching (NO TanStack)",
            href: "without-tanstack",
          },
          {
            label: "jotai",
            href: "jotai",
          },
        ].map((link) => (
          <Link
            key={link.label}
            href={`/${link.href}`}
            className="hover:text-gray-700"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
