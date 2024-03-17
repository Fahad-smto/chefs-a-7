import { useEffect, useState } from "react";
import Card from "./components/cards/Card";

 

const FoodCards = ({handleAddCard}) => {

    const [foodCards,setFoodCards]= useState( [])

    useEffect(() => {
        fetch('./public/foodData.json')
        .then (res => res.json())
        .then(data => setFoodCards(data)) 
      });


    return (
        <div className="grid grid-cols-2 gap-4">
               
           {foodCards.map((card) => (
           <Card key={card.recipe_id} card={card}
           handleAddCard ={handleAddCard}
           />
          
            ))}
 
             
        </div>
    );
};

export default FoodCards;