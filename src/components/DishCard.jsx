import React from "react";

const DishCard = (dish) => {
  console.log("img:", dish?.dish?.imageId);
  return (
    <div className="grid grid-cols-5 w-full gap-4 ">
      <div className="flex w-full">
        <img
          src={dish?.dish?.imageId}
          alt="img"
          className="w-20 h-20  object-cover"
        />
      </div>
      <h2>{dish.dish.action.text}</h2>
    </div>
  );
};

export default DishCard;
