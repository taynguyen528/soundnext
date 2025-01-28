"use client";
import React, { useState } from "react";

const LikePage = () => {
    const [name, setName] = useState("TayNguyen");
    const handleClick = () => {
        alert("me");
    };
    return <div onClick={handleClick}>like page: with name = {name}</div>;
};

export default LikePage;
