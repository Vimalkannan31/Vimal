import React from 'react';

const CustomInput = ({ name, label, required, register, errors, disabled = false, multiline, rows,placeholder, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          id={name}
          {...register(name)}
          rows={rows}
          placeholder={placeholder}
          className={`mt-1 w-full text-sm p-2 border rounded-lg bg-transparent ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:border-blue-500 disabled:bg-gray-100`}
          disabled={disabled}
          {...props}
        />
      ) : (
        <input
          id={name}
          {...register(name)}
          type="text"
          placeholder={placeholder}
          className={`mt-1 w-full text-sm p-2 border-b-2 bg-transparent ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:border-blue-500 disabled:bg-gray-100`}
          disabled={disabled}
          {...props}
        />
      )}
      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default CustomInput;
