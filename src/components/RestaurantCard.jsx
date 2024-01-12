import React from "react";
import star from ".././utils/star.png";
import {Cloudinary} from "@cloudinary/url-gen";
const RestaurantCard = ({ card }) => {
  console.log("imageurl:", card.info.cloudinaryImageId);
  return (
    <div className="flex flex-col cursor-pointer " key={card.info.id}>
      <div className="w-[233px] flex gap-x-4 flex-col rounded-2xl overflow-hidden ">
        <div className="w-[233px] h-[142px] ">
          <img
            src={card.info.cloudinaryImageId}
            alt={card.info.name}
            className="w-full h-full object-fill "
          />
        </div>
      </div>
      <div className="w-full p-3">
        <h1 className="text-lg font-medium text-gray-700 tracking-wide">
          {card.info.name}
        </h1>
        <div className="flex gap-1 font-medium">
          <img src={star} alt="rating" className="w-5 h-5" />
          <h2 className="text-base font-medium text-gray-800 ">
            {card.info.avgRating}
          </h2>
          <span className="flex items-center font-bold">.</span>
          <h2>{card.info.sla.slaString}</h2>
        </div>
        <h2 className="flex font-light text-gray-500 text-base tracking-wider">
          {card.info.cuisines}
        </h2>
        <h2 className="flex text-md font-medium">{card.info.costForTwo}</h2>
      </div>
    </div>
  );
};

export default RestaurantCard;
