import ManModel from "../assets/pngegg.png";
import FemaleModel from "../assets/femalemodel.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LeftIcon from "../assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg";
import RightIcon from "../assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg";
import shoppingcart from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";

export default function Intro({
  isDesktopOrLaptop,
  men,
  women,
  scrollTo,
  cart,
}) {
  const navigate = useNavigate();

  return (
    <div className=" h-[100vh] min-h-[700px] ">
      <div
        id="header"
        className="flex justify-around items-center px-[12vw] py-[30px] "
      >
        <span
          className={`text-green-500 font-black ${
            isDesktopOrLaptop ? "text-[30px]" : "text-[23px] "
          }`}
        >
          Eco-mmerce
        </span>
        <div
          className={`flex gap-[40px] font-md ${
            isDesktopOrLaptop ? "text-[20px]" : "text-[18px]"
          }`}
        >
          <button
            className="font-black"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            dashboard
          </button>
          <button
            className="flex text-[20px] font-bold items-center relative"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <div className="absolute bg-red-500 px-[5px] text-white rounded-2xl text-[12px] -top-[10px] -left-[10px]">
              {cart.length}
            </div>
            <img src={shoppingcart} alt="" width={30} />
            {isDesktopOrLaptop && "cart"}
          </button>
        </div>
      </div>
      <div
        className={`bg-black flex text-white font-[400] justify-center py-[10px] ${
          isDesktopOrLaptop ? "text-[20px]" : "text-[15px]"
        }`}
      >
        Fashion brought with an Ecofriendly twist{" "}
      </div>
      <div className=" flex justify-evenly items-center h-[80vh] min-h-[800px] bg-[#f7f8f1]">
        <Carousel
          className="w-[90vw]"
          infiniteLoop
          showIndicators={false}
          autoPlay
          interval={4000}
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20 `}
                onClick={clickHandler}
              >
                <img src={LeftIcon} alt="" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center  opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <img src={RightIcon} alt="" />
              </div>
            );
          }}
        >
          <div className="flex justify-evenly items-center">
            {isDesktopOrLaptop && (
              <img
                src={ManModel}
                alt="men"
                className="w-full max-w-[388px] h-auto"
              />
            )}
            <div className="text-black font-[800] grid ">
              <span className="text-[70px] text-blue-500">&#9794;</span>
              <span
                className={isDesktopOrLaptop ? "text-[70px]" : "text-[50px]"}
              >
                Men's Fashion
              </span>
              <span
                className={isDesktopOrLaptop ? "text-[20px]" : "text-[15px]"}
              >
                <i>Flat 30% Off on men's wear</i>
              </span>
              <button
                className="bg-yellow-500 mt-[20px] py-[10px]"
                onClick={() => {
                  scrollTo(men);
                }}
              >
                Shop now
              </button>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="text-black font-[800] grid">
              <span className="text-[70px] text-pink-500">&#9792;</span>
              <span
                className={isDesktopOrLaptop ? "text-[70px]" : "text-[50px]"}
              >
                Women's Fashion
              </span>
              <span
                className={isDesktopOrLaptop ? "text-[20px]" : "text-[15px]"}
              >
                <i>Flat 18% Off on women's wear</i>
              </span>
              <button
                className="bg-yellow-500 mt-[20px] py-[10px]"
                onClick={() => {
                  scrollTo(women);
                }}
              >
                Shop now
              </button>
            </div>
            {isDesktopOrLaptop && (
              <img
                src={FemaleModel}
                alt="women"
                className="w-full max-w-[288px] h-auto"
              />
            )}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
