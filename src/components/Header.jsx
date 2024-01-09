import React, { useState } from "react";
import { Logo } from "../constants";

const Header = () => {
  const [userActivity, setUserActivity] = useState("login");
  return (
    <div className="h-20 w-full flex items-center justify-between px-[8%] py-2 ">
      <div className="flex  items-center cursor-pointer">
        <img src={Logo} className="w-20 h-20 " />
        <h2 className="text-sm font-semibold text-orange-600">NAMASTE FOOD</h2>
      </div>
      <div className="flex gap-x-8 items-center uppercase">
        <ul className="flex gap-x-8  text-sm  cursor-pointer">
          <li>home</li>
          <li>about</li>
          <li>offers</li>
          <li>cart</li>
        </ul>
        <button
          className="uppercase border px-4 py-1 hover:border-orange-600"
          onClick={() => {
            userActivity === "login"
              ? setUserActivity("logout")
              : setUserActivity("login");
          }}
        >
          {userActivity}
        </button>
      </div>
    </div>
  );
};

export default Header;
