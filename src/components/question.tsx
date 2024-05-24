import { useState } from "react";
import Input from "./input";

function Question({ onChange, question, error }: any) {
  const [checkedValue, setCheckedValue] = useState<any>(null);

  const handleOnChange = (event: any) => {
    if (!checkedValue) setCheckedValue(event.target.value);
    if (checkedValue === event.target.value) setCheckedValue(null);
    else setCheckedValue(event.target.value);

    if (event.target.checked) return onChange(event.target.value);
    onChange("");
  };

  return (
    <div>
      <h2 className="text-left font-bold">
        {question}
        <span className="text-red-600/80">*</span>
      </h2>
      <div className="flex gap-4 md:gap-6 mt-2 flex-wrap">
        <div className="flex w-fit gap-3 justify-center items-center">
          <Input
            className="w-4 h-4 mt-[-2px] accent-tertiary active:ring-0 focus:ring-0"
            type="checkbox"
            value={"excellent"}
            onChange={handleOnChange}
            checked={"excellent" === checkedValue ? true : false}
            label={""}
          />
          <label className="text-xs font-medium">Excellent</label>
        </div>

        <div className="flex w-fit gap-3 justify-center items-center">
          <Input
            className="w-4 h-4 mt-[-2px] accent-tertiary active:ring-0 focus:ring-0"
            type="checkbox"
            value={"good"}
            onChange={handleOnChange}
            checked={"good" === checkedValue ? true : false}
            label={""}
          />
          <label className="text-xs font-medium">Good</label>
        </div>

        <div className="flex w-fit gap-3 justify-center items-center">
          <Input
            className="w-4 h-4 mt-[-2px] accent-tertiary active:ring-0 focus:ring-0"
            type="checkbox"
            value={"fair"}
            onChange={handleOnChange}
            checked={"fair" === checkedValue ? true : false}
            label={""}
          />
          <label className="text-xs font-medium">Fair</label>
        </div>

        <div className="flex w-fit gap-3 justify-center items-center">
          <Input
            className="w-4 h-4 mt-[-2px] accent-tertiary active:ring-0 focus:ring-0"
            type="checkbox"
            value={"bad"}
            onChange={handleOnChange}
            checked={"bad" === checkedValue ? true : false}
            label={""}
          />
          <label className="text-xs font-medium">Bad</label>
        </div>
      </div>
      {error ? (
        <span className="text-red-600/80 text-left block mt-2">{error}</span>
      ) : null}
    </div>
  );
}

export default Question;
