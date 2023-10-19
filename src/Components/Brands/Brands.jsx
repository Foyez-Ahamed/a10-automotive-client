import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { _id, name, photo } = brand;

  return (
    <div className="mt-10">

      <div className="shadow-md rounded-md">
        <figure>
          <img
            className="h-[200px] w-full object-cover rounded-md"
            src={photo}
            alt="brands"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>

    </div>
  );
};

export default Brands;
