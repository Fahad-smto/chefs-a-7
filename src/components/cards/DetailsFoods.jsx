

const DetailsFoods = ({food}) => {
  
   const {calories,preparing_time,recipe_name} =food;

    return (
       
        <div className="flex justify-around mt-3 bg-gray-100 rounded-lg">

        <p>{food.recipe_name }</p>
        <p className="mr-10">{food.preparing_time}</p>
        <p>{food.calories}</p>
        <p className=" ml-2 btn rounded-full  bg-[#0BE58A] ">Preparing</p>

         </div>
    );
};

export default DetailsFoods;