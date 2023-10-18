import { Link } from "react-router-dom";


const Brands = () => {
    return (
        <div className="mt-10">

            <div className="text-center space-y-4">
                <Link to='/brands'><h1 className="text-4xl font-bold">Our Vehicle Fleet</h1></Link>
                <p>Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
            </div>
            
        </div>
    );
};

export default Brands;