"use client";
import Modal from "@/components/core/modal";
// import { getData } from "@/services/products";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
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
    <Modal>
      <img
        src={product.data?.image}
        alt=""
        className="w-full h-[500px] object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
          {product.data?.name}
        </h3>
        <p className="text-2xl mt-2 font-bold medium text-slate-700">
          Price :{" "}
          <span className="text-slate-700">Rp. {product.data?.price}</span>
        </p>
      </div>
    </Modal>
  );
}
