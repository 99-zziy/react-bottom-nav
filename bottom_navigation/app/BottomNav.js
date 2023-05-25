"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Button = ({ label, onClick, isActive }) => {
  return isActive ? (
    <div
      onClick={onClick}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="0"
        viewBox="0 0 15 15"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        color="rgb(66, 244, 75)"
        style={{ color: "rgb(66, 244, 75)" }}
      >
        <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
      </svg>
      <p style={{ margin: 0, color: "rgb(66, 244, 75)", fontSize: "10px" }}>
        {label}
      </p>
    </div>
  ) : (
    <div
      onClick={onClick}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="0"
        viewBox="0 0 15 15"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        color="rgb(142, 142, 143)"
        style={{ color: "rgb(142, 142, 143)" }}
      >
        <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
      </svg>
      <p style={{ margin: 0, color: "rgb(142, 142, 143)", fontSize: "10px" }}>
        {label}
      </p>
    </div>
  );
};

export default function BottomNav() {
  const router = useRouter();
  const [isActiveList, setActiveList] = useState([true, false, false]);

  const handleActive = (index) => {
    if (index === 0) {
      router.replace("/");
      setActiveList([true, false, false]);
    }
    if (index === 1) {
      router.replace("/business-card");
      setActiveList([false, true, false]);
    }
    if (index === 2) {
      router.replace("/notification");
      setActiveList([false, false, true]);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        height: "64px",
        borderBottom: "1px solid rgb(216, 216, 216)",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgb(216, 216, 216) 0px 0px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #ccc",
          width: "100vw",
          height: "100px",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          label={"커뮤니티"}
          onClick={() => handleActive(0)}
          isActive={isActiveList[0]}
        />
        <Button
          label={"명함첩"}
          onClick={() => handleActive(1)}
          isActive={isActiveList[1]}
        />
        <Button
          label={"알림"}
          onClick={() => handleActive(2)}
          isActive={isActiveList[2]}
        />
      </div>
    </div>
  );
}
