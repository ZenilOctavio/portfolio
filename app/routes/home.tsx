import TypingAnimatedText from "~/core/components/typing_animated_text";
import type { Route } from "./+types/home";
import TechIcon from "~/core/components/tech_icon";
import { Download, GithubIcon, LinkedinIcon } from 'lucide-react'
import FrameCard from "~/core/components/frame_card";
import Carrousel from "~/core/components/carrousel";
import resumePDF from "../assets/Resume.pdf"
import myPhoto from "../assets/img/my_photo_nobg.webp"
import desktopImg from "../assets/img/desk_photo.jpg"
import djangoLogo from "../assets/svg/django.svg"
import bootstrapLogo from "../assets/svg/bootstrap.svg"
import dockerLogo from "../assets/svg/docker.svg"
import expressLogo from "../assets/svg/express.svg"
import goLogo from "../assets/svg/go.svg"
import javascriptLogo from "../assets/svg/javascript.svg"
import mysqlLogo from "../assets/svg/mysql.svg"
import nextjsLogo from "../assets/svg/nextjs.svg"
import nodejsLogo from "../assets/svg/nodejs.svg"
import prismaLogo from "../assets/svg/prisma.svg"
import pythonLogo from "../assets/svg/python.svg"
import reactLogo from "../assets/svg/react.svg"
import sequelizeLogo from "../assets/svg/sequelize.svg"
import tailwindcssLogo from "../assets/svg/tailwindcss.svg"
import typescriptLogo from "../assets/svg/typescript.svg"
import viteLogo from "../assets/svg/vite.svg"

import dogosImg1 from "../assets/img/personal_projects/dogos-1.png"
import dogosImg2 from "../assets/img/personal_projects/dogos-2.png"
import dogosImg3 from "../assets/img/personal_projects/dogos-3.png"

import luismiImg1 from "../assets/img/personal_projects/luismifix-1.png"
import luismiImg2 from "../assets/img/personal_projects/luismifix-2.png"
import luismiImg3 from "../assets/img/personal_projects/luismifix-3.png"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Octavio Zenil | Portfolio" },
    { name: "description", content: "Software Engineering Student" },
  ];
}

