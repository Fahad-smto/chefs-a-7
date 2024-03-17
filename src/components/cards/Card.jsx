import React from 'react';

const Card = ({card ,handleAddCard}) => {

  const {recipe_id,recipe_name,short_description,ingredients,preparing_time,calories,recipe_image} = card
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title font-serif">{recipe_name}</h2>
    <p className='font-serif'>{short_description}</p>
    <div className="card-actions">
       <p className='font-serif'>Ingredients :{ingredients.length} </p>
    </div>

    <div className="">
    

   

     <li></li><p className='font-serif'>{ingredients[0]}</p>
     <li></li> <p className='font-serif'>{ingredients[1]}</p>
     <li></li>  <p className='font-serif'>{ingredients[2]}</p> 
        <p className='font-serif'>{ingredients[3]}</p>
       <p className='font-serif'>{ingredients[4]}</p> 
       
 

    
    </div>
    


    <div className="flex justify-between">
       
       <div className="flex">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>


       <p className='font-serif'>  {preparing_time}</p>
       </div>

       <div className="flex">


       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
    </svg>

       <p className='font-serif'>{calories}</p>

       </div>
      

    </div>
    <div className="card-actions">
      <button onClick={ ()=> handleAddCard(card)} className="btn bg-[#0BE58A] rounded-full font-serif">Want to Cook</button>
    </div>
  </div>
</div>
    );
};

export default Card;