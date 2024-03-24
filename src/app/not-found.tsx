import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-y-5 items-center justify-center">
      <div className="flex gap-x-4 ">
        <h1 className="text-3xl">404</h1>
        <h2 className="text-3xl">Page Not Found</h2>
      </div>

      <Link href="/" className="bg-blue-700 text-white p-3">
        Back To Home
      </Link>
    </div>
  );
}
