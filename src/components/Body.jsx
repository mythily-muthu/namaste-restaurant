import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Swiggy_URL } from "../constants";
import { RestaurantsList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import DishCard from "./DishCard";
// import Shimmer from "./Shimmer";
import axios from "axios";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [dishesList, setDishesList] = useState([]);
  // const [restaurants, setRestaurants] = useState(RestaurantsList);
  // const [filteredRestaurant, setFilteredRestaurant] = useState(RestaurantsList);

  const getAllRestaurants = async () => {
    let res = await axios.get(Swiggy_URL);
    console.log("dffsf", res.data);
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

  const getAllDishes = async () => {
    let res = await axios.get(Swiggy_URL);
    console.log(
      "dishes:",
      res.data?.data?.cards[0]?.card?.card?.imageGridCards.info
    );
    setDishesList(res.data?.data?.cards[0]?.card?.card?.imageGridCards.info);
    const dishesData =
      res.data?.data?.cards[0]?.card?.card?.imageGridCards.info;

    if (dishesData) {
      setDishesList(dishesData);
    } else {
      console.log("error unable to receive data ");
    }
  };
  useEffect(() => {
    getAllDishes();
  }, []);

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
        <IoIosSearch
          className="w-7 h-6 absolute right-4 flex items-center top-3 cursor-pointer hover:text-orange-600 "
          onClick={() => {
            let filteredRestaurant = restaurants.filter((restaurant) => {
              if (restaurant && restaurant.info.name) {
                return restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              }
              return false;
            });
            setFilteredRestaurant(filteredRestaurant);
            console.log("filtered restaurants", filteredRestaurant);
          }}
        />
      </div>
      {/* whats on your mind */}
      <div className="flex flex-col gap-y-5 py-5">
        <div>
          <h1 className="font-bold text-2xl">What's on your mind?</h1>
        </div>
        <div className="flex overflow-scroll gap-4 ">
          {dishesList.map((dish) => {
            return <DishCard dish={dish} key={dish.id} />;
          })}
        </div>
      </div>

      <div className="flex cursor-pointer ">
        {/* top rated restaurant filter */}
        <button
          onClick={() => {
            let filteredRestaurants = restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.1
            );
            setFilteredRestaurant(filteredRestaurants);
          }}
          className="flex px-4 py-1 rounded-md border bg-orange-600 text-white hover:border-orange-700 hover:tracking-wide uppercase text-sm font-semibold tracking-wide"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-4 w-full gap-10 py-3">
        {restaurants.map((card) => {
          return <RestaurantCard card={card} key={card.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
