import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <div className="container py-24 mx-auto my-10">
      <div className="w-2/5 mx-auto border border-gray-700">
        <img
          src={product.data.image}
          alt=""
          className="w-full h-[500px] object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{product.data.title}</h3>
          <p>Price : ${product.data.price}</p>
        </div>
      </div>
    </div>
  );
}
