import React from 'react'
import FoodCard from './FoodCard';
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  
  const category = useSelector((state)=> state.category.category);
  const handleToast = (name) => toast.success(`${name} has been added to cart`);
  const search = useSelector((state)=> state.search.search);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex flex-wrap gap-10 justify-center my-10'>
          {FoodData.filter((food)=>{
            if(category === "all"){
              return food.name.toLowerCase().includes(search.toLowerCase());
            }else{
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
            }
          }).map((food)=>{
            return <FoodCard 
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img} 
            handleToast={handleToast}
            />
          })}
      </div>
    </>
  )
}
export default FoodItems