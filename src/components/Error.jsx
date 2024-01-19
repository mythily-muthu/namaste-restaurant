import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err:", err);
  if (!err) {
    return null;
  }
  return (
    <div className="flex flex-col w-full bg-gray-200 font-bold text-lg items-center justify-center">
      <h1>Oops...</h1>
      <p>
        {err?.status}: {err?.text}
      </p>
    </div>
  );
};

export default Error;
