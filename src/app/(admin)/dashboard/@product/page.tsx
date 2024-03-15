"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=product&secret=bukhory12345",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate success");
      }
    }
  };
  return (
    <div className="w-3/6 h-96 bg-gray-300 flex flex-col justify-center items-center rounded-[12px]">
      <h1>Status: {status}</h1>
      <button
        className="bg-red-500 text-white p-3 m-5"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
