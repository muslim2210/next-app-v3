type DetailProductPageProps = {
  params: { slug: string[] };
};

export default function ProductPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log(params);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">
        {params.slug ? "Detail Product Page" : "Product Page"}
      </h1>
      {params.slug && (
        <>
          <h2>Category : {params.slug[0]}</h2>
          <h2>gender : {params.slug[1]}</h2>
          <h2>id : {params.slug[2]}</h2>
        </>
      )}
    </div>
  );
}
