import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Navbar from "../../Components/Shared/Navbar/Navbar";

const Home = () => {

    const brands = useLoaderData();
    

    return (
        <div>

            <Navbar></Navbar>
             
             <Banner></Banner>

             <div className="mt-10">

             <div className="text-center space-y-4">
                <Link to='/brands'><h1 className="text-4xl font-bold">Our Vehicle <span className="text-[#E02C6D]">Fleet</span></h1></Link>
                <p>Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    brands.map(brand => <Brands key={brand._id} brand = {brand}></Brands>)
                }
                </div>

             </div>
            
        </div>
    );
};

export default Home;