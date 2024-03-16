import React from 'react';

const Card = ({card}) => {

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
    <p className='font-serif'>{ingredients[0]}</p>
    <p className='font-serif'>{ingredients[1]}</p>
    <p className='font-serif'>{ingredients[2]}</p>
    <p className='font-serif'>{ingredients[3]}</p>
    <p className='font-serif'>{ingredients[4]}</p>
       
    </div>
    


    <div className="card-actions">
       
       <p className='font-serif'>{preparing_time}</p>
       <p className='font-serif'>{calories}</p>
       


    </div>
    <div className="card-actions">
      <button className="btn btn-success rounded-full font-serif">Want to Cook</button>
    </div>
  </div>
</div>
    );
};

export default Card;