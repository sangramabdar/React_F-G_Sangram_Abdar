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
    let key = Date.now().toString();
    localStorage.setItem(key, JSON.stringify(data));
    navigate("/thank-you");
  };

  return (
    <div className="">
      <h1 className="text-left p-4 bg-secondary text-xl font-bold rounded-lg">
        Aromatic bar
      </h1>
      <form
        onSubmit={handleSubmitZod(handleOnSubmit)}
        className="mt-6 px-4 py-6 bg-secondary"
      >
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
            <Input
              type="string"
              label="Customer Name"
              placeholder="Eg jon snow"
              error={errors.name?.message}
              required
              {...register("name")}
            />

            <Input
              required
              type="string"
              label="Email"
              placeholder="Eg abc@gmail.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              required
              type="string"
              label="Phone"
              placeholder="9999999999"
              error={errors.phone?.message}
              {...register("phone")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 mt-12 md:mt-6">
            <Question
              question={
                "Please rate the quality of the service you received from your host."
              }
              onChange={(value: string) => {
                handleOnAnswerChange(value, "question1");
              }}
              error={errors.question1?.message}
            />
            <Question
              question={"Please rate the quality of your bevarage."}
              onChange={(value: string) => {
                handleOnAnswerChange(value, "question2");
              }}
              error={errors.question2?.message}
            />
            <Question
              question={"Was out restaurant clean ?"}
              onChange={(value: string) => {
                handleOnAnswerChange(value, "question3");
              }}
              error={errors.question3?.message}
            />
            <Question
              question={"Please rate your overall dining experience."}
              onChange={(value: string) => {
                handleOnAnswerChange(value, "question4");
              }}
              error={errors.question4?.message}
            />
          </div>
        </div>

        <div className="flex md:justify-end">
          <Button type="submit" className="bg-green-500 text-white mt-8">
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FeedBackForm;
