"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`,
    fetcher
  );

  console.log(data);

  const product = {
    data: data?.data,
  };
  return (
    <div className="container py-24 mx-auto my-10">
      <div className="w-2/5 mx-auto border border-gray-700">
        <img
          src={product.data?.image}
          alt=""
          className="w-full h-[500px] object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{product.data?.name}</h3>
          <p>Price : Rp. {product.data?.price}</p>
        </div>
      </div>
    </div>
  );
}
