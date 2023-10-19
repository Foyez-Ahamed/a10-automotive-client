import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";



const SignUp = () => {

    const [showPassIcon, setShowPassIcon] = useState(false);

    return (
        <div>
         
         <div className="flex justify-center">

<div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl bg-gray-100">

<div>
<h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">Sign up here please</h1>
</div>


<form>

<div className="relative">

<label htmlFor="name">Name</label> <br /> 
<input type= "Text"
 placeholder="enter your name..." name="name" required className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]" /> <br />

 <label htmlFor="photoURL">Photo URL</label> <br /> 
<input type= "text"
 placeholder="Photo URL..." name="photoURL" required className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]" /> <br />    

<label htmlFor="email">Email address</label> <br /> 
<input type= "email"
 placeholder="enter your email..." name="email" required className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]" /> <br />

<label htmlFor="password">Password</label> <br />
<input type = {showPassIcon ? "text" : "password"} placeholder="enter your password" required name="password" className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"/>

 <br />

 <span onClick={() => setShowPassIcon(!showPassIcon)} className="cursor-pointer absolute right-[10px] top-[368px]">

 {
    showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
 }

 </span>

 <input type="checkbox" name="terms" id="terms" className="mt-5" />
 <label htmlFor="terms" className="ml-2">Accepted our <a href="" className="text-[#403F3F]">terms and conditions</a></label> <br />


<input type="submit" value= "Sign Up" className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#E02C6D] text-white hover:bg-gray-600" />
</div>

</form>



<div className="mt-5">
    <p> Already have an account ? <Link to='/signIn' className="text-bold text-[#1877F2] text-md uppercase underline">Sign In</Link></p>
</div>

</div>
</div>
           
            
        </div>
    );
};

export default SignUp;