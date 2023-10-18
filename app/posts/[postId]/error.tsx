"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
      <Link href="/">Back to Home</Link>
    </main>
  );
}
