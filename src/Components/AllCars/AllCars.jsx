import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const AllCars = () => {
  const axiosPublic = useAxiosPublic();

  const { data: cars = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosPublic.get("/brandsCategory");

      return res.data;
    },
  });

  console.log(cars);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {cars.map((car) => (
          <div key={car._id} className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src={car.image}
                alt="cars"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{car.brandName}</h2>
              <p>{car.name}</p>
              <div className="card-actions justify-end">

               <Link>
               <button className="btn bg-[#E02C6D] text-white hover:text-black">Purchase</button>
               </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCars;
