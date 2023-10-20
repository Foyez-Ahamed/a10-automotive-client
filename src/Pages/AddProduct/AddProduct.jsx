import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const name = form.name.value;
    const rating = form.rating.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;

    const addProduct = {image, name, rating, brandName, type, price, description};

    console.log(addProduct);

    fetch('https://automotive-server-site-6fjlltnn5-foyez-ahameds-projects.vercel.app/brandsCategory', {
      method:'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addProduct)
    })
    .then(res => res.json())
    .then(data => {

      if(data.insertedId){
        Swal.fire({
            title: 'success!',
            text: 'Product added successfully',
            icon: 'success',
            confirmButtonText: 'Thanks!'
          })
    }

    form.reset();
    })
  };

  return (
    <div>
      <section className="flex justify-center items-center w-full md:w-full lg:w-3/4 shadow-xl rounded-xl p-3 mx-auto bg-gray-100">
        <div>
          {/* main div */}

          <div>
            <h1 className="text-center text-4xl font-medium">Add Product</h1>
          </div>

          {/* form */}
          <div className="mt-10">
            <form onSubmit={handleAddProduct}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Image</label>
                  <input
                    type="text"
                    placeholder="Image url.."
                    name="image"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Brand Name</label>
                  <select
                    name="brandName"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  >
                     <option value="">Select a Brand</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Honda">Honda</option>
                  </select>
                </div>

                <div className="form-control">
                  <label>Type</label>
                  <input
                    type="text"
                    placeholder="Type "
                    name="type"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Price</label>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Short Description</label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    name="description"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Rating</label>
                  <input
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              {/* add button */}
              <div className="form-control mt-4">
                <label>
                  <input
                    type="submit"
                    value="Add Product"
                    placeholder="Enter photo url"
                    className="input input-bordered w-full bg-[#E02C6D] text-white font-bold"
                  />
                </label>
              </div>
            </form>
          </div>
          {/* form */}

          {/* main div */}
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
