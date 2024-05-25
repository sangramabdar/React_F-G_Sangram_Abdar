import { Link, useParams } from "react-router-dom";
import Button from "./button";

interface FieldProps {
  label: string;
  value: string;
}

function Field({ label, value }: FieldProps) {
  return (
    <div className="flex flex-col text-left gap-1 max-w-80">
      <span className="block text-sm font-bold text-gray-900">{label}</span>
      <div className="font-medium py-3 px-4 block w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none focus:ring-1 focus:ring-tertiary focus:outline-none text-gray-600 focus:bg-accent/10">
        {value}
      </div>
    </div>
  );
}

function FormDetails() {
  let { formId } = useParams();

  const formData = localStorage.getItem(formId || "");

  const data = JSON.parse(formData || "");

  console.log(data);

  return (
    <div>
      <h2 className="font-bold text-xl">Form Details</h2>
      <div className="flex flex-col gap-4 mt-4">
        <Field label="Customer Name" value={data.name} />
        <Field label="Email" value={data.email} />
        <Field label="Phone" value={data.phone} />
      </div>
      <Link to="/">
        <Button className="bg-green-500 mt-4">Back</Button>
      </Link>
    </div>
  );
}

export default FormDetails;
