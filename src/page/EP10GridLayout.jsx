import React from "react";

function EP10GridLayout() {
  return (
    <>
      <div className="bg-yellow-500 w-auto grid grid-cols-3">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-blue-500">Box2</div>
        <div className="h-10 bg-pink-500">Box3</div>
        <div className="h-10 bg-blue-200">Box4</div>
        <div className="h-10 bg-red-200">Box5</div>
        <div className="h-10 bg-blue-800">Box6</div>
        <div className="h-10 bg-green-200">Box7</div>
        <div className="h-10 bg-green-500">Box8</div>
        <div className="h-10 bg-green-800">Box9</div>
      </div>
      <div className="bg-yellow-500 w-auto grid grid-cols-5">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-blue-500">Box2</div>
        <div className="h-10 bg-pink-500">Box3</div>
        <div className="h-10 bg-blue-200">Box4</div>
        <div className="h-10 bg-red-200">Box5</div>
        <div className="h-10 bg-blue-800">Box6</div>
        <div className="h-10 bg-green-200">Box7</div>
        <div className="h-10 bg-green-500">Box8</div>
        <div className="h-10 bg-green-800">Box9</div>
      </div>
      <div className="bg-yellow-500 w-auto grid grid-cols-3 grid-rows-3">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-blue-500">Box2</div>
        <div className="h-10 bg-pink-500">Box3</div>
        <div className="h-10 bg-blue-200">Box4</div>
        <div className="h-10 bg-red-200">Box5</div>
        <div className="h-10 bg-blue-800">Box6</div>
        <div className="h-10 bg-green-200">Box7</div>
        <div className="h-10 bg-green-500">Box8</div>
        <div className="h-10 bg-green-800">Box9</div>
      </div>
      <div className="bg-yellow-500 w-auto grid grid-cols-3 grid-rows-3 gap-x-4">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-blue-500">Box2</div>
        <div className="h-10 bg-pink-500">Box3</div>
        <div className="h-10 bg-blue-200">Box4</div>
        <div className="h-10 bg-red-200">Box5</div>
        <div className="h-10 bg-blue-800">Box6</div>
        <div className="h-10 bg-green-200">Box7</div>
        <div className="h-10 bg-green-500">Box8</div>
        <div className="h-10 bg-green-800">Box9</div>
      </div>
      <div className="bg-yellow-500 w-auto grid grid-cols-3 grid-rows-3 gap-y-4">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-blue-500">Box2</div>
        <div className="h-10 bg-pink-500">Box3</div>
        <div className="h-10 bg-blue-200">Box4</div>
        <div className="h-10 bg-red-200">Box5</div>
        <div className="h-10 bg-blue-800">Box6</div>
        <div className="h-10 bg-green-200">Box7</div>
        <div className="h-10 bg-green-500">Box8</div>
        <div className="h-10 bg-green-800">Box9</div>
      </div>
      <div className="bg-yellow-500 w-auto grid grid-cols-3 grid-rows-3 gap-y-4 gap-x-4">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-blue-500">Box2</div>
        <div className="h-10 bg-pink-500">Box3</div>
        <div className="h-10 bg-blue-200">Box4</div>
        <div className="h-10 bg-red-200">Box5</div>
        <div className="h-10 bg-blue-800">Box6</div>
        <div className="h-10 bg-green-200">Box7</div>
        <div className="h-10 bg-green-500">Box8</div>
        <div className="h-10 bg-green-800">Box9</div>
      </div>
    </>
  );
}

export default EP10GridLayout;
