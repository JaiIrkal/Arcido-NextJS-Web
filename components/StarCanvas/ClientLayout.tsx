"use client";

import dynamic from "next/dynamic";

const StarCanvas = dynamic(
  () => import("../StarCanvas/StarCanvas"),
  { ssr: false }
);

export default function ClientLayout() {
  return <StarCanvas />;
}
