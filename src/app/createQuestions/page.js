"use client";

import react from "react";
import dynamic from "next/dynamic";

const CreateQuestion = dynamic(() => import("@/components/createQuestion"), {
  ssr: false,
});
export default function Question() {
  return <CreateQuestion />;
}
