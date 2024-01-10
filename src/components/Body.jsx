import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RestaurantsList } from "../constants";
import star from ".././utils/star.png";
const Body = () => {
  const [restaurants, setRestaurants] = useState(RestaurantsList);
  const [searchText, setsearchText] = useState("");
  // const getAllRestaurant = async () => {
  //   try {
  //     let res = await axios.get(Swiggy_URL);
  //     console.log("Response:", res.data);

  //     if (res?.data.data?.cards) {
  //       setlistOfRestaurants(res.data?.data.cards);
  //     } else {
  //       // console.error("Error: Unexpected response structure", res);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   getAllRestaurant();
  // }, []);
  console.log("Response", restaurants);
  return (
    <div className="bg-bgcolor w-full px-[15%] py-[2%] flex flex-col gap-y-5">
      <div className="flex w-[80%] mx-auto relative h-12">
        <input
          className="border border-gray-400 w-full h-12 px-4 text-gray-800 "
          placeholder="Search for restaurants and food"
          type="text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />

        <IoIosSearch
          className="w-7 h-6 absolute right-4 flex items-center top-3 cursor-pointer hover:text-orange-600 "
          onClick={() => {
            console.log(searchText);
          }}
        />
      </div>
      <div className="flex cursor-pointer ">
        <button className="flex px-4 py-1 rounded-md border bg-orange-600 text-white uppercase text-sm font-semibold tracking-wide">
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-4 w-full gap-10 py-3">
        {restaurants.map((card) => {
          return (
            <div className="flex flex-col cursor-pointer " key={card.id}>
              <div className="w-[233px] flex gap-x-4 flex-col rounded-2xl overflow-hidden ">
                <div className="w-[233px] h-[142px] ">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full object-fill "
                  />
                </div>
              </div>
              <div className="w-full p-3">
                <h1 className="text-lg font-medium text-gray-700 tracking-wide">
                  {card.name}
                </h1>
                <div className="flex gap-1 font-medium">
                  <img src={star} alt="rating" className="w-5 h-5" />
                  <h2 className="text-base font-medium text-gray-800 ">
                    {card.rating}
                  </h2>
                  <span className="flex items-center font-bold">.</span>
                  <h2>{card.deliveryTime}</h2>
                </div>
                <h2 className="flex font-light text-gray-500 text-base tracking-wider">
                  {card.cuisines}
                </h2>
                <h2 className="flex text-md font-medium">{card.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
