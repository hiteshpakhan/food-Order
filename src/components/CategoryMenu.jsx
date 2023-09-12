import React,{useEffect, useState} from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../redux/slices/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategory = () => {
    const uniqueCategory = [
      ...new Set(FoodData.map((food)=> food.category))
    ];
    setCategories(uniqueCategory);
  }

  useEffect(()=>{
    listUniqueCategory();
  },[])

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state)=>state.category.category);
  
  return (
    <div className='mx-6' >
        <h3 className='text-xl font-semibold '>Find the best Food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button
            onClick={()=> dispatch(setCategory("all"))} 
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "all" && "bg-green-500 text-white"}`}>All</button>
            {categories.map((single, index)=>{
              return(
                <button 
                onClick={()=> dispatch(setCategory(single))}
                key={index} 
                className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === single && "bg-green-500 text-white"}`}>
                  {single}
                </button>
              )
            })}
        </div>
    </div>
  )
}

export default CategoryMenu