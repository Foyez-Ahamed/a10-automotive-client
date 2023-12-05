import { useContext } from "react";
import { useLoaderData  } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  
  const {user} = useContext(AuthContext);

  const details = useLoaderData();
  const { image, name, description, price, type } = details || {};

  const handleAddToCart = () => {
     
     const userEmail = user.email;

     const products = {image, name, description, price, type, details}
     
     const addToCart = {userEmail, products};
     
     fetch('http://localhost:5000/addToCart',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addToCart)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
            title: 'success!',
            text: 'Product add to cart successfully',
            icon: 'success',
            confirmButtonText: 'Thanks!'
          })
    }
     })
  }

  return (
    <div className="mt-10 mb-5 space-y-6">
      
      <section className="flex flex-col lg:flex-row justify-between gap-6 ">
        <div className="flex-1 ">

            <img className="w-full h-full" src={image} alt="" />

        </div>

        <div className="flex-1 mt-10 space-y-6">
            <h1 className="text-3xl">{name}</h1>
            <p>{type}</p>
            <p>{description}</p>
            <p>{price}</p>

            <button onClick={handleAddToCart} className="px-5 py-3 bg-[#E02C6D] text-white font-bold rounded-md">Add to Cart</button>

            
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;
