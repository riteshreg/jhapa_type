import React from 'react';

type Row = {
  normal:{
    nepali:"",
    english:"",
  },
}

const rows = [
  ['1','2','3', '4', '5', '6', '7', '8', '9', 0],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

const Keyboard = () => {
  const handleKeyClick = (key:string) => {
    console.log(`Key pressed: ${key}`);
  };

  return (
    <div className="flex mt-10 flex-col min-h-64 items-center space-y-3 p-6 bg-gray-400 rounded-lg shadow-lg max-w-xl mx-auto">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-1 md:space-x-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => {}}
              className="bg-white hover:bg-blue-100 active:bg-blue-200 text-gray-800 font-semibold py-2 px-3 md:py-3 md:px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
