import Modal from "@/components/core/modal";
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <Modal>
      <img
        src={product.data.image}
        alt=""
        className="w-full h-[500px] object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
          {product.data.name}
        </h3>
        <p className="text-2xl mt-2 font-bold medium text-slate-700">
          Price :{" "}
          <span className="text-slate-700">Rp. {product.data.price}</span>
        </p>
      </div>
    </Modal>
  );
}
