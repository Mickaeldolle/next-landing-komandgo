import Image from "next/image";
import logo from "../assets/logowhite.png";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import ThreeTest from "@/components/ThreeTest";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
// import { Test } from "@/components/Test";
// import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  return (
    <>
      <header className="max-w-screen relative h-screen overflow-hidden">
        <Image
          src={logo}
          alt="logo de komandgo"
          className="mx-auto drop-shadow-default py-5 md:py-0"
          width={100}
        />
        <section className="">
          <Hero />
          <Vortex />
        </section>
      </header>
      {/* <section> */}
      <Features />
      {/* </section> */}
      <section className="relative">
        <div className="absolute -z-10 w-full">
          <svg
            id="visual"
            viewBox="0 0 960 540"
            width="100%"
            height="auto"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            className="w-full hidden md:block"
          >
            <rect x="0" y="0" width="960" height="540" fill="#ffffff"></rect>
            <defs>
              <linearGradient
                id="grad1_0"
                x1="43.8%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="14.444444444444446%"
                  stop-color="#06c8a1"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#06c8a1"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient
                id="grad1_1"
                x1="43.8%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="14.444444444444446%"
                  stop-color="#06c8a1"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#57d2b0"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient
                id="grad1_2"
                x1="43.8%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="14.444444444444446%"
                  stop-color="#80dbbf"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#57d2b0"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient
                id="grad1_3"
                x1="43.8%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="14.444444444444446%"
                  stop-color="#80dbbf"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#a2e5cf"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient
                id="grad1_4"
                x1="43.8%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="14.444444444444446%"
                  stop-color="#c2eedf"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#a2e5cf"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient
                id="grad1_5"
                x1="43.8%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="14.444444444444446%"
                  stop-color="#c2eedf"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#e1f7ef"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient
                id="grad1_6"
                x1="43.8%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="14.444444444444446%"
                  stop-color="#ffffff"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#e1f7ef"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
                <stop
                  offset="14.444444444444446%"
                  stop-color="#06c8a1"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#06c8a1"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%">
                <stop
                  offset="14.444444444444446%"
                  stop-color="#57d2b0"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#06c8a1"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_2" x1="0%" y1="0%" x2="56.3%" y2="100%">
                <stop
                  offset="14.444444444444446%"
                  stop-color="#57d2b0"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#80dbbf"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_3" x1="0%" y1="0%" x2="56.3%" y2="100%">
                <stop
                  offset="14.444444444444446%"
                  stop-color="#a2e5cf"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#80dbbf"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_4" x1="0%" y1="0%" x2="56.3%" y2="100%">
                <stop
                  offset="14.444444444444446%"
                  stop-color="#a2e5cf"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#c2eedf"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_5" x1="0%" y1="0%" x2="56.3%" y2="100%">
                <stop
                  offset="14.444444444444446%"
                  stop-color="#e1f7ef"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#c2eedf"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_6" x1="0%" y1="0%" x2="56.3%" y2="100%">
                <stop
                  offset="14.444444444444446%"
                  stop-color="#e1f7ef"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="85.55555555555554%"
                  stop-color="#ffffff"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <g transform="translate(960, 0)">
              <path
                d="M0 193C-29.6 200.6 -59.2 208.1 -81.9 197.7C-104.6 187.3 -120.4 158.8 -138.6 138.6C-156.8 118.4 -177.4 106.3 -204.2 84.6C-231 62.8 -264 31.4 -297 0L0 0Z"
                fill="#f0fbf7"
              ></path>
              <path
                d="M0 165.4C-25.4 171.9 -50.7 178.4 -70.2 169.5C-89.7 160.5 -103.2 136.1 -118.8 118.8C-134.4 101.4 -152 91.1 -175 72.5C-198 53.9 -226.3 26.9 -254.6 0L0 0Z"
                fill="#d2f2e7"
              ></path>
              <path
                d="M0 137.9C-21.1 143.3 -42.3 148.7 -58.5 141.2C-74.7 133.8 -86 113.5 -99 99C-112 84.5 -126.7 75.9 -145.8 60.4C-165 44.9 -188.6 22.4 -212.1 0L0 0Z"
                fill="#b3e9d7"
              ></path>
              <path
                d="M0 110.3C-16.9 114.6 -33.8 118.9 -46.8 113C-59.8 107 -68.8 90.8 -79.2 79.2C-89.6 67.6 -101.4 60.7 -116.7 48.3C-132 35.9 -150.9 18 -169.7 0L0 0Z"
                fill="#92e0c7"
              ></path>
              <path
                d="M0 82.7C-12.7 86 -25.4 89.2 -35.1 84.7C-44.8 80.3 -51.6 68.1 -59.4 59.4C-67.2 50.7 -76 45.6 -87.5 36.2C-99 26.9 -113.1 13.5 -127.3 0L0 0Z"
                fill="#6dd7b8"
              ></path>
              <path
                d="M0 55.1C-8.5 57.3 -16.9 59.5 -23.4 56.5C-29.9 53.5 -34.4 45.4 -39.6 39.6C-44.8 33.8 -50.7 30.4 -58.3 24.2C-66 18 -75.4 9 -84.9 0L0 0Z"
                fill="#3ccda9"
              ></path>
              <path
                d="M0 27.6C-4.2 28.7 -8.5 29.7 -11.7 28.2C-14.9 26.8 -17.2 22.7 -19.8 19.8C-22.4 16.9 -25.3 15.2 -29.2 12.1C-33 9 -37.7 4.5 -42.4 0L0 0Z"
                fill="#06c8a1"
              ></path>
            </g>
            <g transform="translate(0, 540)">
              <path
                d="M0 -263C31.7 -248.9 63.4 -234.8 89.2 -215.3C114.9 -195.8 134.6 -170.8 147.8 -147.8C160.9 -124.7 167.5 -103.5 191.2 -79.2C215 -54.9 256 -27.4 297 0L0 0Z"
                fill="#f0fbf7"
              ></path>
              <path
                d="M0 -225.4C27.2 -213.3 54.4 -201.2 76.4 -184.5C98.5 -167.8 115.4 -146.4 126.7 -126.7C137.9 -106.9 143.5 -88.7 163.9 -67.9C184.3 -47.1 219.4 -23.5 254.6 0L0 0Z"
                fill="#d2f2e7"
              ></path>
              <path
                d="M0 -187.9C22.7 -177.8 45.3 -167.7 63.7 -153.8C82.1 -139.8 96.2 -122 105.6 -105.6C114.9 -89.1 119.6 -74 136.6 -56.6C153.6 -39.2 182.9 -19.6 212.1 0L0 0Z"
                fill="#b3e9d7"
              ></path>
              <path
                d="M0 -150.3C18.1 -142.2 36.2 -134.2 51 -123C65.7 -111.9 76.9 -97.6 84.4 -84.4C92 -71.3 95.7 -59.2 109.3 -45.3C122.9 -31.4 146.3 -15.7 169.7 0L0 0Z"
                fill="#92e0c7"
              ></path>
              <path
                d="M0 -112.7C13.6 -106.7 27.2 -100.6 38.2 -92.3C49.2 -83.9 57.7 -73.2 63.3 -63.3C69 -53.5 71.8 -44.4 82 -33.9C92.1 -23.5 109.7 -11.8 127.3 0L0 0Z"
                fill="#6dd7b8"
              ></path>
              <path
                d="M0 -75.1C9.1 -71.1 18.1 -67.1 25.5 -61.5C32.8 -55.9 38.5 -48.8 42.2 -42.2C46 -35.6 47.8 -29.6 54.6 -22.6C61.4 -15.7 73.1 -7.8 84.9 0L0 0Z"
                fill="#3ccda9"
              ></path>
              <path
                d="M0 -37.6C4.5 -35.6 9.1 -33.5 12.7 -30.8C16.4 -28 19.2 -24.4 21.1 -21.1C23 -17.8 23.9 -14.8 27.3 -11.3C30.7 -7.8 36.6 -3.9 42.4 0L0 0Z"
                fill="#06c8a1"
              ></path>
            </g>
          </svg>
        </div>
        <Benefits />
      </section>
      <section className="">
        <Presentation />
      </section>{" "}
      {/* <section className="activities ">
        <div className="bg-gradient-to-b from-white to-transparent h-90">
          <Activities />
        </div>
      </section> */}
      <section className="contact relative">
        <ThreeTest />
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
