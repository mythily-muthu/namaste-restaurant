import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Swiggy_URL } from "../constants";
import { RestaurantsList } from "../constants";
import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
import axios from "axios";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  // const [restaurants, setRestaurants] = useState(RestaurantsList);
  // const [filteredRestaurant, setFilteredRestaurant] = useState(RestaurantsList);

  const getAllRestaurants = async () => {
    let res = await axios.get(Swiggy_URL);
    console.log(
      "res lists:",
      res.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurants(
      res?.data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    const restaurantsData =
      res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (restaurantsData) {
      setRestaurants(restaurantsData);
    } else {
      console.log("error unable to receive data ");
    }
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return (
    <div className="bg-bgcol or w-full px-[15%] py-[2%] flex flex-col gap-y-5">
      {/* search restaurants filter */}
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
        {/* <IoIosSearch
          className="w-7 h-6 absolute right-4 flex items-center top-3 cursor-pointer hover:text-orange-600 "
          onClick={() => {
            let filteredRestaurant = restaurants.filter((restaurant) =>
              restaurant.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
            console.log("f", filteredRestaurant);
          }}
        /> */}
        <IoIosSearch
          className="w-7 h-6 absolute right-4 flex items-center top-3 cursor-pointer hover:text-orange-600 "
          onClick={() => {
            let filteredRestaurant = restaurants.filter((restaurant) => {
              // Check if restaurant and restaurant.info.name are defined before using toLowerCase
              if (restaurant && restaurant.info.name) {
                return restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              }
              return false; // If restaurant or restaurant.info.name is undefined, filter it out
            });
            setFilteredRestaurant(filteredRestaurant);
            console.log("filtered restaurants", filteredRestaurant);
          }}
        />
      </div>

      <div className="flex cursor-pointer ">
        {/* top rated restaurant filter */}
        <button
          onClick={() => {
            let filteredRestaurants = restaurants.filter(
              (restaurant) => restaurant.rating > 4.5
            );
            setFilteredRestaurant(filteredRestaurants);
          }}
          className="flex px-4 py-1 rounded-md border bg-orange-600 text-white hover:border-orange-700 hover:tracking-wide uppercase text-sm font-semibold tracking-wide"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-4 w-full gap-10 py-3">
        {filteredRestaurant.map((card) => {
          return <RestaurantCard card={card} key={card.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
