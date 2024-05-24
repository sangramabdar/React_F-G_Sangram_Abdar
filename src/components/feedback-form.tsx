import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./button";
import Input from "./input";
import { useForm } from "react-hook-form";
import {
  FeedBackFormSchema,
  feedBackFormSchema,
} from "../schemas/feedback-form-schema";
import Question from "./question";
import { useNavigate } from "react-router-dom";

function FeedBackForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit: handleSubmitZod,
    formState,
    setValue,
    setError,
    clearErrors,
  } = useForm<FeedBackFormSchema>({
    resolver: zodResolver(feedBackFormSchema),
  });

  const errors = formState.errors;

  const handleOnAnswerChange = (value: string, question: any) => {
    if (!value) {
      setError(question, { message: "Required" });
      setValue(question, "");
      return;
    }

    setValue(question, value);
    clearErrors(question);
  };

  const handleOnSubmit = (data: FeedBackFormSchema) => {
    navigate("/");
  };

  return (
    <div className="bg-red-200 p-2">
      <h1>Aromatic bar</h1>
      <form onSubmit={handleSubmitZod(handleOnSubmit)}>
        <Input
          type="string"
          label="Customer Name"
          placeholder="Eg jon snow"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          type="string"
          label="Email"
          placeholder="Eg abc@gmail.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          type="string"
          label="Phone"
          placeholder="9999999999"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Question
          question={"Question-1"}
          onChange={(value: string) => {
            handleOnAnswerChange(value, "question1");
          }}
          error={errors.question1?.message}
        />

        <Question
          question={"Question-2"}
          onChange={(value: string) => {
            handleOnAnswerChange(value, "question2");
          }}
          error={errors.question2?.message}
        />

        <Question
          question={"Question-3"}
          onChange={(value: string) => {
            handleOnAnswerChange(value, "question3");
          }}
          error={errors.question3?.message}
        />

        <Question
          question={"Question-4"}
          onChange={(value: string) => {
            handleOnAnswerChange(value, "question4");
          }}
          error={errors.question4?.message}
        />

        <Button type="submit" className="bg-green-500 text-white">
          Submit Review
        </Button>
      </form>
    </div>
  );
}

export default FeedBackForm;
