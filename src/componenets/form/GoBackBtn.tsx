import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const GoBackBtn = () => {
  return (
    <Link className="flex items-center mb-6" href={`/`}>
      <IoMdArrowBack /> Back
    </Link>
  );
};

export default GoBackBtn;
