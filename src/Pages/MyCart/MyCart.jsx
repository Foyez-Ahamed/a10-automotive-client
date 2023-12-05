import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedCarts = useLoaderData();

  const [carts, setCarts] = useState(loadedCarts);

  const handleDelete = (_id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/addToCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = carts.filter(cart => cart._id !== _id);
               setCarts(remaining);
            }
          });
      }
    });
  };

  

  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-10 gap-6">
        {carts.map((cart) => (
          <div
            key={cart._id}
            className="card card-compact bg-base-100 dark:bg-black shadow-xl"
          >
            <figure>
              <img src={cart.products.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cart.products.name}</h2>
              <div className="card-actions justify-start">
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
