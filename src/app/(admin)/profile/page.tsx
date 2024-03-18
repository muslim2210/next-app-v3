"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();
  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex flex-col gap-y-3 justify-center items-center">
      <h1 className="text-3xl font-bold">Profile Page</h1>
      <div className="flex flex-col py-3 text-center">
        <h2>{session?.user?.email}</h2>
        <h2>{session?.user?.fullname}</h2>
      </div>
    </div>
  );
}
