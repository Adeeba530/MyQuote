import React from "react";

function Heading({ title }) {
  return (
    <div
      className="text-xl md:text-2xl font-medium
  inline-block
  border-b border-dotted border-gray-400
  hover:border-solid hover:border-gray-200 hover:text-white
  transition-all duration-200
  leading-tight"
      style={{ color: '#c9d1d9' }}
    >
      {title}
    </div>
  );
}

export default Heading;