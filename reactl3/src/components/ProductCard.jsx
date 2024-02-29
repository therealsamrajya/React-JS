import React, { useState } from "react";
import { fifaa, gow } from "../assets/assets";

const products = [
  {
    id: 1,
    name: "FC24",
    image: fifaa,
    rating: 5,
    price: "$599",
  },
  {
    id: 2,
    name: "God of War",
    image: gow,
    rating: 4,
    price: "$1199",
  },
  {
    id: 3,
    name: "FC24",
    image: fifaa,
    rating: 4.5,
    price: "$349",
  },
  {
    id: 4,
    name: "God of War",
    image: gow,
    rating: 4,
    price: "$1199",
  },
  {
    id: 5,
    name: "FC24",
    image: fifaa,
    rating: 4.5,
    price: "$349",
  },
  {
    id: 6,
    name: "FC24",
    image: fifaa,
    rating: 4.5,
    price: "$349",
  },
];

const ProductCard = () => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortType, setSortType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortProducts = (sortBy) => {
    let sorted;
    if (sortBy === "rating") {
      sorted = [...products].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price") {
      sorted = [...products].sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      );
    }
    setSortedProducts(sorted);
    setSortType(sortBy);
    setDropdownOpen(false);
  };

  const resetSort = () => {
    setSortedProducts([]);
    setSortType("");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-3 flex justify-start gap-6 mb-4 px-5">
        <div className="relative">
          <button
            className="text-white bg-primary hover:bg-one font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}>
            Sort by {dropdownOpen ? "-" : "+"}
          </button>
          {dropdownOpen && (
            <div className="absolute top-10 left-0 bg-white shadow-md rounded-md mt-1 w-40">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => sortProducts("rating")}>
                By Ratings
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => sortProducts("price")}>
                By Price
              </button>
            </div>
          )}
        </div>
        <button
          className="text-white bg-primary hover:bg-one font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={resetSort}>
          Reset
        </button>
      </div>
      <div className="flex flex-wrap px-2 gap-2">
        {sortedProducts.length > 0
          ? sortedProducts.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-[32%] borderrounded-lg bg-secondary px-auto lg:mt-4 mb-4">
                <a href="#">
                  <img
                    className="p-0 rounded-t-none"
                    src={product.image}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold font-palanquin tracking-tight text-second ">
                      {product.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(Math.max(0, Math.round(product.rating)))].map(
                        (_, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        )
                      )}
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-second font-montserrat">
                      {product.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-primary hover:bg-one focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))
          : products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-[32%] borderrounded-lg bg-secondary px-auto lg:mt-4 mb-4">
                <a href="#">
                  <img
                    className="p-0 rounded-t-none"
                    src={product.image}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold font-palanquin tracking-tight text-second ">
                      {product.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(Math.max(0, Math.round(product.rating)))].map(
                        (_, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        )
                      )}
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-second font-montserrat">
                      {product.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-primary hover:bg-one focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductCard;
