import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../Pages/Cart';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
const Navbar = (props) => {
  let isLogin=props.isLogin;
  let setIsLoggedIn=props.setIsLoggedIn;
  const{Cart}=useSelector((state)=>state);
  return (
    <div className=''>
        <div className='flex items-center justify-between h-20 w-[100%]  mx-auto'>
        {/* <Link to="/"> */}
        <div className='md:ml-5'>
        <img src="/logo.png" alt="logo" className='w-[130px] h-[53px]' loading='lazy'>
        </img>
        </div>
            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-2 md:space-x-6'>
            {!isLogin && <Link to="/">     <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
        >
            Login
        </button>
        </Link> }
         {isLogin &&
        <Link to="/">
        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
        onClick={()=>{
          localStorage.removeItem("token"); 
            setIsLoggedIn(false);
            toast.error("Logged Out");
        }}
        >
           Log Out
        </button>
        </Link>
    }
            { isLogin &&
        <Link to="/Home">
        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
        >
            Home
        </button>
        </Link>
    }
             { isLogin &&   <Link to="/cart"><div className='relative'>
                <FaShoppingCart className='text-2xl'/>
                {
                  Cart.length>0 && 
                  <span
                  className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
                  >{Cart.length}</span>
                }
                </div></Link>}
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
