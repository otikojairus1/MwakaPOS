import React from "react";

export default function CategoryListing({ categories,changeComponent, createCategory }) {
  return (
    <div  className="h-[50rem] m-auto mt-5 relative rounded-md bg-white w-[60rem] ">
      <div className="m-5 mt-5 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <p className="ml-5 font-bold">Category</p>
      </div>
      {categories.length === 0 && <p>Loading categories...</p>}
      {categories.map((category) => {
        return (
          <div
            onClick={changeComponent}
            className="h-[3rem] cursor-pointer ml-[5rem] mt-2 w-[20rem] border flex px-2 items-center justify-between"
          >
            <p>{category.category_name} </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-[#3862CD]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        );
      })}

      <div
        onClick={createCategory}
        className="absolute cursor-pointer top-[15rem] right-[10rem] h-[3rem] rounded-3xl items-center flex justify-center text-white w-[14rem] bg-blue-700"
      >
        Create New Category
      </div>
      <div className="absolute right-[10rem] top-[10rem] h-[3rem] rounded-3xl items-center flex justify-center text-white w-[14rem] bg-blue-700">
        Stock Update Report
      </div>
    </div>
  );
}
