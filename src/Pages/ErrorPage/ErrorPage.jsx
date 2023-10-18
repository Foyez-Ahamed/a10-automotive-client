import { Link } from "react-router-dom";
import errorPic from "../../../src/assets/404.gif"

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">

            <div>
            <img className="object-cover" src={errorPic} alt="" />
            <h1 className="text-4xl text-center font-bold text-red-600">Page Not Found ! <Link to='/'><button className="bg-gray-500 px-6 text-white rounded-md py-2 text-xl">Go Home</button></Link></h1>
            </div>
            
        </div>
    );
};

export default ErrorPage;