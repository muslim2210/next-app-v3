export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div className="w-full h-[300px] flex justify-center items-center">
        <h1>Layout</h1>
      </div>
    </>
  );
}
