import React from "react";
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png
const DishCard = (dish) => {
  // console.log("img:", dish?.dish?.imageId);
  return (
    <div className="w-24 h-full ">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${dish?.dish?.imageId}`}
        alt="img"
        className="w-full h-full cursor-pointer"
      />
    </div>
  );
};

export default DishCard;
