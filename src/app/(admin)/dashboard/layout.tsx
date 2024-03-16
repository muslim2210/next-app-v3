export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5 py-24">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center gap-5">
        {products}
        {analytics}
      </div>
      {payments}
    </div>
  );
}
