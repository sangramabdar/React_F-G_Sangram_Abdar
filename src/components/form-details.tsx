import React from "react";
import { useParams } from "react-router-dom";

function FormDetails() {
  let { formId } = useParams();

  const formData = localStorage.getItem(formId || "");

  return <div>{formData}</div>;
}

export default FormDetails;
