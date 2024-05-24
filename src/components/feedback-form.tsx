import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./button";
import Input from "./input";

import { z } from "zod";
import { useForm } from "react-hook-form";

export const feedBackFormSchema = z.object({
  name: z.string().min(1, "required"),
  email: z.string().email("invalid email"),
  phone: z.string().min(1, "Required"),
  question1: z.string().min(1, "required"),
});

export type FeedBackFormSchema = z.infer<typeof feedBackFormSchema>;

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

function FeedBackForm() {
  const {
    register,
    handleSubmit: handleSubmitZod,
    formState: { errors },
    setValue,
    setError,
  } = useForm<FeedBackFormSchema>({
    resolver: zodResolver(feedBackFormSchema),
  });

  const handleOnSubmit = (data: FeedBackFormSchema) => {
    console.log(data);
  };

  console.log(errors);

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
            if (!value) {
              setError("question1", { message: "Required" });
              setValue("question1", "");
              return;
            }

            setValue("question1", value);
            setError("question1", { message: "" });
          }}
          error={errors.question1?.message}
        />

        <Button type="submit" className="bg-green-500 text-white">
          Submit Review
        </Button>
      </form>
    </div>
  );
}

export default FeedBackForm;
