"use client";

import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div style={{ position: "fixed", bottom: 0 }}>
      <button onClick={() => router.replace("/")}>커뮤니티</button>
      <button onClick={() => router.replace("/business-card")}>명함첩</button>
      <button onClick={() => router.replace("/notification")}>알림</button>
    </div>
  );
}
