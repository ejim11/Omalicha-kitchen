"use client";
import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { reservationTime } from "@/data/reservationTime";
import Link from "next/link";
import { convertTo12Hour, formatDate } from "@/utils/formatDate";
import { sendMessage } from "@/utils/sendMessage";

type FormData = {
  fullName: string;
  phoneNumber: string;
  date: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookTableForm = ({ setReservationInfo }: { setReservationInfo: any }) => {
  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");
  const [timeErr, setTimeError] = useState<string>("");
  const [pickedReservationTime, setPickedReservationTime] =
    useState<string>("");
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);

  const hoursToday = new Date().getHours();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      date: new Date().toISOString().slice(0, 10),
    },
  });

  const filteredReservationTime = reservationTime.filter((time: string) => {
    if (Number(time.split(":")[0]) > hoursToday) {
      return time;
    }
  });

  const resetForm = () => {
    reset({
      fullName: "",
      phoneNumber: "",
      date: new Date().toISOString().slice(0, 10),
    });
    setMessage("");
    setNumberOfGuests(1);
    setPickedReservationTime("");
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    if (filteredReservationTime.length <= 0) {
      return;
    }
    if (message.length > 150) {
      setMsgError("Message should not exceed 150 characters");
      return;
    }

    if (!pickedReservationTime) setTimeError("Please pick a time");

    const randomNum = Math.floor(Math.random() * 10000);
    // Pad to 4 digits
    const id = "RES-" + randomNum.toString().padStart(4, "0");

    const newData = {
      id,
      pickedTime: pickedReservationTime,
      message,
      guests: numberOfGuests,
      ...data,
    };

    setReservationInfo(newData);

    const reservationStr = `Hello, I would love to book a reservation. \n \n Fullname: ${
      newData.fullName
    } \n Date: ${formatDate(newData.date)} \n Time: ${convertTo12Hour(
      newData.pickedTime
    )} \n Guests: ${newData.guests} \n Contact: ${
      newData.phoneNumber
    } \n Special Request: ${newData.message ? newData.message : "none"}`;

    sendMessage(reservationStr);

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-[#484848] w-full">
        <p className="text-[2.4rem] font-switzer font-medium mb-[2rem] ">
          Select Date and Time
        </p>
        <InputComponent
          type={"date"}
          register={register}
          error={errors}
          name={"date"}
          label="Date"
          containerWidth="w-[28.8rem] max-sm:w-full"
          border="border rounded-[1.2rem]"
          pl="pl-[1rem]"
          validation={registrationOption.date}
        />
        <p className="font-medium font-switzer mb-[1.6rem]">
          Available Time Slot
        </p>
        {filteredReservationTime.length > 0 ? (
          <div className="grid grid-cols-4 gap-[2rem] max-smd:grid-cols-3">
            {filteredReservationTime.map((time: string) => (
              <button
                type="button"
                key={time}
                onClick={() => {
                  setPickedReservationTime(time);
                  setTimeError("");
                }}
                className={`${
                  pickedReservationTime === time
                    ? "bg-[#FAEFCA]"
                    : "bg-transparent"
                } hover:bg-amber-50 transition-all duration-150 ease-in cursor-pointer  border border-[rgba(102,102,102,0.35)] py-[1.6rem] text-center rounded-[1.2rem] text-black font-switzer`}
              >
                {time}
              </button>
            ))}
          </div>
        ) : (
          <p>No More Reservation Time</p>
        )}
        {timeErr && (
          <small className="text-red-500 mt-[0.5rem]">{timeErr}</small>
        )}
      </div>
      <p className="mt-[3.2rem] font-switzer font-medium text-[2.4rem] text-[#484848] capitalize mb-[2rem]">
        Reservation details
      </p>
      <InputComponent
        placeholder={"Enter your fullname"}
        type={"text"}
        register={register}
        error={errors}
        name={"fullName"}
        label="Full Name"
        pl="pl-[1rem]"
        containerWidth="w-[45%] max-smd:w-full"
        border="border rounded-[1.2rem]"
        validation={registrationOption.fullname}
      />
      <InputComponent
        placeholder={"Enter your phone number"}
        type={"text"}
        register={register}
        error={errors}
        name={"phoneNumber"}
        label="Phone Number"
        pl="pl-[1rem]"
        containerWidth="w-[45%] max-smd:w-full"
        border="border rounded-[1.2rem]"
        validation={registrationOption.phoneNumber}
      />
      <div className="mb-[2.4rem]">
        <label htmlFor="guests" className="text-[1.4rem] font-poppins ">
          Number of Guest
        </label>
        <div className="w-[25rem] border border-[rgba(102,102,102,0.35)] rounded-[1.2rem] px-[2.3rem] py-[1.3rem]  mt-[0.5rem]">
          <select
            id="guests"
            value={numberOfGuests}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setNumberOfGuests(Number(e.target.value))
            }
            className="w-full h-full outline-hidden ring-0 focus:outline-hidden focus:ring-0"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((val: number) => (
              <option value={val} key={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className="mb-[3rem] text-[2.4rem] font-switzer font-semibold text-[484848] w-full border-b border-b-[#D1D1D1] pb-[1rem]">
          Special Request
        </label>
        <textarea
          rows={5}
          maxLength={150}
          value={message}
          placeholder="Enter your special request"
          onChange={(e: { target: { value: string } }) => {
            setMessage(e.target.value);
            setMsgError("");
          }}
          className="rounded-lg border bg-[#F4F3E8] placeholder:text-[#D1D1D1] font-switzer  border-[#D1D1D1] resize-none focus:ring-0 focus:outline-none outline-none ring-0 p-[1rem] "
        />
        {msgError && (
          <small className="text-red-500 mt-[0.5rem]">{msgError}</small>
        )}
      </div>
      <div className="flex justify-end mt-[2.4rem] max-ssm:flex-col ">
        <Link
          href={"/"}
          className=" w-max py-[1rem] text-center text-[2rem] font-medium  font-switzer  bg-transparent text-[#3F5143] border-secondary-1 px-[8rem] max-smd:px-[3rem] border rounded-[1.6rem] mr-[2rem] max-ssm:w-full"
        >
          Cancel
        </Link>
        <button
          disabled={filteredReservationTime.length <= 0}
          type="submit"
          className=" flex items-center justify-center w-max py-[1rem] text-center text-[2rem] max-ssm:w-full max-ssm:mt-[2.5rem] font-medium  font-switzer rounded-[1.6rem]
           bg-secondary-1 text-[#3F5143] px-[3rem] disabled:bg-gray-100 disabled:text-gray-200 disabled:cursor-not-allowed"
        >
          Confirm Reservation
        </button>
      </div>
    </form>
  );
};

export default BookTableForm;
