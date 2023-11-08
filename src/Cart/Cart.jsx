import { useMediaQuery } from "react-responsive";
import backArrow from "../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import deletebin from "../assets/delete_FILL0_wght400_GRAD0_opsz24.svg";

export default function Cart({ cart, setCart, history, setHistory }) {
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });
  const [thankyouMessage, setThankyouMessage] = useState(false);
  const [changed, setchanged] = useState(false);
  let total = 0;

  return (
    <div>
      <div>
        <div className={`flex flex-wrap justify-evenly bg-green-200`}>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={backArrow} alt="" width={40} />
          </button>
          <span
            className={`text-black font-black ${
              isDesktopOrLaptop
                ? "text-[70px] py-[25px]"
                : "text-[30px] py-[25px]"
            }`}
          >
            Shopping Cart
          </span>
          <div></div>
        </div>
        <span
          className={`bg-black ${
            isDesktopOrLaptop ? "text-[20px]" : "text-[15px]"
          } flex justify-center text-white py-[10px]`}
        >
          Check-Out Now and gain additional tokens!
        </span>
      </div>
      {cart.length === 0 ? (
        <div className="bg-gray-100 py-[20px] flex flex-wrap justify-evenly items-center min-h-[60vh]">
          <span
            className={`text-black flex flex-wrap justify-evenly items-center w-screen ${
              isDesktopOrLaptop
                ? "text-[40px] py-[25px]"
                : "text-[20px] py-[25px]"
            }`}
          >
            Wow! such Empty....
          </span>
        </div>
      ) : (
        <div className="bg-gray-100 py-[20px] min-h-[60vh]">
          {cart.map((obj, index) => {
            total += obj.price * obj.quantity;
            return (
              <div
                key={obj + index}
                className={`${
                  isDesktopOrLaptop
                    ? "flex flex-wrap justify-evenly items-center"
                    : "grid place-items-center"
                } text-[30px] bg-white `}
              >
                <span>{index + 1}</span>
                <div
                  className={`grid place-items-center ${
                    !isDesktopOrLaptop && "mt-[10px]"
                  }`}
                >
                  <span className="text-[30px] font-black">{obj.Company},</span>
                  <span className="text-[20px] font-bold">
                    {obj.Type}, {obj.cat}
                  </span>
                  <span className=" text-[20px]">
                    size - {obj.size.toUpperCase()}
                  </span>
                </div>
                <div
                  className={` ${
                    isDesktopOrLaptop
                      ? " flex justify-evenly items-center "
                      : "grid place-items-center mt-[10px] py-[10px]"
                  }`}
                >
                  <div className="text-[20px] bg-black text-white px-[10px] w-[70px] flex gap-[10px] rounded-md">
                    <button
                      onClick={() => {
                        if (cart[index].quantity > 1) {
                          cart[index].quantity--;
                          setchanged(!changed);
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{cart[index].quantity}</span>
                    <button
                      onClick={() => {
                        if (cart[index].quantity <= 100) {
                          cart[index].quantity++;
                          setchanged(!changed);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span
                    className={` ${
                      isDesktopOrLaptop
                        ? "text-[20px]"
                        : "text-[15px] text-center"
                    } text-[20px] font-bold ml-[20px]`}
                  >
                    Price - ₹{obj.price}
                    <br />
                    Total Price - ₹{obj.price * obj.quantity}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const temp = cart;
                    temp.splice(index, 1);
                    setCart(temp);
                    setchanged(!changed);
                  }}
                >
                  <img src={deletebin} alt="" width={35} />
                </button>
              </div>
            );
          })}
          {total !== 0 && (
            <div className=" text-white text-[30px] flex justify-evenly py-[20px] mt-[30px]">
              <button
                className="bg-black py-[15px] px-[40px]"
                onClick={() => {
                  setThankyouMessage(true);
                  setTimeout(() => {
                    setHistory([...history, ...cart]);
                    setCart([]);
                    total = 0;
                    setThankyouMessage(false);
                  }, 2000);
                }}
              >
                {thankyouMessage
                  ? "Thankyou! for Shopping"
                  : `Checkout! - ₹ ${total}`}
              </button>
            </div>
          )}
        </div>
      )}
      <footer className="bg-black flex justify-evenly py-[100px] text-white">
        developed by Tarun Jakkula
      </footer>
    </div>
  );
}
