import { Link, useLoaderData } from "react-router-dom";
import carousel1 from "../../assets/carousel1.jpg";
import carouselTwo from "../../assets/carousel2.jpg"
import carouselThree from "../../assets/carousel3 (2).jpg"
import BrandCategories from "../BrandCategories/BrandCategories";

const BrandCategory = () => {
  const brandCategory = useLoaderData();

  return (
    <div>
      <div className="carousel w-full">

        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={carousel1}
            className="w-full lg:h-[350px] object-cover bg-white opacity-60"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
           
          <div className="absolute top-[30%] left-[15%] md:left-[30%] lg:left-[25%] ">
          <h2 className="lg:text-4xl font-bold"><span className="text-[#E02C6D]"> 30% off</span> for All Category product !</h2>
           <div className="flex justify-center items-center lg:mt-8">
          <Link > <button className="px-6 py-3 bg-[#E02C6D] text-white font-bold rounded-md">See details</button></Link>
           </div>
        </div>

        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={carouselTwo}
            className="w-full lg:h-[350px] object-cover bg-white opacity-60"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
           
          <div className="absolute top-[30%] left-[15%] md:left-[30%] lg:left-[25%] ">
          <h2 className="lg:text-4xl font-bold"><span className="text-[#E02C6D]"> 30% off !</span> Excellent Service!</h2>
           <div className="flex justify-center items-center lg:mt-8">
           <button className="px-6 py-3 bg-[#E02C6D] text-white font-bold rounded-md">See details</button>
           </div>
        </div>
        
        </div>


        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={carouselThree}
            className="w-full lg:h-[350px] object-cover bg-white opacity-60"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
           
          <div className="absolute top-[30%] left-[15%] md:left-[30%] lg:left-[25%] ">
          <h2 className="lg:text-4xl font-bold"><span className="text-[#E02C6D]"> 30% off </span> 24/7 road assistance</h2>
           <div className="flex justify-center items-center lg:mt-8">
           <button className="px-6 py-3 bg-[#E02C6D] text-white font-bold rounded-md">See details</button>
           </div>
        </div>
        
        </div>
      </div>


         <div className="mt-10">
            <h1 className="text-center text-4xl font-bold">Available Product</h1>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {
              brandCategory.map(categoryProduct => <BrandCategories key={categoryProduct._id} categoryProduct ={categoryProduct}></BrandCategories>)    
            }
            </div>
         </div>

    </div>
  );
};

export default BrandCategory;
