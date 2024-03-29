import React from "react";
import star from ".././utils/star.png";

const RestaurantCard = ({ card }) => {
  return (
    <div className="flex flex-col cursor-pointer " key={card.info.id}>
      <div className="w-[233px] flex gap-x-4 flex-col rounded-2xl overflow-hidden ">
        <div className="w-[233px] h-[142px] ">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              card.info.cloudinaryImageId
            }
            alt={card.info.name}
            className="w-full h-full object-fill "
          />
        </div>
      </div>
      <div className="w-full p-3">
        <h1 className="text-lg font-bold text-gray-800 tracking-wide">
          {card.info.name}
        </h1>
        <div className="flex gap-1 items-center font-medium">
          <img src={star} alt="rating" className="w-4 h-4" />
          <h2 className="text-base font-medium text-gray-700 ">
            {card.info.avgRating}
          </h2>
          <span className="flex items-center font-bold text-gray-700 ">.</span>
          <h2>{card.info.sla.slaString}</h2>
        </div>
        <h2 className="flex font-light text-gray-500 text-sm tracking-wide">
          {card.info.cuisines.slice(0, 3).join(" ")}
        </h2>

        <h2 className="flex text-md font-medium">{card.info.costForTwo}</h2>
      </div>
    </div>
  );
};

export default RestaurantCard;
