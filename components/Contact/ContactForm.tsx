"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { sendMessage } from "@/utils/sendMessage";

type FormData = {
  fullName: string;
  email: string;
};

const ContactUsForm = () => {
  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const resetForm = () => {
    reset({
      fullName: "",
      email: "",
    });
    setMessage("");
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    if (!message) {
      setMsgError("Please enter some message");
      return;
    }
    if (message.length > 150) {
      setMsgError("Message should not exceed 150 characters");
      return;
    }

    const contactStr = `Hello I want to contact you on: \n \n Message:${message} \n ${data.fullName} \n ${data.email}`;

    sendMessage(contactStr);

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        placeholder={"Enter your name"}
        type={"text"}
        register={register}
        error={errors}
        name={"fullName"}
        label="Name"
        pl="pl-[1rem]"
        containerWidth="w-full"
        validation={registrationOption.fullname}
      />
      <InputComponent
        placeholder={"Enter your email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        label="Email"
        pl="pl-[1rem]"
        containerWidth="w-full"
        validation={registrationOption.email}
      />

      <div className="flex flex-col w-full">
        <label className="mb-[0.5rem] text-[1.4rem] font-poppins">
          Message
        </label>
        <textarea
          rows={4}
          maxLength={150}
          required
          value={message}
          placeholder="Enter your message"
          onChange={(e: { target: { value: string } }) => {
            setMessage(e.target.value);
          }}
          className="rounded-lg border bg-[#F4F3E8] placeholder:text-[#D1D1D1] font-switzer  border-[#D1D1D1] resize-none focus:ring-0 focus:outline-none outline-none ring-0 p-[1rem] "
        />
        <small>{msgError}</small>
      </div>
      <button
        type="submit"
        className="mt-[2.4rem] flex items-center justify-center w-full py-[1rem] text-center text-[2rem] font-medium  font-switzer rounded-md bg-secondary-1 text-black"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
