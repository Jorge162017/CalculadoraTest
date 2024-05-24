import React from 'react';

const Display = ({ value }) => (
  <input type="text" value={value} className="text-right text-5xl w-72 bg-transparent text-white px-4 font-light" readOnly />
);

export default Display;
