import React from "react";

function EP9Flexbox() {
  return (
    <>
      <div className="bg-yellow-200 w-auto flex">
        <div className="w-10 h-10 bg-red-200">item1</div>
        <div className="w-10 h-10 bg-blue-200">item2</div>
        <div className="w-10 h-10 bg-green-200">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-row-reverse">
        <div className="w-10 h-10 bg-red-200">item1</div>
        <div className="w-10 h-10 bg-blue-200">item2</div>
        <div className="w-10 h-10 bg-green-200">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-col">
        <div className="w-10 h-10 bg-red-200">item1</div>
        <div className="w-10 h-10 bg-blue-200">item2</div>
        <div className="w-10 h-10 bg-green-200">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-col-reverse">
        <div className="w-10 h-10 bg-red-200">item1</div>
        <div className="w-10 h-10 bg-blue-200">item2</div>
        <div className="w-10 h-10 bg-green-200">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-wrap">
        <div className="w-80 h-10 bg-red-200">item1</div>
        <div className="w-80 h-10 bg-blue-200">item2</div>
        <div className="w-80 h-10 bg-green-200">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-wrap-reverse">
        <div className="w-80 h-10 bg-red-200">item1</div>
        <div className="w-80 h-10 bg-blue-200">item2</div>
        <div className="w-80 h-10 bg-green-200">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-wrap">
        <div className="w-80 h-10 bg-red-200 flex-1">item1</div>
        <div className="w-80 h-10 bg-blue-200 flex-1">item2</div>
        <div className="w-80 h-10 bg-green-200 flex-1">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-wrap">
        <div className="w-80 h-10 bg-red-200 ">item1</div>
        <div className="w-80 h-10 bg-blue-200 flex-grow">item2</div>
        <div className="w-80 h-10 bg-green-200 ">item3</div>
      </div>
      <div className="bg-yellow-200 w-auto flex flex-wrap">
        <div className="w-80 h-10 bg-red-200 flex-auto">item1</div>
        <div className="w-80 h-10 bg-blue-200 flex-shrink">item2</div>
        <div className="w-80 h-10 bg-green-200 flex-auto">item3</div>
      </div>
    </>
  );
}

export default EP9Flexbox;
