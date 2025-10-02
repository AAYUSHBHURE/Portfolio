import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { ArrowRight } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <Section
          id="hero"
          className="flex min-h-screen items-center justify-center bg-black"
        >
          <div className="text-center">
            <h1 className="text-6xl font-bold">Jules</h1>
            <p className="mt-4 text-xl text-gray-400">
              A passionate software engineer.
            </p>
            <Link
              href="/#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white"
            >
              <span>View my work</span>
              <ArrowRight />
            </Link>
          </div>
        </Section>
        <Section
          id="about"
          className="mx-auto max-w-4xl py-20 text-center"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-gray-400">
            I am a software engineer with a passion for creating beautiful and
            functional web applications. I have experience with a variety of
            technologies, including React, Next.js, and Tailwind CSS.
          </p>
        </Section>
        <Section id="projects" className="py-20">
          <h2 className="text-center text-4xl font-bold">Projects</h2>
          <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard href="#">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Project 1</h3>
                <p className="mt-2 text-gray-400">
                  A short description of the project.
                </p>
              </div>
            </ProjectCard>
            <ProjectCard href="#">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Project 2</h3>
                <p className="mt-2 text-gray-400">
                  A short description of the project.
                </p>
              </div>
            </ProjectCard>
            <ProjectCard href="#">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Project 3</h3>
                <p className="mt-2 text-gray-400">
                  A short description of the project.
                </p>
              </div>
            </ProjectCard>
          </div>
        </Section>
        <Section
          id="contact"
          className="py-20 text-center"
        >
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="mt-4 text-lg text-gray-400">
            I am always open to new opportunities and collaborations.
          </p>
          <a
            href="mailto:test@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white"
          >
            <span>Email me</span>
          </a>
        </Section>
      </main>
      <Footer />
    </div>
  );
}