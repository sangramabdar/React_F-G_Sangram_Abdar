import React from "react";
import cn from "../utls/cn";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  label: string;
  type: string;
  className?: string;
}

function _Input({ label, className, error, ...props }: InputProps, ref: any) {
  return (
    <div className="flex flex-col mb-2 text-left">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <input
        ref={ref}
        className={cn(
          "py-3 px-4 block w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none focus:ring-1 focus:ring-accent focus:outline-none text-gray-600 mt-2 focus:bg-accent/10",
          className
        )}
        {...props}
      />

      {error ? <span className="text-red-600/80 mt-2">{error}</span> : null}
    </div>
  );
}

const Input = React.forwardRef(_Input);

export default Input;
