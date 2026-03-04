
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";

const PathwayData = [
  {
    title: "For Developers & Technologists",
    color: "#ef4444",  
    quote: (
      <>
        Start with{" "}
        <a href="#" className="underline decoration-gray-500 hover:decoration-gray-200">
          Programming as Spiritual Practice
        </a>
        , then explore the{" "}
        <a href="#" className="underline decoration-gray-500 hover:decoration-gray-200">
          "For Humans" philosophy
        </a>{" "}
        behind tools like Requests. See how technical excellence and human consciousness can evolve together.
      </>
    ),
  },
  {
    title: "For AI & Consciousness Researchers",
    color: "#ef4444",
    quote: (
      <>
        Begin with{" "}
        <a href="#" className="underline decoration-gray-500 hover:decoration-gray-200">
          Consciousness as Linguistic Phenomenon
        </a>
        , then dive into the{" "}
        <a href="#" className="underline decoration-gray-500 hover:decoration-gray-200">
          complete consciousness framework
        </a>
        . Discover why this research might revolutionize our understanding of mind itself.
      </>
    ),
  },
  {
    title: "For Cultural Critics & Philosophers",
    color: "#ef4444",
    quote: (
      <>
        Start with{" "}
        <a href="#" className="underline decoration-gray-500 hover:decoration-gray-200">
          When Values Eat Their Young
        </a>
        , then explore the{" "}
        <a href="#" className="underline decoration-gray-500 hover:decoration-gray-200">
          algorithmic critique series
        </a>
        . Understand how technology systems are reshaping human consciousness at scale.
      </>
    ),
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-serif">
      <Header />

      <main className="py-16 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
   
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center md:text-left">
          New here? Choose your pathway into the work:
        </h2>

        {PathwayData.map((item, index) => (
          <Quote
            key={index}
            quote={item.quote}
            name={item.title} 
            color={item.color}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;