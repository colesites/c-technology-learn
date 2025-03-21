import {Spinner} from "@heroui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Spinner color="white" label="Loading..." classNames={{label: "text-white mt-4"}} />
    </div>
  );
};

export default loading;
