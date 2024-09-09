import Image from "next/image";
import logo from "../assets/logowhite.png";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <header className="header md:h-screen">
        <Image
          src={logo}
          alt="logo de komandgo"
          className="mx-auto drop-shadow-default py-5 md:py-0"
          width={100}
        />
        <section className="">
          <Hero />
        </section>
      </header>
      <section>
        <Features />
      </section>
      <section className="">
        <Presentation />
      </section>
    </>
  );
}
