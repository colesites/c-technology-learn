"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ComingSoon = () => {
  const router = useRouter();
  const prev = router.back;

  return (
    <div className="flex h-screen justify-center items-center bg-primary text-secondary px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Coming Soon
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={prev}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
