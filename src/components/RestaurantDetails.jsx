import React from "react";
import greenStar from "../utils/greenStar.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
const RestaurantDetails = ({
  name,
  cuisines,
  locality,
  lastMileTravelString,
  avgRatingString,
  totalRatingsString,
  text,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-y-1 text-xs">
        <h1 className="font-semibold text-lg tracking-wide">{name}</h1>
        <p className="text-gray-500 font-light text-xs tracking-wide">
          {cuisines}
        </p>
        <p className="flex text-gray-500 font-light text-xs tracking-wide items-center">
          {locality} , {lastMileTravelString}
          <MdOutlineArrowDropDown className="text-orange-400 text-xl cursor-pointer" />
        </p>
        <p className="text-gray-500 font-light text-xs tracking-wide">
          Far {text}
        </p>
      </div>
      <div className="px-2 py-1 border rounded-lg flex flex-col gap-y-3">
        <div className="flex gap-1 items-baseline">
          <img src={greenStar} className="w-4 h-4" />
          <p className="text-green-600 font-semibold text-md">
            {avgRatingString}
          </p>
        </div>

        <span className="border"></span>
        <p className="text-gray-600 font-light text-[10px]">
          {totalRatingsString}
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
