import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();
  const { image, name, description, price, type } = details || {};

  return (
    <div className="mt-10 space-y-6">
      
      <section className="flex flex-col lg:flex-row justify-between gap-6 ">
        <div className="flex-1 ">

            <img className="w-full h-full" src={image} alt="" />

        </div>

        <div className="flex-1 mt-10 space-y-6">
            <h1 className="text-3xl">{name}</h1>
            <p>{type}</p>
            <p>{description}</p>
            <p>{price}</p>
            <button className="px-5 py-3 bg-[#E02C6D] text-white font-bold rounded-md">Add to Cart</button>
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;
