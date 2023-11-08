import { useState } from "react";
import trousers from "../assets/corparate-trouser-500x500.png";
import shirts from "../assets/product.png";
import shoes from "../assets/check-out-casual-shoes-for-men-in-india.png";
import sarees from "../assets/-1117Wx1400H-461789864-green-MODEL.png";
import gowns from "../assets/300953391TANGERINE_1.png";
import heels from "../assets/300924569NUDE_1.png";
import { useNavigate } from "react-router-dom";

export default function Body({ isDesktopOrLaptop, men, women }) {
  const navigate = useNavigate();

  const menlist = [
    { id: "trousers", img: trousers },
    { id: "Shirts", img: shirts },
    { id: "Shoes", img: shoes },
  ];

  const womenlist = [
    { id: "Sarees", img: sarees },
    { id: "Gowns", img: gowns },
    { id: "Heels", img: heels },
  ];

  const handleclick = (id) => {
    navigate("/" + id);
  };

  return (
    <>
      <div
        ref={men}
        className="grid place-items-center font-black py-[200px] bg-blue-100"
      >
        <span
          className={
            isDesktopOrLaptop
              ? "text-[70px]  transition-transform hover:scale-125"
              : "text-[50px]  transition-transform hover:scale-125"
          }
        >
          Men
        </span>
        <div className="flex flex-wrap gap-[40px] mt-[40px] justify-evenly ">
          {menlist.map((obj, index) => {
            return (
              <div
                key={index}
                className="bg-white grid place-items-center px-[10px] py-[10px] cursor-pointer transition-transform hover:scale-125"
                onClick={() => {
                  handleclick(obj.id);
                }}
              >
                <img
                  src={obj.img}
                  alt=""
                  className="w-full max-w-[310px] h-auto"
                />
                <span className="text-[20px]">{obj.id}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        ref={women}
        className="font-black grid place-items-center py-[200px] bg-red-100"
      >
        <span
          className={
            isDesktopOrLaptop
              ? "text-[70px]  transition-transform hover:scale-125"
              : "text-[50px]  transition-transform hover:scale-125"
          }
        >
          Women
        </span>

        <div className="flex flex-wrap gap-[40px] mt-[40px] justify-evenly">
          {womenlist.map((obj, index) => {
            return (
              <div
                key={index}
                className="bg-white grid place-items-center px-[10px] py-[10px] cursor-pointer transition-transform hover:scale-125"
                onClick={() => {
                  handleclick(obj.id);
                }}
              >
                <img
                  src={obj.img}
                  alt=""
                  className="w-full max-w-[310px] h-auto"
                />
                <span className="text-[20px]">{obj.id}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
