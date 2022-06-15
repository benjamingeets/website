/**  @jsx h  */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, html } from "./mod.tsx";

serve((_res) =>
  html({
    lang: "en",
    title: "Hello World!",
    meta: {
      description: "This is a description.",
    },
    links: [
      { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" },
    ],
    styles: [
      "*{margin:0;padding:0}",
    ],
    scripts: [
      "console.log('Hello World!')",
    ],
    body: (
      <div class="flex items-center justify-center w-screen h-screen">
        <p class="text-5xl font-bold text-green-600">Hello World!</p>
        <span
          class="inline-block mt-2 dark:hidden cursor-pointer"
          /* @ts-ignore */
          onclick="setColorScheme('dark')"
        >
          Dark Mode
        </span>
        <span
          class="hidden mt-2 dark:inline-block cursor-pointer"
          /* @ts-ignore */
          onclick="setColorScheme('light')"
        >
          Light Mode
        </span>
      </div>
    ),
  })
);
