import { Link, Navigate, useParams } from "react-router-dom";
import Button from "./button";
import CheckMarkIcon from "./check-mark-icon";

interface FieldProps {
  label: string;
  value: string;
}

function Field({ label, value }: FieldProps) {
  return (
    <div className="max-w-80 space-y-1">
      <span className="block text-sm font-bold text-gray-900">{label}</span>
      <div className="font-medium py-3 px-4 block w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none focus:ring-1 focus:ring-tertiary focus:outline-none text-gray-600 focus:bg-accent/10">
        {value}
      </div>
    </div>
  );
}

interface QuestionFieldProps {
  question: string;
  answer: string;
}

function QuestionField({ answer, question }: QuestionFieldProps) {
  return (
    <div className="flex flex-col gap-1 mt-1">
      <span className="block text-sm font-bold text-gray-900">{question}</span>
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

  const localFormData = localStorage.getItem(formId || "");

  if (!localFormData) {
    return <Navigate to="/" />;
  }

  const formData = JSON.parse(localFormData || "");

  return (
    <div className="bg-secondary px-4 py-6 rounded-md">
      <h2 className="font-bold text-xl">Form Details</h2>
      <div className="flex flex-col gap-4 mt-4">
        <Field label="Customer Name" value={formData.name} />
        <Field label="Email" value={formData.email} />
        <Field label="Phone" value={formData.phone} />
        <QuestionField
          question="Please rate the quality of the service you received from your host."
          answer={formData.question1}
        />
        <QuestionField
          question="Please rate the quality of your bevarage."
          answer={formData.question2}
        />
        <QuestionField
          question="Was out restaurant clean ?."
          answer={formData.question3}
        />
        <QuestionField
          question="Please rate your overall dining experience."
          answer={formData.question4}
        />
      </div>
      <Link to="/">
        <Button className="bg-green-500 mt-6">Back</Button>
      </Link>
    </div>
  );
}

export default FormDetails;
