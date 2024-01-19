import React, { useState } from "react";
import { Logo } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [userActivity, setUserActivity] = useState("login");
  return (
    <div className="h-20 w-full flex items-center justify-between px-[8%] py-2 ">
      <Link to={"/"} className="flex  items-center cursor-pointer">
        <img src={Logo} className="w-20 h-20 " />
        <h2 className="text-sm font-semibold text-orange-600">NAMASTE FOOD</h2>
      </Link>
      <div className="flex gap-x-8 items-center uppercase">
        <ul className="flex gap-x-8  text-sm  cursor-pointer tracking-wider font-light">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/offers"}>Offers</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
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
