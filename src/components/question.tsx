import Input from "./input";

function Question({ onChange, question, error }: any) {
  const handleOnChange = (event: any) => {
    if (event.target.checked) return onChange(event.target.value);
    onChange("");
  };

  return (
    <div>
      <h2 className="text-left">{question}</h2>
      <div className="flex">
        <div className="flex w-fit p-1 gap-2 justify-center items-center">
          <Input
            type="checkbox"
            value={"excellent"}
            onChange={handleOnChange}
            label={""}
          />
          <label>Excellent</label>
        </div>

        <div className="flex w-fit p-1 gap-2 justify-center items-center">
          <Input
            type="checkbox"
            value={"good"}
            onChange={handleOnChange}
            label={""}
          />
          <label>Good</label>
        </div>

        <div className="flex w-fit p-1 gap-2 justify-center items-center">
          <Input
            type="checkbox"
            value={"fair"}
            onChange={handleOnChange}
            label={""}
          />
          <label>fair</label>
        </div>

        <div className="flex w-fit p-1 gap-2 justify-center items-center">
          <Input
            type="checkbox"
            value={"bad"}
            onChange={handleOnChange}
            label={""}
          />
          <label>Bad</label>
        </div>
      </div>
      {error ? (
        <span className="text-red-600/80 mt-2 text-left block">{error}</span>
      ) : null}
    </div>
  );
}

export default Question;
