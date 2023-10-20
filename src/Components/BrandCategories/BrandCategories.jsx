import { Link } from "react-router-dom";

const BrandCategories = ({ categoryProduct }) => {

    const { _id, image, name, brandName, type, price, rating} = categoryProduct || {};

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src= {image}
            className="lg:h-[250px] md:h-[250px] object-cover w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-7 font-medium">
          <h2>
           Name : {name}
          </h2>
          <p>Brand Name : {brandName}</p>
          </div>
          <p className="font-medium">Type : {type}</p>
           <div className="flex flex-col lg:flex-row justify-between gap-2 font-medium">
            <p>Price : {price}</p>
            <p>Rating : 5/{rating}</p>
           </div>
          <div className="card-actions mt-6 ">
            <Link to={`/productDetails/${_id}`}><button className="px-4 py-1 bg-gray-500 rounded-md text-white font-medium">Details</button></Link>

            <Link to={`/updateProduct/${_id}`} ><button className="px-4 py-1 bg-gray-500 rounded-md text-white font-medium">Update</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCategories;
