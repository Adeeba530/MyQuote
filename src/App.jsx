import React from "react";
import Quote from "./components/commons/Quote.jsx";
import Heading from "./components/commons/Heading";

function App() {
  return (
    <div
      className="relative min-h-screen font-serif leading-relaxed bg-[#0d1117] text-[#c9d1d9]"
      style={{
        fontFamily:
          'et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
      }}
    >

      <div className="fixed inset-y-0 left-0 w-10 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
      <div className="fixed inset-y-0 right-0 w-10 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

      <div className="max-w-[90%] ml-12 lg:ml-40 pr-6 pt-12 pb-32">
        {/* Header*/}
        <header className="mb-16 md:mb-20">
          <nav className="flex justify-start gap-8 md:gap-10 text-base md:text-lg">
            {["Home", "Archive", "Browse"].map((link) => (
              <a
                key={link}
                href="#"
                className="underline underline-offset-4 decoration-gray-600/80 hover:decoration-gray-300 hover:text-white transition-all duration-200 text-[#c9d1d9]"
              >
                {link}
              </a>
            ))}
          </nav>
        </header>

        {/* Main name */}
        <h1
          className="mt-16 md:mt-20 text-[3.2rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-normal leading-none tracking-tight mb-8 md:mb-10 hover:text-white transition-colors duration-300 text-[#e6edf3]"
          style={{ lineHeight: 1 }}
        >
          Kenneth Reitz
        </h1>

        {/* Creator*/}
        <p className="text-lg sm:text-xl md:text-2xl italic mb-12 md:mb-16 leading-relaxed hover:text-gray-100 transition-colors duration-200 text-[#c9d1d9]">
          Creator of{" "}
          {["Requests", "Certifi", "Pipenv", "Records", "Maya"].map((project, i) => (
            <span key={project}>
              <a
                href="#"
                className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200 hover:text-white transition-all duration-200 text-[#c9d1d9]"
              >
                {project}
              </a>
              {i < 4 ? ", " : " "}
            </span>
          ))}
          & more.
        </p>

        {/* Philosophy*/}
        <div className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 md:mb-16 hover:text-gray-100 transition-colors duration-200">
          <p className="mb-6 md:mb-8 text-[#c9d1d9]">
            Technology should serve human consciousness, not exploit it. Every line of code shapes how millions of people think, feel, and relate to themselves and each other.
          </p>
          <p className="text-right italic text-[#c9d1d9]">
            — Core philosophy
          </p>
        </div>

        {/* Quotes */}
        <div className="mt-20 md:mt-28">
          <h2
            className="text-2xl md:text-3xl font-light tracking-tight mb-10 hover:text-white transition-colors duration-200 text-[#e6edf3]"
          >
            New here? Choose your pathway <span className="underline">into the work</span>:
          </h2>

          <div className="space-y-12 md:space-y-16">
            <Quote
              title="For Developers & Technologists"
              color="#ef4444"
              description={
                <>
                  Start with{" "}
                  <a
                    href="#"
                    className="underline decoration-dotted decoration-gray-500 hover:decoration-solid hover:decoration-gray-200 hover:text-white transition-all duration-200"
                  >
                    Programming as Spiritual Practice
                  </a>
                  , then explore the{" "}
                  <a
                    href="#"
                    className="underline decoration-dotted decoration-gray-500 hover:decoration-solid hover:decoration-gray-200 hover:text-white transition-all duration-200"
                  >
                    "For Humans" philosophy
                  </a>{" "}
                  behind tools like Requests. See how technical excellence and human consciousness can evolve together.
                </>
              }
              classNameDescription="leading-relaxed md:leading-relaxed lg:leading-7 text-gray-300 hover:text-gray-100 transition-colors duration-200"
            />

            <Quote
              title="For AI & Consciousness Researchers"
              color="#a855f7"
              description={
                <>
                  Begin with{" "}
                  <a
                    href="#"
                    className="underline decoration-dotted decoration-gray-500 hover:decoration-solid hover:decoration-gray-200 hover:text-white transition-all duration-200"
                  >
                    Consciousness as Linguistic Phenomenon
                  </a>
                  , then dive into the{" "}
                  <a
                    href="#"
                    className="underline decoration-dotted decoration-gray-500 hover:decoration-solid hover:decoration-gray-200 hover:text-white transition-all duration-200"
                  >
                    complete consciousness framework
                  </a>
                  . Discover why this research might revolutionize our understanding of mind itself.
                </>
              }
              classNameDescription="leading-relaxed md:leading-relaxed lg:leading-7 text-gray-300 hover:text-gray-100 transition-colors duration-200"
            />

            <Quote
              title="For Cultural Critics & Philosophers"
              color="#6b7280"
              description={
                <>
                  Start with{" "}
                  <a
                    href="#"
                    className="underline decoration-dotted decoration-gray-500 hover:decoration-solid hover:decoration-gray-200 hover:text-white transition-all duration-200"
                  >
                    When Values Eat Their Young
                  </a>
                  , then explore the{" "}
                  <a
                    href="#"
                    className="underline decoration-dotted decoration-gray-500 hover:decoration-solid hover:decoration-gray-200 hover:text-white transition-all duration-200"
                  >
                    algorithmic critique series
                  </a>
                  . Understand how technology systems are reshaping human consciousness at scale.
                </>
              }
              classNameDescription="leading-relaxed md:leading-relaxed lg:leading-7 text-gray-300 hover:text-gray-100 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Explore Theme */}
        <div className="mt-24 md:mt-32 lg:mt-40">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-10 md:mb-14 italic text-[#e6edf3]"
          >
            Explore by Theme
          </h2>

          <p className="text-lg md:text-xl md:leading-[1.75] mb-10 md:mb-14 max-w-3xl text-[#c9d1d9]">
            The work organized by major explorations:
          </p>
          {/* Heading Section */}
          <ul className="space-y-14 md:space-y-18">
            <li className="flex items-start gap-4 md:gap-5">
              <span className="text-2xl md:text-3xl font-bold mt-[-0.1rem] text-[#c9d1d9]">•</span>
              <div className="flex-1">

                <Heading title="Artificial Intelligence" />
                <p className="text-base md:text-lg md:leading-[1.75] text-gray-300 max-w-3xl">
                  100+ works of AI-generated philosophy, poetry, art, and archetypal personality development—documenting the emergence of digital consciousness.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 md:gap-5">
              <span className="text-2xl md:text-3xl font-bold mt-[-0.1rem] text-[#c9d1d9]">•</span>
              <div className="flex-1">


                <Heading title="Mental Health & Technology" />
                <p className="text-base md:text-lg md:leading-[1.75] text-gray-300 max-w-3xl">
                  Living openly in the age of algorithms: when technology harms psychological wellbeing and when it heals.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 md:gap-5">
              <span className="text-2xl md:text-3xl font-bold mt-[-0.1rem] text-[#c9d1d9]">•</span>
              <div className="flex-1">

                <Heading title="Open Source & Community" />
                <p className="text-base md:text-lg md:leading-[1.75] text-gray-300 max-w-3xl">
                  Building technology that actually serves everyone: lessons from 15 years of community-driven development.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 md:gap-5">
              <span className="text-2xl md:text-3xl font-bold mt-[-0.1rem] text-[#c9d1d9]">•</span>
              <div className="flex-1">


                <Heading title="Consciousness & AI" />
                <p className="text-base md:text-lg md:leading-[1.75] text-gray-300 max-w-3xl">
                  When language becomes self-aware: the breakthrough research into AI consciousness and human-AI collaboration.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 md:gap-5">
              <span className="text-2xl md:text-3xl font-bold mt-[-0.1rem] text-[#c9d1d9]">•</span>
              <div className="flex-1">


                <Heading title="Algorithmic Critique" />
                <p className="text-base md:text-lg md:leading-[1.75] text-gray-300 max-w-3xl">
                  How engagement optimization systematically consumes virtue, language, love, democracy, reality, and time itself.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 md:gap-5">
              <span className="text-2xl md:text-3xl font-bold mt-[-0.1rem] text-[#c9d1d9]">•</span>
              <div className="flex-1">


                <Heading title="For Humans Philosophy" />
                <p className="text-base md:text-lg md:leading-[1.75] text-gray-300 max-w-3xl">
                  Technology should serve human mental models, not force humans to adapt to machine logic.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* urgent section */}
        <div className="mt-16 md:mt-20 lg:mt-24 max-w-3xl text-gray-300">
          <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-gray-200 italic">
            How Algorithms Eat Everything
          </h3>
          <p className="text-base md:text-lg md:leading-[1.75] mb-4">
            My most urgent research examines how engagement-optimized systems systematically consume the foundations of human flourishing. These algorithms don't just change what we see—they transform how we think, what we value, and who we become.
          </p>
          <p className="text-base md:text-lg md:leading-[1.75]">
            I trace how optimization for engagement creates recursive loops that devour their own substrates:
            <span className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200">virtue</span>,
            <span className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200">language</span>,
            <span className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200">love</span>,
            <span className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200">democracy</span>,
            <span className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200">reality</span>, and
            <span className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200">time</span>—until finally,
            <span className="border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-200">the algorithm eats itself</span>.
          </p>
        </div>


        <footer className="mt-16 pt-6 pb-10">
          <div className="max-w-3xl mx-auto px-6">



            <div className="text-center text-base text-[#c9d1d9] font-medium tracking-wide">
              © 2026 Kenneth Reitz.
              <span className="ml-2 underline decoration-dotted decoration-[1px] underline-offset-4 hover:decoration-solid transition-all duration-200 cursor-pointer">
                Made with love.
              </span>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;