export default function Home() {
  return (
    <>
      <section id="about-me" className="border-b-2 w-full px-2 md:px-10 py-10 border-b-slate-100/10 rounded-b-2xl dark:bg-black/10">
        <main className="place-content-center flex flex-col-reverse md:flex-row">
          <div className="md:basis-2/3">
            <span className="typing-[19] tracking-light font-light text-sm text-purple-600/70">Software Developer</span>
            <h1 className="text-2xl font-bold tracking-tighter">Octavio Zenil</h1>
            <p className="text-sm font-light">
              An active learner with a strong commitment to academic excellence and continuous self-improvement.
              Aspiring to leverage my dedication and technical expertise to contribute to cutting-edge innovations in the field of software development.
            </p>
            <ul className="flex items-center gap-2 mt-4">
              <li className="bg-slate-950 text-white p-1 rounded">
                <a href="https://github.com/ZenilOctavio"><GithubIcon /></a>
              </li>
              <li className="bg-purple-700 text-white p-1 rounded">
                <a href="https://www.linkedin.com/in/zenil-octavio"><LinkedinIcon /></a>
              </li>

            </ul>
            <footer className="flex gap-4 mt-4 items-center">
              <a href="mailto:zenil21082003@outlook.com" className="magic-button bg-black/75 px-4 py-2 rounded-sm text-white">Conctact me</a>
              <a
                href={resumePDF}
                download
                className="bg-gradient-base bg-clip-text animated-bg-gradient-[5] cursor-pointer hover:scale-105 transition-transform flex gap-2 items-center"
              >
                Resume
                <Download className="text-purple-600" />
              </a>
            </footer>
          </div>

          <figure className="md:basis-1/5 self-end max-w-50 md:max-w-none overflow-hidden">
            <picture className="object-cover w-10 fade-image animate-fadein image-shadow">
              <img src={myPhoto} alt="Octavio Zenil López" />
            </picture>
          </figure>
        </main>
      </section>
      <section className="relative mt-10 border-b-2 overflow-hidden mx-5 rounded-xl border-b-slate-100/10 bg-black/30">
        <div className="absolute w-full h-full inset-0 -z-10 ">
          <img
            src={desktopImg}
            alt="desktop image"
            className="object-cover w-full dark:blur-[4px] h-full opacity-40 dark:opacity-60 "
          />
        </div>
        <main className="w-full h-full flex flex-col relative md:px-32 p-2">
          <h1
            className="text-2xl self-end font-extralight tracking-tighter underline underline-offset-4 dark:text-white"
          >
            About me
          </h1>
          <div className="font-light text-sm tracking-tighter text-right mt-4 border-r-2 border-r-purple-950 pr-2 dark:text-white">
            <TypingAnimatedText duration={1}>High-achieving software engineering student recognized for having the highest grades in my generation. An active learner with a strong commitment to academic excellence and continuous self-improvement.</TypingAnimatedText>
            <TypingAnimatedText delay={1.5} duration={2}>Skilled in web development, database management, and agile project methodologies, with hands-on experience in creating user-focused applications.</TypingAnimatedText>
          </div>

        </main>
      </section>
      <hr className="my-9 border-slate-100/10" />
      <section id="professional-experience" className="flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-tighter text-center">Professional Experience</h1>
        <main className="mt-5">
          <ul className="w-[80vw] md:w-[80ch] flex flex-col items-center gap-4 ">
            <li className="basis-40">
              <article className="flex flex-col md:flex-row justify-between border-l-2 pl-4">
                <main className="basis-4/5">
                  <h2 className="font-extralight tracking-tighter text-xl">Einsoft</h2>
                  <h3>Software Developer</h3>
                  <div className="text-sm font-light">
                    <p>I developed a web application for managing and tracking the entries to dining rooms from a company.</p>
                    <p>Here I've worked in both front-end and back-end.</p>
                    <p>Worked with PDFs generation and file transfer in Python.</p>
                  </div>
                </main>
                <aside className="md:basis-1/20 mt-5 md:mt-0">
                  <ul className="flex md:flex-col flex-row items-center justify-between md:justify-center ">
                    <li className="md:basis-20 basis-10">
                      <img src={djangoLogo} className="object-contain w-full h-full" alt="Django Logo" />
                    </li>
                    <li className="md:basis-20 basis-10">
                      <img src={bootstrapLogo} className="object-contain w-full h-full" alt="Bootstrap Logo" />
                    </li>
                    <li className="md:basis-20 basis-10">
                      <img src={pythonLogo} className="object-contain w-full h-full" alt="Python Logo" />
                    </li>
                  </ul>
                </aside>
              </article>
            </li>
            <li className="basis-40">
              <article className="flex flex-col md:flex-row justify-between border-l-2 pl-4">
                <main className="basis-4/5">
                  <h2 className="font-extralight tracking-tighter text-xl">Stewart Boot Company</h2>
                  <h3>Software Developer - Freelancer</h3>
                  <div className="text-sm font-light">
                    <p>Designed, developed and deployed the landing page for this company.</p>
                    <p>Here I've worked in both front-end and back-end.</p>
                    <p>Used design tools for prototyping as Figma.</p>
                  </div>

                </main>
                <aside className="md:basis-1/20 mt-5 md:mt-0">
                  <ul className="flex md:flex-col flex-row items-center justify-between md:justify-center">
                    <li className="md:basis-20 basis-10">
                      <img src={nextjsLogo} className="object-contain w-full h-full invert-100 dark:invert-0" alt="NextJS Logo" />
                    </li>
                    <li className="md:basis-20 basis-10">
                      <img src={tailwindcssLogo} className="object-contain w-full h-full" alt="TailwindCSS Logo" />
                    </li>
                    <li className="md:basis-20 basis-10">
                      <img src={typescriptLogo} className="object-contain w-full h-full" alt="Typescript Logo" />
                    </li>
                  </ul>
                </aside>
              </article>
            </li>
          </ul>
        </main>
      </section>
      <hr className="my-9 border-slate-100/10" />
      <section className="mx-6" id="academic-achievements">
        <h1 className="text-2xl font-bold tracking-tighter text-center">Academic Achievements</h1>
        <main className="px-4 flex flex-col items-center mt-10">
          <ul className="md:w-[600px] flex flex-col gap-20 items-center">
            <li className="scroll-animate-fadein scroll-start-[0] scroll-end-[200] opacity-0">
              <FrameCard>
                <header className="flex items-center justify-between">
                  <h2 className="tracking-tight text-xl font-bold">Student Exchange Program</h2>
                  <span className="font-extralight">2025</span>
                </header>
                <p className="text-sm font-light">I was part of an exchange program.</p>
                <p className="text-sm font-light">This is a goal that I've had since I started my studies.</p>
                <p className="text-sm font-light">I applied for <a href="https://www.uregina.ca/" className="text-green-500 hover:underline font-bold">University of Regina</a> and there are only 3 available spaces for my whole university to get in there.</p>
              </FrameCard>
            </li>
            <li className="scroll-animate-fadein scroll-start-[0] scroll-end-[200] opacity-0">
              <FrameCard>
                <header className="flex items-center justify-between">
                  <h2 className="tracking-tight text-xl font-bold">Student's Trajectory Award</h2>
                  <span className="font-extralight">2025</span>
                </header>
                <p className="text-sm font-light">This prize is given to each student with the most academic achievements per program <a href="https://www.unison.mx/" target="_blank" className="text-blue-500 hover:underline font-bold">Universidad de Sonora</a>.</p>
                <p className="text-sm font-light">I've had an average note of <strong className="text-purple-500">97.68 over 100</strong> percent since that year and participated in an exchange program in Canada.</p>
              </FrameCard>
            </li>
            <li className="scroll-animate-fadein scroll-start-[0] scroll-end-[200] opacity-0">
              <FrameCard>
                <header className="flex items-center justify-between">
                  <h2 className="tracking-tight text-xl font-bold">Second Place at Encora Code Challenge</h2>
                  <span className="font-extralight">2024</span>
                </header>
                <p className="text-sm font-light"><a href="https://www.encora.com/" target="_blank" className="text-orange-600 font-bold hover:underline">Encora's branch</a> at Hermosillo, Sonora organized a Code Challenge in collaboration with Universidad de Sonora.</p>
                <p className="text-sm font-light">I participated in this event and got the second place.</p>
              </FrameCard>
            </li>
            <li className="scroll-animate-fadein scroll-start-[0] scroll-end-[200] opacity-0">
              <FrameCard>
                <header className="flex items-center justify-between">
                  <h2 className="tracking-tight text-xl font-bold">Undergraduate Level Student of the Year</h2>
                  <span className="font-extralight">2023</span>
                </header>
                <p className="text-sm font-light">This prize is given to the student with the highest notes in each program at <a href="https://www.unison.mx/" target="" className="text-blue-500 hover:underline font-bold">Universidad de Sonora</a>.</p>
                <p className="text-sm font-light">I've had an average note of <strong className="text-purple-500">98 over 100</strong> percent since that year.</p>
              </FrameCard>
            </li>
            
          </ul>
        </main>
      </section>
      <hr className="my-9 border-slate-100/10" />
      <section id="projects">
        <h1 className="text-2xl font-bold tracking-tighter text-center">Projects</h1>
        <main className="px-4 flex flex-col items-center mt-5">
          <ul className=" flex flex-col gap-20 items-center md:[&_li_main]:even:order-1 md:[&_li]:odd:text-right">
            <li>
              <section className="flex flex-col md:flex-row gap-5">
                <figure className="glowing-card basis-1/2 from-color-yellow-100 to-color-orange-700  md:w-[600px]">
                  <Carrousel
                    autoScroll
                    scrollSeconds={5}
                    className="dark:opacity-80"
                    imagesList={[dogosImg1, dogosImg2, dogosImg3]}
                  />
                </figure>
                <main className="basis-1/2">
                  <h2 className="tracking-tight text-2xl font-light">DogOs</h2>
                  <p className="font-light">In this project I was in charge of both Backend and Frontend.</p>
                  <p className="font-light">This software worked as an order delivery manager for a Hot Dog's Stand at first but some plans came out to use throughout the University.</p>
                  <br />
                  <p className="font-light">Frontend application was developed in <strong className="text-blue-400">React</strong>, with no state manager.</p>
                  <p className="font-light"><strong className="text-blue-400">My<span className="text-orange-300">SQL</span></strong> was our database and it was deployed in <strong className="text-orange-400">Aiven</strong>.</p>
                  <p className="font-light">Backend was implemented using <strong className="text-green-400">ExpressJs</strong> and <strong className="text-blue-300">TRPC</strong> for type-safety while writting the API.</p>
                </main>
              </section>
            </li>


            <li>
              <section className="flex flex-col md:flex-row gap-5">
                <figure className="glowing-card basis-1/2 from-color-blue-300 to-color-blue-700 md:w-[600px]">
                  <Carrousel
                    controls="white"
                    autoScroll
                    scrollSeconds={5}
                    className="opacity-80"
                    imagesList={[luismiImg1, luismiImg2, luismiImg3]}
                  />
                </figure>
                <main className="basis-1/2">
                  <h2 className="tracking-tight text-2xl font-light">Luismifix</h2>
                  <p className="font-light">I was in charge of the Frontend and certain parts of the Backend.</p>
                  <p className="font-light">This was an inventory management system but then was extended to be an ecommerce platform with payments using <strong className="text-purple-500 dark:text-purple-300">Stripe </strong> as intermediary.</p>
                  <br />
                  <p className="font-light">Frontend application was developed in <strong className="text-blue-400">React</strong>, without any state manager.</p>
                  <p className="font-light"><strong className="text-green-600 dark:text-green-400">MongoDB</strong> was our database and it was deployed in <strong className="text-green-600 dark:text-green-400">Mongo Atlas</strong>.</p>
                  <p className="font-light">Backend was implemented with purely <strong className="text-green-600 dark:text-green-400">ExpressJs</strong>.</p>
                </main>
              </section>
            </li>
          </ul>
        </main>
      </section >
      <hr className="my-9 border-slate-100/10" />
      <section>
        <h1 className="text-2xl font-bold tracking-tighter text-center">Technologies</h1>

        <main className="flex flex-col md:flex-row gap-4 my-4">
          <div className="p-2 basis-1/3 flex flex-col justify-between">
            <ul className="flex flex-wrap gap-4 justify-center">
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="Javascript"
                  href={javascriptLogo}
                  alt="Javascript logo"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="Typescript"
                  href={typescriptLogo}
                  alt="Typescript logo"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="Python"
                  href={pythonLogo}
                  alt="Python logo"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="Go"
                  href={goLogo}
                  alt="Go logo"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="NodeJS"
                  href={nodejsLogo}
                  alt="NodeJs logo"
                />
              </li>
            </ul>
            <h2 className="mt-8 text-center">Languages and Runtimes</h2>
          </div>

          <div className="p-2 basis-1/3 flex flex-col justify-between">
            <ul className="flex gap-4 flex-wrap justify-center">
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="React"
                  href={reactLogo}
                  alt="React logo"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="TailwindCSS"
                  href={tailwindcssLogo}
                  alt="Tailwind CSS logo"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="Sequelize"
                  href={sequelizeLogo}
                  alt="Sequelize logo"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="Express"
                  href={expressLogo}
                  alt="Express logo"
                  className="invert-100 dark:invert-0"
                />
              </li>
              <li className="basis-1/5 aspect-square">
                <TechIcon
                  displayName="Prisma"
                  href={prismaLogo}
                  alt="Prisma logo"
                  className="invert-100 dark:invert-0"

                />
              </li>
              <li className="basis-1/5">
                <TechIcon
                  displayName="NextJS"
                  href={nextjsLogo}
                  alt="NextJS logo"
                  className="invert-100 dark:invert-0"

                />
              </li>
            </ul>
            <h2 className="mt-8 text-center">Frameworks and Libraries</h2>
          </div>
          <div className="p-2 basis-1/3 flex flex-col justify-between">
            <ul className="flex gap-4 flex-wrap justify-center">
              <li className="basis-20 aspect-square">
                <TechIcon
                  displayName="MySQL"
                  href={mysqlLogo}
                  alt="MySQL logo"
                />
              </li>

              <li className="basis-20 aspect-square">
                <TechIcon
                  displayName="Vite"
                  href={viteLogo}
                  alt="Vite logo"
                />
              </li>
              <li className="basis-20 aspect-square">
                <TechIcon
                  displayName="Docker"
                  href={dockerLogo}
                  alt="Docker logo"
                />
              </li>
            </ul>
            <h2 className="mt-8 text-center ">Other Technologies</h2>
          </div>

        </main>

      </section>

      <hr className="my-9 border-slate-100/10" />



    </>
  );
}
