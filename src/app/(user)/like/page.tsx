// "use client";

import { Metadata } from "next";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: "Tay Nguyen Like Page",
  description: "Desc",
};

const LikePage = () => {
  //   const [name, setName] = useState("TayNguyen");
  const handleClick = () => {
    alert("me");
  };
  //   return <div onClick={handleClick}>like page: with name = {name}</div>;
  return <div>like page: with name </div>;
};

export default LikePage;
