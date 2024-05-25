import React from "react";
import cn from "../utls/cn";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  label?: string;
  type: string;
  className?: string;
  required?: boolean;
}

function _Input(
  { label, className, error, required, ...props }: InputProps,
  ref: any
) {
  return (
    <div className="flex flex-col text-left gap-1">
      {label && (
        <label className="block text-sm font-bold text-gray-900">
          {label}
          {required && <span className="text-red-600/80">*</span>}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "font-medium py-3 px-4 block w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none focus:ring-1 focus:ring-tertiary focus:outline-none text-gray-600 focus:bg-accent/10",
          className
        )}
        {...props}
      />

      {error ? <span className="text-red-600/80">{error}</span> : null}
    </div>
  );
}

const Input = React.forwardRef(_Input);

export default Input;
