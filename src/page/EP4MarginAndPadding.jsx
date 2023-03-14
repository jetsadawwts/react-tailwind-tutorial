import React from "react";

function EP4MarginAndPadding() {
  return (
    <>
      <div className="bg-blue-500 mt-10 mb-10 mr-10 ml-10 ">
        <div className="bg-red-500">Margin Top Bottom Left Right</div>
      </div>
      <div className="bg-blue-500 mx-10 my-10">
        <div className="bg-red-500">Margin XY</div>
      </div>
      <div className="bg-blue-500 pt-10 pb-10 pr-10 pl-10">
        <div className="bg-red-500">Padding Top Bottom Left Right</div>
      </div>

      <div className="bg-blue-500 py-10 px-10">
        <div className="bg-red-500">Padding XY</div>
      </div>
    </>
  );
}

export default EP4MarginAndPadding;
