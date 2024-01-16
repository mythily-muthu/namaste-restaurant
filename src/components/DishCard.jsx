import React from "react";
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png
const DishCard = (dish) => {
  console.log("img:", dish?.dish?.imageId);
  return (
    <div className=" w-full gap-4 ">
      <div className="flex w-full">
        <img
          width={"100px"}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${dish?.dish?.imageId}`}
          alt="img"
          className="w-32 h-32  object-cover"
        />
      </div>
    </div>
  );
};

export default DishCard;
