import { Link, useParams } from "react-router-dom";
import Button from "./button";

interface FieldProps {
  label: string;
  value: string;
}

function Field({ label, value }: FieldProps) {
  return (
    <div className=" max-w-80">
      <span className="block text-sm font-bold text-gray-900">{label}</span>
      <div className="font-medium py-3 px-4 block w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none focus:ring-1 focus:ring-tertiary focus:outline-none text-gray-600 focus:bg-accent/10">
        {value}
      </div>
    </div>
  );
}

function CheckMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 bg-tertiary text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function QuestionField({ answer, label }: any) {
  return (
    <div className="flex flex-col gap-1 mt-1">
      <span className="block text-sm font-bold text-gray-900">{label}</span>
      <div className="flex gap-4 md:gap-6 mt-1 flex-wrap">
        <div className="flex gap-3 justify-center items-center w-fit ">
          {answer === "excellent" ? (
            <CheckMarkIcon />
          ) : (
            <div className="w-4 h-4 border rounded-sm border-black/60"></div>
          )}
          <span className="text-xs font-medium">Excellent</span>
        </div>
        <div className="flex gap-3 justify-center items-center w-fit ">
          {answer === "good" ? (
            <CheckMarkIcon />
          ) : (
            <div className="w-4 h-4 border rounded-sm border-black/60"></div>
          )}
          <span className="text-xs font-medium">Good</span>
        </div>
        <div className="flex gap-3 justify-center items-center w-fit ">
          {answer === "fair" ? (
            <CheckMarkIcon />
          ) : (
            <div className="w-4 h-4 border rounded-sm border-black/60"></div>
          )}
          <span className="text-xs font-medium">Fair</span>
        </div>
        <div className="flex gap-3 justify-center items-center w-fit ">
          {answer === "bad" ? (
            <CheckMarkIcon />
          ) : (
            <div className="w-4 h-4 border rounded-sm border-black/60"></div>
          )}
          <span className="text-xs font-medium">Bad</span>
        </div>
      </div>
    </div>
  );
}

function FormDetails() {
  let { formId } = useParams();

  const formData = localStorage.getItem(formId || "");

  const data = JSON.parse(formData || "");

  return (
    <div>
      <h2 className="font-bold text-xl">Form Details</h2>
      <div className="flex flex-col gap-4 mt-4">
        <Field label="Customer Name" value={data.name} />
        <Field label="Email" value={data.email} />
        <Field label="Phone" value={data.phone} />
        <QuestionField
          label="Please rate the quality of the service you received from your host."
          answer={data.question1}
        />
        <QuestionField
          label="Please rate the quality of your bevarage."
          answer={data.question2}
        />
        <QuestionField
          label="Was out restaurant clean ?."
          answer={data.question3}
        />
        <QuestionField
          label="Please rate your overall dining experience."
          answer={data.question4}
        />
      </div>
      <Link to="/">
        <Button className="bg-green-500 mt-6">Back</Button>
      </Link>
    </div>
  );
}

export default FormDetails;
