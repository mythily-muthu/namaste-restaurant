import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Swiggy_URL } from "../constants";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  // const getAllRestaurant = async () => {
  //   let res = await axios.get(Swiggy_URL);
  //   setlistOfRestaurants(res?.data?.cards[2]?.data?.data?.cards);
  //   console.log("all", listOfRestaurants);
  // };
  const getAllRestaurant = async () => {
    try {
      let res = await axios.get(Swiggy_URL);
      console.log("Response:", res);

      if (res?.data?.cards[2]?.data?.data?.cards) {
        setlistOfRestaurants(res.data.cards[2].data.data.cards);
        console.log("all", listOfRestaurants);
      } else {
        console.error("Error: Unexpected response structure", res);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllRestaurant();
  }, []);
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
          className="w-7 h-6 absolute right-4 flex items-center top-3 cursor-pointer hover:text-orange-600 hover:h-7"
          onClick={() => {
            console.log(searchText);
          }}
        />
      </div>
    </div>
  );
};

export default Body;
