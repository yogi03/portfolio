"use client";

import dynamic from "next/dynamic";

export const SmoothScroll = dynamic(() => import("@/components/SmoothScroll").then(mod => mod.SmoothScroll), { ssr: false });
export const TargetCursor = dynamic(() => import("@/components/TargetCursor"), { ssr: false });
export const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });
