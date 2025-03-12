import React from "react";

const AuthSeperator = () => {
  return (
    <div className="relative w-full flex gap-4 items-center justify-center">
      <div className="w-3/6">
        <hr className="w-full" />
      </div>
      <div>
        <p>or</p>
      </div>
      <div className="w-3/6">
        <hr className="w-full" />
      </div>
    </div>
  );
};

export default AuthSeperator;
