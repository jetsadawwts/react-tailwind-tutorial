import React from "react";

function EP5Border() {
  return (
    <>
      <button className="bg-green-500 text-white m-10 p-5 border border-red-500">
        Border default
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-2 border-red-500">
        Border All
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-red-500 border-t-8 border-b-8 border-l-8 border-r-8">
        Border Top Bottom Left Right
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded">
        Border rounded
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded-sm">
        Border rounded sm
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded-md">
        Border rounded md
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded-lg">
        Border rounded lg
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded-2xl">
        Border rounded 2xl
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded-3xl">
        Border rounded 3xl
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded-full">
        Border rounded full
      </button>
      <button className="bg-green-500 text-white m-10 p-5 rounded-t-md">
        Border rounded custom
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-8">
        Border size
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-red-500 border-2 border-solid">
        Border solid
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-red-500 border-2 border-dashed">
        Border dashed
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-red-500 border-2 border-dotted">
        Border dotted
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-red-500 border-2 border-double">
        Border double
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-red-500 border-2 border-hidden">
        Border hidden
      </button>
      <button className="bg-green-500 text-white m-10 p-5 border-red-500 border-2 border-none">
        Border none
      </button>
    </>
  );
}

export default EP5Border;
