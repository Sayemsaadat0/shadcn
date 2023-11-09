import { AccordionDemo } from "@/components/core/accordion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-96">
        <AccordionDemo></AccordionDemo>
      </div>
    </main>
  );
}
