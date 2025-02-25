"use client";

import MouseIcon from "@/app/components/ui/MouseIcon";

export default function Page() {
    return (
    <main>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        <MouseIcon onClick={() => console.log("hello")}/>
      <div>Next.js on GitHub Pages</div>
    </main>
  );
}
