"use client";
import Link from "next/link";
import Image from "next/image";
// import { getData } from "@/services/products";
import useSWR from "swr";
type ProductPageProps = {
  params: { slug: string[] };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductPage(props: ProductPageProps) {
  const { params } = props;

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product`,
    fetcher
  );

  console.log(data);

  const products = {
    data: data?.data,
  };

  return (
    <div className="grid grid-cols-4 py-24 mt-11 gap-2 mr-10">
      {/* <h1>{params.slug ? "Detail Porduct Page" : "Product Page"}</h1> */}

      {products.data?.length > 0 &&
        products.data?.map((product: any) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="relative z-0 m-10 w-full max-w-[350px] overflow-hidden rounded-xl bg-white shadow-md my-5"
          >
            <img
              className="h-[300px] w-full rounded-t-xl object-cover"
              src={product.image}
              alt="product image"
            />
            {/* <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={350}
              priority
              className="h-80 w-full rounded-t-lg object-cover"
            /> */}
            {/* <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
              Sale
            </span> */}
            <div className="mt-4 px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-slate-900 truncate">
                {product.name}
              </h5>

              <div className="mt-2.5 mb-5 flex items-center">
                <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-y-4">
                <p>
                  <span className="text-2xl font-bold text-start text-slate-900">
                    Rp. {product.price}
                  </span>
                </p>
                <div className="max-w-[200px]">
                  <button
                    type="button"
                    className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      {params.slug && (
        <>
          <p>Category: {params.slug[0]}</p>
          <p>Gender: {params.slug[1]}</p>
          <p>Id: {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
