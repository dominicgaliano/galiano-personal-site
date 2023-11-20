import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Image from "next/image";
import dominicProfileImage from "../public/dag.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dominic Galiano</title>
        <meta
          name="description"
          content="Coding enthusiast with a passion for technology. Discover my skills and experience through my resume, explore my GitHub projects, and connect with me on LinkedIn."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-space_cadet-800 px-10 md:px-20 lg:px-40 dark:bg-space_cadet-300 font-taviraj">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-3xl font-bold">Dominic Galiano</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-chinese_violet to-african_violet text-white px-4 py-2 rounded-md ml-8"
                  href="https://github.com/dominicgaliano/-current-resume/blob/main/Dominic%20Galiano%20Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-puce rounded-full w-52 h-52 overflow-hidden md:h-96 md:w-96 sm:w-80 sm:h-80">
            <Image
              src={dominicProfileImage}
              layout="fill"
              objectFit="cover"
              alt="Photo of Dominic Galiano"
            />
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-chinese_violet font-medium md:text-6xl dark:text-african_violet">
              Dominic Galiano
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Engineer
            </h3>
            <p className="text-md py-2 leading-8 text-grey-800 dark:text-gray-200 md:text-lg max-w-xl mx-auto">
              I am a versatile full-stack engineer specializing in back-end and cloud
              development. I strive to create scalable and innovative solutions,
              and I am eager to contribute to dynamic projects and stay at the
              forefront of the ever-evolving tech landscape.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 pb-10 text-grey-600 dark:text-gray-400">
            <a href="https://github.com/dominicgaliano">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/dominic-galiano/">
              <BsLinkedin />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
