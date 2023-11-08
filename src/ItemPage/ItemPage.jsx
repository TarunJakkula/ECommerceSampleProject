import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams, useNavigate } from "react-router-dom";

import backArrow from "../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
import shoppingcart from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";

//Images import

//trousers
import pant1 from "../assets/14272b015364f0806e70aa8efc18c619.png";
import pant2 from "../assets/253768245_max.png";
import pant3 from "../assets/black-2-500x500.png";
import pant4 from "../assets/corparate-trouser-500x500.png";
import pant5 from "../assets/lcmtc2505000512-b6_0_1.png";

//shirts
import shirt1 from "../assets/71EZZ1usYnL._AC_UY1100_.png";
import shirt2 from "../assets/119450201_g0.png";
import shirt3 from "../assets/mens-check-shirts.png";
import shirt4 from "../assets/men-shirt.png";
import shirt5 from "../assets/product.png";

//shoes
import stud from "../assets/9vvtw_512.png";
import ofiice from "../assets/download.png";
import sport from "../assets/8-800x800.png";
import sneaker from "../assets/MG_6083_1200x.png";

//saree
import saree1 from "../assets/-1117Wx1400H-461789864-green-MODEL.png";
import saree2 from "../assets/chikoo-woven-border-cotton-silk-saree-peachmode-1.png";
import saree3 from "../assets/images.png";
import saree4 from "../assets/fancy-wedding-stone-work-silk-sarees-500x500.png";

//gowns
import gown1 from "../assets/1-0318783001682430256.png";
import gown2 from "../assets/barbie-doll-gowns.png";
import gown3 from "../assets/300953391TANGERINE_1.png";

//heels
import heel1 from "../assets/300924569NUDE_1.png";
import heel2 from "../assets/beautiful-high-heel-footwear-for-women.png";
import heel3 from "../assets/ou8vb_512.png";
import heel4 from "../assets/unnamed.png";

