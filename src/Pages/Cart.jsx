import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cartitem from '../Components/Cartitem';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { clearCart } from "../redux/Slices/CartSlice";

const Cart = () => {
const { Cart } = useSelector((state) => state);
const dispatch = useDispatch();
console.log("Printing Cart");
console.log(Cart);
const [totalAmount, setTotalAmount] = useState(0);
useEffect(() => {
  setTotalAmount(Cart.reduce((acc, curr) => acc + curr.price, 0)); 
}, [Cart]);

const payment=()=>{
  setTimeout(() => {
    toast.success("Congrats youer payment is successfull");
    dispatch(clearCart());
  }, 4000);

}



return (
  <div >
    {Cart.length > 0 ? (
        <div className="flex flex-row flex-wrap p-2">
          {Cart.map((item, index) => {
            return <Cartitem key={item.id} item={item} itemIndex={index} />;
          })}
          <div className='flex flex-col item-center justify-between md:hover:scale-110 transition duration-300 ease-in gap-3 mt-10 ml-5 rounded-xl outline h-[376px] w-[370px]'>
          <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
          <div className="flex flex-col gap-5 ">
          <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
            <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
            <p className="text-xl">
              <span className="text-gray-700 font-semibold text-xl">Total Items: {Cart.length}</span>
            </p>
            <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
            <button onClick={payment} className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
          </div>
          </div>
        </div>
        </div>
    ) : (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-gray-700 font-semibold text-xl mb-2">
          Your cart is empty!
        </h1>
        <Link to={"/Home"}>
          <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
            Shop Now
          </button>
        </Link>
      </div>
    )}
  </div>
);
};

export default Cart;
