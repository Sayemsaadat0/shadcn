import { AccordionDemo } from "@/components/core/accordion";
import { DialogDemo } from "@/components/core/dialog";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-2xl font-mono font-bold underline">ShadCn Learning</h1>
      <div className="w-96">
        accordion ::::
        <AccordionDemo></AccordionDemo> <br /> <br />
      </div>

      <div className="">
       <p className="bg-tm-Primary-2 text-white text-center"> dialoge :</p> <br />
        <DialogDemo></DialogDemo>
      </div>
    </main>
  );
}
