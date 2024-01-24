import axios from "axios";
import { useEffect, useState } from "react";
import { ResMenu_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const getAllResInfos = async () => {
    let res = await axios.get(ResMenu_URL + resId);
    setResInfo(res.data);
    console.log("resmenu", res.data);
  };

  useEffect(() => {
    getAllResInfos();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
