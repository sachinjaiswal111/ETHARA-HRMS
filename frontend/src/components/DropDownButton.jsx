import React from 'react';

function DropDownButton({ value = "PENDING", onChange }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const options = ["PRESENT", "ABSENT", "LEAVE", "PENDING"];

  return (
    <div className="relative w-44 text-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border rounded bg-white flex justify-between items-center"
      >
        {value}
        <svg
          className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 6C15 6 9 10.4189 9 12C9 13.5812 15 18 15 18" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-50 w-full bg-white border rounded">
          {options.map(opt => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDownButton;
