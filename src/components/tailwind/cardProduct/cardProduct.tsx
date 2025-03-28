import React from "react";

export const ProductCard = ({
  title,
  price,
  description,
  image,
}: {
  title: string;
  price: number;
  description: string;
  image: string;
}) => {
  return (
    <div
      className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md -z-10"
      style={{
        zIndex: -1000,
      }}
    >
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={
            "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
          }
          className="h-full w-full object-cover"
          alt={title}
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price}
          </p>
        </div>
        <p className=" min-h-[160px] block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0 file:flex items-end justify-end">
        <button
          className="bg-blue-900 text-white block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
