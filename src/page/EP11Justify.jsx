import React from "react";

function EP11Justify() {
  return (
    <>
      <div className="bg-yellow-500 w-auto grid justify-items-start">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-red-500">Box2</div>
        <div className="h-10 bg-red-500">Box3</div>
      </div>
      <div className="bg-yellow-500 w-auto grid justify-items-center">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-red-500">Box2</div>
        <div className="h-10 bg-red-500">Box3</div>
      </div>
      <div className="bg-yellow-500 w-auto grid justify-items-end">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-red-500">Box2</div>
        <div className="h-10 bg-red-500">Box3</div>
      </div>
      <div className="bg-yellow-500 w-auto grid justify-items-stretch">
        <div className="h-10 bg-red-500">Box1</div>
        <div className="h-10 bg-red-500">Box2</div>
        <div className="h-10 bg-red-500">Box3</div>
      </div>
      <div className="bg-yellow-500 w-auto grid">
        <div className="h-10 bg-red-500 justify-self-start">Box1</div>
        <div className="h-10 bg-red-500 justify-self-center">Box2</div>
        <div className="h-10 bg-red-500 justify-self-end">Box3</div>
      </div>
    </>
  );
}

export default EP11Justify;
