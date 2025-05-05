import React, { ReactNode } from "react";
import { CiCalendar, CiClock2, CiUser } from "react-icons/ci";
import { PiUsers } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { TbMapPin2 } from "react-icons/tb";
import { convertTo12Hour, formatDate } from "@/utils/formatDate";

type Reservation = {
  id: string;
  date: string;
  fullName: string;
  guests: number;
  message: string;
  phoneNumber: string;
  pickedTime: string;
};

const Reservation = ({ reservation }: { reservation: Reservation }) => {
  const iconClassName = "w-[3rem] h-[3rem] text-black";

  const now = new Date(Date.now()).toISOString();

  const reservationData: { title: string; value: string; icon: ReactNode }[] = [
    {
      title: "Date",
      value: formatDate(reservation.date),
      icon: <CiCalendar className={iconClassName} />,
    },
    {
      title: "Time",
      value: convertTo12Hour(reservation.pickedTime),
      icon: <CiClock2 className={iconClassName} />,
    },
    {
      title: "Party Size",
      value: `${reservation.guests} people`,
      icon: <PiUsers className={iconClassName} />,
    },
    {
      title: "Reserved By",
      value: reservation.fullName,
      icon: <CiUser className={iconClassName} />,
    },
    {
      title: "Contact",
      value: reservation.phoneNumber,
      icon: <FiPhone className={iconClassName} />,
    },
  ];

  return (
    <div className="flex items-center justify-center py-[4rem]">
      <div className="border border-[#D1D1D1] w-[50%] max-xlg:w-[60%] max-xmd:w-[75%] max-smd:w-[90%] max-sm:w-full">
        <div className="bg-[#DDFFDF] text-center py-[3.3rem] font-switzer flex items-center flex-col">
          <p className="font-medium text-[2.4rem] text-[#484848] mb-[0.8rem]">
            Reservation {reservation.id}
          </p>
          <p className="leading-[2.4rem]">{formatDate(now, true)}</p>
          <p className="bg-[#C4FFC8] rounded-[0.4rem] py-[0.4rem] px-[0.8rem] w-max mt-[0.8rem] text-[1.2rem] leading-[2.4rem]">
            Status Confirmed
          </p>
        </div>
        <div className=" py-[6rem] px-[4rem] max-sm:px-[2rem]">
          <div className=" pb-[4rem] border-b border-b-[#D1D1D1]">
            {reservationData.map(
              (data: { title: string; value: string; icon: ReactNode }) => (
                <div
                  key={data.title}
                  className="flex items-center mb-[1.8rem] last:mb-0"
                >
                  <div className="mr-[0.5rem]">{data.icon}</div>
                  <div className="flex flex-col font-switzer">
                    <p className="text-[1.8rem] font-medium text-[#484848]">
                      {data.title}
                    </p>
                    <p className="text-[1.5rem] leading-[1.4rem] text-[#797B78]">
                      {data.value}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="mt-[2rem] bg-[#ECECEC] px-[3rem] py-[2rem] font-switzer">
            <p className="font-medium mb-[2.4rem]">Restaurant Information</p>
            <div className="flex items-center">
              <TbMapPin2 className={iconClassName} />
              <div className="ml-[0.5rem] text-[1.2rem] text-[#797B78]">
                <p className="font-medium text-[1.4rem] text-[#484848]">
                  Restaurant Location
                </p>
                <p>123 Main Street, Anytown, AN 1234</p>
                <p>Phone: (555) 123-2345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
