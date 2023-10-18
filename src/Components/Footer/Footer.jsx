import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo (2).png"
import { AiFillPhone, AiTwotoneMail, AiFillHome } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
      
        <>

        <footer className="bg-gray-500">
        <section className="flex flex-col md:flex-row lg:flex-row  justify-between p-4 md:p-4 lg:p-10 text-white space-y-5">

<div>
    <img className="w-[120px] object-cover" src={logo} alt="" />
    <p><span className="text-[#E02C6D]">Automotive Care</span><br/>Providing reliable tech since 1992</p>
</div>

<div>
    <h1 className="font-bold">Contact Info</h1>
     <ul className="mt-4">
        <li className="flex items-center gap-2"> <AiFillHome></AiFillHome> Green road, Dhaka 1216</li>
        <li className="flex items-center gap-2"><AiFillPhone></AiFillPhone> +88016122</li>
        <li className="flex items-center gap-2"><AiTwotoneMail></AiTwotoneMail>foyez@gmail.com</li>
     </ul>
</div>

<div>
    <h1 className="font-bold">Quick Links</h1>
 <nav>
 <ul className="mt-2">
<NavLink
to="/"
className={({ isActive, isPending }) =>
  isActive
    ? "text-[#E02C6D] underline"
    : isPending
    ? "pending"
    : ""
}
>
<li className="text-[16px] mb-2">Home</li>
</NavLink>
<NavLink
to="/addProduct"
className={({ isActive, isPending }) =>
  isActive
    ? "text-[#E02C6D] underline"
    : isPending
    ? "pending"
    : ""
}
>
<li className="text-[16px] mb-2">Add Product</li>
</NavLink>

<NavLink
to="/myCart"
className={({ isActive, isPending }) =>
  isActive
    ? "text-[#E02C6D] underline"
    : isPending
    ? "pending"
    : ""
}
>
<li className="text-[16px]">My Cart</li>
</NavLink>
</ul>
 </nav>
</div>

<div className="flex gap-4">
  <a href=""> <span className="text-2xl"><FaFacebook></FaFacebook></span> </a>
  <a href=""> <span className="text-2xl"><FaTwitter></FaTwitter></span> </a>
  <a href=""> <span className="text-2xl"><FaLinkedin></FaLinkedin></span> </a>
</div>

</section>
   
   <h1 className="text-center text-white py-3"> <p>Copyright © 2023 - All right reserved by Automotive care</p></h1>
        </footer>

        

        </>
            
    );
};

export default Footer;






