import React from "react";

function FormInput({ label, name, type, value, onChange, error }) {
  const inputType = type === "textarea" ? "textarea" : "input";

  const props = {
    label,
    name,
    type,
    value,
    onChange: (event) => onChange(event.target.value),
    className:
      type === "textarea"
        ? "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
        : "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md",
    error,
  };

  return (
    <div>
      <label className='text-gray-700 dark:text-gray-900' htmlFor={name}>
        {label}
      </label>
      {React.createElement(inputType, props)}
    </div>
  );
}

export default FormInput;
