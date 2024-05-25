import React from 'react';

export const Input = ({
  label,
  id,
  type = 'text',
  value,
  min = '0',
  max = '0',
  maxLength = '524288',
  onChange,
  required,
  isImage = false,
}) => {
  return (
    <div className="my-2 w-full">
      <label htmlFor={id} className="block sm:text-lg">
        {required ? (
          <p>
            {label}
            <span className="text-xs text-neutral-500"> (Required)</span>
          </p>
        ) : isImage ? (
          <p>
            {label}
            <span className="text-xs text-neutral-500">
              {' '}
              (Must be a valid and accessible URL )
            </span>
          </p>
        ) : (
          <p>{label}</p>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        maxLength={maxLength}
        name={id}
        className="w-full rounded-md border border-b-neutral-500 bg-none p-2 outline-none"
      />
    </div>
  );
};