export default function ItemPage({ cart, setCart }) {
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const { id } = useParams();

  //sample data
  const item = {
    trousers: {
      heading: "Men",
      items: [
        {
          img: pant1,
          company: "Westside",
          name: "Jeans",
          sizes: {
            xs: 1500,
            s: 1600,
            m: 1700,
            l: 1800,
            xl: 2000,
          },
        },
        {
          img: pant2,
          company: "Westside",
          name: "Chinos",
          sizes: {
            xs: 1500,
            s: 1600,
            m: 1700,
            l: 1800,
          },
        },
        {
          img: pant3,
          company: "Chermas",
          name: "Cotton",
          sizes: {
            xs: 1000,
            s: 1100,
            m: 1200,
            l: 1300,
          },
        },
        {
          img: pant4,
          company: "Chermas",
          name: "Cargo",
          sizes: {
            xs: 1000,
            s: 1100,
            m: 1200,
            l: 1300,
          },
        },
        {
          img: pant5,
          company: "Adidas",
          name: "Joggers",
          sizes: {
            xs: 2100,
            s: 2200,
            m: 2300,
            l: 2400,
          },
        },
        {
          img: pant1,
          company: "Adidas",
          name: "Chinos",
          sizes: {
            xs: 2500,
            s: 2600,
            m: 2700,
            l: 2800,
          },
        },
      ],
    },
    Shirts: {
      heading: "Men",
      items: [
        {
          img: shirt1,
          company: "Westside",
          name: "Jeans",
          sizes: {
            xs: 1500,
            s: 1600,
            m: 1700,
            l: 1800,
          },
        },
        {
          img: shirt2,
          company: "Westside",
          name: "Polo",
          sizes: {
            xs: 1500,
            s: 1600,
            m: 1700,
            l: 1800,
          },
        },
        {
          img: shirt3,
          company: "Chermas",
          name: "Cotton",
          sizes: {
            xs: 1000,
            s: 1100,
            m: 1200,
            l: 1300,
          },
        },
        {
          img: shirt4,
          company: "Chermas",
          name: "Office",
          sizes: {
            xs: 1000,
            s: 1100,
            m: 1200,
            l: 1300,
          },
        },
        {
          img: shirt5,
          company: "Adidas",
          name: "Dress Shirts",
          sizes: {
            xs: 2100,
            s: 2200,
            m: 2300,
            l: 2400,
          },
        },
        {
          img: shirt1,
          company: "Adidas",
          name: "Office",
          sizes: {
            xs: 2500,
            s: 2600,
            m: 2700,
            l: 2800,
          },
        },
      ],
    },
    Shoes: {
      heading: "Men",
      items: [
        {
          img: ofiice,
          company: "Westside",
          name: "Office shoes",
          sizes: {
            7: 1500,
            8: 1600,
            9: 1700,
            10: 1800,
          },
        },
        {
          img: stud,
          company: "Chermas",
          name: "Studs",
          sizes: {
            7: 1000,
            8: 1100,
            9: 1200,
            10: 1300,
          },
        },
        {
          img: sneaker,
          company: "Adidas",
          name: "Sneakers",
          sizes: {
            7: 2100,
            8: 2200,
            9: 2300,
            10: 2400,
          },
        },
        {
          img: sport,
          company: "Westside",
          name: "Sports",
          sizes: {
            7: 2500,
            8: 2600,
            9: 2700,
            10: 2800,
          },
        },
      ],
    },
    Sarees: {
      heading: "Women",
      items: [
        {
          img: saree1,
          company: "Westside",
          name: "Banarasi",
          sizes: {
            "4m": 1500,
            "5m": 1600,
            "6m": 1700,
            "7m": 1800,
            "8m": 2000,
          },
        },
        {
          img: saree2,
          company: "Westside",
          name: "Patola",
          sizes: {
            "4m": 1500,
            "5m": 1600,
            "6m": 1700,
            "7m": 1800,
          },
        },
        {
          img: saree3,
          company: "Chermas",
          name: "Chanderi",
          sizes: {
            "4m": 1000,
            "5m": 1100,
            "6m": 1200,
            "7m": 1300,
          },
        },
        {
          img: saree4,
          company: "Chermas",
          name: "Banarasi",
          sizes: {
            "4m": 1000,
            "5m": 1100,
            "6m": 1200,
            "7m": 1300,
          },
        },
        {
          img: saree1,
          company: "SouthIndia",
          name: "Paithani",
          sizes: {
            "4m": 2100,
            "5m": 2200,
            "6m": 2300,
            "7m": 2400,
          },
        },
        {
          img: saree2,
          company: "SouthIndia",
          name: "Pochampally",
          sizes: {
            "4m": 2500,
            "5m": 2600,
            "6m": 2700,
            "7m": 2800,
          },
        },
      ],
    },
    Gowns: {
      heading: "Women",
      items: [
        {
          img: gown1,
          company: "Westside",
          name: "Evening",
          sizes: {
            12: 1500,
            13: 1600,
            14: 1700,
            15: 1800,
            16: 2000,
          },
        },
        {
          img: gown2,
          company: "Westside",
          name: "Ball",
          sizes: {
            12: 1500,
            13: 1600,
            14: 1700,
            15: 1800,
          },
        },
        {
          img: gown3,
          company: "Chermas",
          name: "MiniSkirt",
          sizes: {
            12: 1000,
            13: 1100,
            14: 1200,
            15: 1300,
          },
        },
        {
          img: gown1,
          company: "Chermas",
          name: "Evening",
          sizes: {
            12: 1000,
            13: 1100,
            14: 1200,
            15: 1300,
          },
        },
        {
          img: gown2,
          company: "Adidas",
          name: "Maxi",
          sizes: {
            12: 2100,
            13: 2200,
            14: 2300,
            15: 2400,
          },
        },
        {
          img: gown3,
          company: "Adidas",
          name: "MiniSkirt",
          sizes: {
            12: 2500,
            13: 2600,
            14: 2700,
            15: 2800,
          },
        },
      ],
    },
    Heels: {
      heading: "Women",
      items: [
        {
          img: heel1,
          company: "Westside",
          name: "Pump",
          sizes: {
            7: 1500,
            8: 1600,
            9: 1700,
            10: 1800,
          },
        },
        {
          img: heel2,
          company: "Chermas",
          name: "OpenToe",
          sizes: {
            7: 1000,
            8: 1100,
            9: 1200,
            10: 1300,
          },
        },
        {
          img: heel3,
          company: "Adidas",
          name: "Cone",
          sizes: {
            7: 2100,
            8: 2200,
            9: 2300,
            10: 2400,
          },
        },
        {
          img: heel4,
          company: "Westside",
          name: "Pump",
          sizes: {
            7: 2500,
            8: 2600,
            9: 2700,
            10: 2800,
          },
        },
      ],
    },
  };

  const [cartbutton, setCartButton] = useState(-1);
  const [changed, setchanged] = useState(true);
  const [allItems, setAllItems] = useState([]);
  const [company, setCompany] = useState([]);
  const [type, settype] = useState([]);
  const [size, setSize] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    let AllItems = [];
    let sizes = {};
    let companies = {};
    let types = {};
    for (let x in item[id].items) {
      let z = item[id].items[x].company;
      let w = item[id].items[x].name;
      let i = item[id].items[x].img;
      companies[z] = [z, true];
      types[w] = [w, true];
      for (let y in item[id].items[x].sizes) {
        sizes[y] = [y, true];
        AllItems.push({
          Company: z,
          Type: w,
          size: y,
          price: item[id].items[x].sizes[y],
          quantity: 1,
          img: i,
        });
      }
    }
    shuffle(AllItems);
    setAllItems(AllItems);
    setCompany(companies);
    setSize(sizes);
    settype(types);
  }, []);

  return (
    <>
      <div>
        <div>
          <div
            className={`flex justify-evenly items-center ${
              item[id].heading == "Men" ? "bg-blue-100" : "bg-red-100"
            } }`}
          >
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
              {item[id].heading}'s fashion - {id}
            </span>
            <div>
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
          <div className="bg-black text-[15px] flex justify-center text-white py-[10px]">
            <marquee>
              <span className="mr-[50vw]">
                Explore Various Brands, Sizes and Prices for {id}{" "}
              </span>
              <span>Flat 30% off on your fav {id}</span>
            </marquee>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className="grid my-[20px] ">
            <span
              className={`${
                isDesktopOrLaptop ? "text-[30px]" : "text-[20px]"
              } font-black `}
            >
              Types
            </span>
            <br />
            {Object.values(type).map((obj, index) => {
              return (
                <label className="my-[5px]" key={index + "r"} id={index}>
                  <input
                    className="mr-[10px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id={index + index + "x"}
                    type="checkbox"
                    checked={obj[1]}
                    onChange={() => {
                      let temp = type;
                      temp[obj[0]] = [obj[0], !obj[1]];
                      settype(temp);
                      setchanged(!changed);
                    }}
                  />
                  {obj[0]}
                </label>
              );
            })}
          </div>
          <div className="grid my-[20px] ">
            <span
              className={`${
                isDesktopOrLaptop ? "text-[30px]" : "text-[20px]"
              } font-black `}
            >
              Sizes
            </span>
            <br />
            {Object.values(size).map((obj, index) => {
              return (
                <label className="my-[5px]" key={index + "s"} id={index}>
                  <input
                    className="mr-[10px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id={index + index + "y"}
                    type="checkbox"
                    checked={obj[1]}
                    onChange={() => {
                      let temp = size;
                      temp[obj[0]] = [obj[0], !obj[1]];
                      setSize(temp);
                      setchanged(!changed);
                    }}
                  />
                  {obj[0]}
                </label>
              );
            })}
          </div>
          <div className="grid my-[20px] ">
            <span
              className={`${
                isDesktopOrLaptop ? "text-[30px]" : "text-[20px]"
              } font-black `}
            >
              Companies
            </span>
            <br />
            {Object.values(company).map((obj, index) => {
              return (
                <label className="my-[5px]" key={index + "t"} id={index}>
                  <input
                    className="mr-[10px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id={index + index + "z"}
                    type="checkbox"
                    checked={obj[1]}
                    onChange={() => {
                      let temp = company;
                      temp[obj[0]] = [obj[0], !obj[1]];
                      setCompany(temp);
                      setchanged(!changed);
                    }}
                  />
                  {obj[0]}
                </label>
              );
            })}
          </div>
        </div>
        <div
          className={`py-[60px] px-[40px] bg-gray-100 flex justify-evenly gap-[30px] flex-wrap`}
        >
          {allItems.map((obj, index) => {
            if (
              company[obj.Company][1] &&
              type[obj.Type][1] &&
              size[obj.size][1]
            ) {
              return (
                <div
                  className={` bg-white grid text-black place-items-left px-[20px] py-[20px]`}
                  key={index}
                >
                  <img src={obj.img} alt="" width={300} />
                  <span className="text-[30px]">
                    <span className="font-[500]">{obj.Company}</span>
                  </span>
                  <span className="text-[20px]">Type - {obj.Type}</span>
                  <span className="text-[20px]">
                    Size - {obj.size.toUpperCase()}
                  </span>
                  <span className="text-[20px]">Price - {obj.price}</span>
                  <div className="flex justify-between items-center mt-[20px]">
                    <div className="text-[20px] bg-black text-white px-[10px] flex gap-[10px] rounded-md">
                      <button
                        onClick={() => {
                          if (allItems[index].quantity > 1) {
                            allItems[index].quantity--;
                            setchanged(!changed);
                          }
                        }}
                      >
                        -
                      </button>
                      <span>{allItems[index].quantity}</span>
                      <button
                        onClick={() => {
                          if (allItems[index].quantity <= 100) {
                            allItems[index].quantity++;
                            setchanged(!changed);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-[20px] bg-black text-white px-[30px] rounded-md"
                      onClick={() => {
                        let temp = obj;
                        temp["cat"] = id;
                        setCart([...cart, temp]);
                        setCartButton(index);
                      }}
                    >
                      {cartbutton !== index ? "Add to cart" : "Added to cart"}
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <footer className="bg-black flex justify-evenly py-[100px] text-white">
        developed by Tarun Jakkula
      </footer>
    </>
  );
}
