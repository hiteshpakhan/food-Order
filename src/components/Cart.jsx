import React,{useState} from 'react'
import {IoMdClose} from "react-icons/io";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import {RiShoppingCart2Fill} from "react-icons/ri"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [activateCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state)=> state.cart.cart)
  const totalQty = cartItems.reduce((totalQty,item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  const nevagate = useNavigate();

  return (
    <>
    <div className={`fixed right-0 top-0 p-3 md:w-[30vw] w-full bg-white h-full ${activateCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>    
      <div className='flex justify-between'>
        <span className='text-xl font-bold text-gray-800'>My Order</span>
        <IoMdClose 
        onClick={()=>setActiveCart(!activateCart)}
        className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
      </div>
      
      {cartItems.length > 0 ? cartItems.map((food)=>{
        return(
          <ItemCart 
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          img={food.img}
          qty={food.qty}
          />
        )
      }) : <h2 className='text-center text-xl font-bold text-gray-800'>Your Cart is Empty</h2> }

      <div className='absolute bottom-0 mb-5 grid justify-items-stretch md:w-[30vw] w-full'>
        <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice} </h3>
        <hr className='my-2'/>
        <button 
        onClick={()=> nevagate("/success")}
        className='justify-self-center bg-green-500 font-bold px-3 text-white py-2 rounded-lg md:w-[26vw] w-[80vw]'>
          Check Out
        </button>
      </div>
    </div>
    <RiShoppingCart2Fill 
    onClick={()=> setActiveCart(!activateCart)}
    className={`rounded-full bg-white shadow-md text-5xl fixed right-5 bottom-5 p-3 ${totalQty > 0 && "animate-bounce delay-500 transition-all "} `} />
    </>
  )
}

export default Cart