import React from "react";

export default function EP6BoxShadox() {
  return (
    <>
      <button className="bg-white text-green-500 shadow-sm px-10 py-10 mx-10 my-10">
        Shadow sm
      </button>
      <button className="bg-white text-green-500 shadow px-10 py-10 mx-10 my-10">
        Shadow
      </button>
      <button className="bg-white text-green-500 shadow-md px-10 py-10 mx-10 my-10">
        Shadow md
      </button>
      <button className="bg-white text-green-500 shadow-lg px-10 py-10 mx-10 my-10">
        Shadow lg
      </button>
      <button className="bg-white text-green-500 shadow-xl px-10 py-10 mx-10 my-10">
        Shadow xl
      </button>
      <button className="bg-white text-green-500 shadow-2xl px-10 py-10 mx-10 my-10">
        Shadow 2xl
      </button>
      <button className="bg-white text-green-500 shadow-inner px-10 py-10 mx-10 my-10">
        Shadow Inner
      </button>
      <button className="bg-white text-green-500 shadow-none px-10 py-10 mx-10 my-10">
        Shadow None
      </button>
    </>
  );
}
