export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-[75px] z-10 w-60 h-screen bg-gray-800">
        <ul className="text-white p-5">
          <li>Home</li>
          <li>Profile</li>
          <li>About</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
