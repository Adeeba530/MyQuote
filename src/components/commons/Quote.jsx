function Quote({ title, description, color = "#ef4444" }) {
  return (
    <blockquote
      className={`
        pl-6 md:pl-10 pr-6 py-8 my-10 md:my-14 max-w-4xl 
        border-l-4 border-opacity-90 text-left
        bg-[#0d1117]/60 rounded-r-xl shadow-sm
      `}
      style={{ borderLeftColor: color }}
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal italic text-white mb-5 tracking-tight">
        {title}
      </h3>

      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 font-serif">
        {description}
      </p>
    </blockquote>
  );
}

export default Quote;