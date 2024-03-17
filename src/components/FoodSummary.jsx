import React from 'react';
import DetailsFoods from './cards/DetailsFoods';

const FoodSummary = ({AddCard}) => {
    return (
       
<div className="">


<div className=' border h-full rounded-lg p-5 gap-6 '>
            <h1 className=' text-center mt-5 font-bold text-2xl font-serif'>Want to cook:{AddCard.length}</h1>

           <div
            className="divider"></div>
            <div className="flex justify-evenly mt-3  ">
           <p className='mr-16 text-[#878787]'>Name</p>
           <p className='mr-12 text-[#878787]'>Time</p>
           <p className='mr-16 text-[#878787]'>Calories</p>
           <p></p>

            </div>


                {

                    AddCard.map(food => <DetailsFoods key={food.id} food={food}></DetailsFoods> )
                }

  <div className="">

    <h1 className='font-serif text-2xl font-bold text-center mt-8'>Currently cooking: 0</h1>

    <div className="divider"></div>

    <div className="flex justify-evenly mt-3  ">
           <p className='mr-16 text-[#878787]'>Name</p>
           <p className='mr-12 text-[#878787]'>Time</p>
           <p className='mr-16 text-[#878787]'>Calories</p>
           <p></p>

            </div>

  </div>

        </div>


</div>
       


    );
};

export default FoodSummary;