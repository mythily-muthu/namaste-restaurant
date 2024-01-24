import axios from "axios";
import React, { useEffect, useState } from "react";
import { ResMenu_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import orangeStar from "../utils/orangeStar.png";
import RestaurantDetails from "./RestaurantDetails";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log("resid", resId);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    totalRatingsString,
    locality,
    costForTwoMessage,
    avgRatingString,
  } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { lastMileTravelString } = resInfo.data.cards[0].card.card.info.sla;
  const { text } = resInfo.data.cards[0].card.card.info.expectationNotifiers[0];
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log("itemcards:", itemCards);
  return (
    <div className="flex flex-col w-[55%] mx-auto py-10">
      {/* res details */}
      <RestaurantDetails
        name={name}
        cuisines={cuisines}
        locality={locality}
        lastMileTravelString={lastMileTravelString}
        avgRatingString={avgRatingString}
        totalRatingsString={totalRatingsString}
        text={text}
      />
      <span className="border border-dashed mt-10"></span>

      {/* res menu cards */}
      <div className=" py-10">
        {itemCards.map((item) => {
          return (
            <div className="flex  flex-col" key={item.card.info.id}>
              <div className="flex justify-between pt-4 pb-7 items-center ">
                <div className="gap-y-1 flex flex-col ">
                  <div className="flex flex-col gap-y-1 ">
                    <div>
                      {/* <img src={orangeStar} className="w-4 h-4" /> */}
                      <h2 className="text-orange-600 text-xs">
                        {item.card.info.ribbon.text}
                      </h2>
                    </div>

                    <h2 className="font-medium">{item.card.info.name}</h2>
                  </div>
                  <h3 className="font-normal text-sm">
                    ₹ {item.card.info.price / 100}
                  </h3>
                  <h3 className="text-gray-400 text-sm font-light py-3 w-[80%]">
                    {item.card.info.description}
                  </h3>
                </div>

                <div className="w-[120px] h-24 bg-pink-200">
                  <img
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                      item.card.info.imageId
                    }
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <span className="border"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
