import React from "react";

function EP7PseudoSelector() {
  return (
    <>
      <form className="m-10">
        <input
          type="text"
          placeholder="ป้อนข้อมูล"
          className="bg-gray-200 focus:bg-green-200"
        />
        <button className="bg-yellow-500 hover:bg-red-200 hover:text-white">บันทึก</button>
      </form>
    </>
  );
}

export default EP7PseudoSelector;
