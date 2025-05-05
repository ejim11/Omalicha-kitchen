"use client";
import React, { useState } from "react";
import MainContainer from "../MainContainer";
import ContainerWithFixedImages from "../ContainerWithFixedImages";
import BookTableForm from "./BookTableForm";
import Reservation from "./Reservation";

const BookTableComp = () => {
  const [reservationInfo, setReservationInfo] = useState();

  return (
    <MainContainer>
      {reservationInfo ? (
        <Reservation reservation={reservationInfo} />
      ) : (
        <ContainerWithFixedImages
          title="Book your Table"
          text="Any  question or remark ? Just write us a message"
        >
          <div className="border border-[#D1D1D1] px-[9rem] max-2xl:px-[7rem] max-xl:px-[5rem] max-lg:p-[3rem] max-ssm:p-[1.5rem] py-[5rem] bg-[#F4F3E8] relative z-50 mt-[7.3rem] mb-[5rem]">
            <BookTableForm setReservationInfo={setReservationInfo} />
          </div>
        </ContainerWithFixedImages>
      )}
    </MainContainer>
  );
};

export default BookTableComp;
