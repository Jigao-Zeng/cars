"use client";

import { useEffect } from "react";
import {
  animateCarHeader as animateCarHeader,
  animateLoadingBar,
} from "./lib/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animateLoadingBar();
  }, []);

  useEffect(() => {
    animateCarHeader();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header id="cars-header" className="w-full bg-gray-800 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl">Lovely Cars</div>
        </div>
      </header>
      {children}
    </div>
  );
}
