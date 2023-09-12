import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux';
import {removeFromCart, incrementQty, decrementQty} from "../redux/slices/cartSlice";
import toast, { Toaster } from 'react-hot-toast';


const ItemCart = ({id, name, price, img, qty}) => {
  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 shadow-md hover:shadow-lg rounded-md p-2 mb-3'>
      <MdDelete
      onClick={()=> {
        dispatch(removeFromCart({id, img, name, price, qty}));
        toast(`${name} has been Removed from the cart`, { icon: "👋" })
      }} 
      className='absolute right-7 text-gray-600 cursor-pointer hover:text-red-500' />
      <img src={img}
      alt=''
      className='w-[50px] h-[50px]' />
      <div className=''>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between'>
          <span className='text-green-500  font-bold'>₹ {price}</span>
          <div className='flex justify-center items-center gap-2 absolute right-7'>
            <AiOutlineMinus
            onClick={() => qty>1? dispatch(decrementQty({id})) : qty=0 } 
            className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
            <span>{qty}</span>
            <AiOutlinePlus
            onClick={() => dispatch(incrementQty({id}))}
            className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart