import { useMediaQuery } from "react-responsive";
import backArrow from "../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { VictoryPie } from "victory-pie";
import { VictoryBar, VictoryChart } from "victory";

export default function History({ history, setHistory }) {
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const [companyData, setcompanydata] = useState([]);
  const [sizeData, setsizedata] = useState([]);
  const [catData, setcatdata] = useState([]);

  useEffect(() => {
    var sizes = {};
    var cat = {};
    var companies = {};
    var companydata = [];
    var catdata = [];
    var sizedata = [];
    history.map((obj, ind) => {
      if (obj.Company in companies) companies[obj.Company]++;
      else companies[obj.Company] = 1;
      if (obj.cat in cat) cat[obj.cat]++;
      else cat[obj.cat] = 1;
      if (obj.size in sizes) sizes[obj.size]++;
      else sizes[obj.size] = 1;
    });
    Object.keys(companies).map((ele) => {
      companydata.push({ x: ele, y: companies[ele] });
    });
    setcompanydata(companydata);
    Object.keys(cat).map((ele) => {
      catdata.push({ x: ele, y: cat[ele] });
    });
    setcatdata(catdata);
    Object.keys(sizes).map((ele) => {
      sizedata.push({ x: ele, y: sizes[ele] });
    });
    setsizedata(sizedata);
  }, [history]);

  return (
    <div>
      <div>
        <div className={`flex flex-wrap justify-evenly bg-yellow-200`}>
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
            DashBoard
          </span>
          <div></div>
        </div>
        <span
          className={`bg-black ${
            isDesktopOrLaptop ? "text-[20px]" : "text-[15px]"
          } flex justify-center text-white py-[10px]`}
        >
          Details of your previous purchases
        </span>
      </div>
      {Object.keys(history).length === 0 ? (
        <div className="bg-gray-200 px-[40px] flex flex-wrap justify-evenly items-center min-h-[60vh]">
          <span
            className={`text-black w-screen flex justify-center ${
              isDesktopOrLaptop
                ? "text-[40px] py-[25px]"
                : "text-[20px] py-[25px]"
            }`}
          >
            Purchase something to show DashBoard
          </span>
        </div>
      ) : (
        <>
          <div className="bg-gray-200 px-[40px] flex flex-wrap justify-evenly">
            <span
              className={`text-black font-black w-screen flex justify-center ${
                isDesktopOrLaptop
                  ? "text-[70px] py-[25px]"
                  : "text-[40px] py-[25px]"
              }`}
            >
              Analytics
            </span>
            <div className="grid place-items-center shadow-md rounded-xl px-[20px] my-[30px] bg-white">
              <span
                className={`text-black font-black ${
                  isDesktopOrLaptop
                    ? "text-[50px] py-[10px]"
                    : "text-[30px] py-[10px]"
                }`}
              >
                Companies
              </span>
              <VictoryPie
                data={companyData}
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                height={350}
              />
            </div>
            <div className="grid place-items-center shadow-md rounded-xl px-[20px] my-[30px] bg-white">
              <span
                className={`text-black font-black ${
                  isDesktopOrLaptop
                    ? "text-[50px] py-[10px]"
                    : "text-[20px] py-[10px]"
                }`}
              >
                Categories
              </span>
              <VictoryPie
                data={catData}
                colorScale={[
                  "lightblue",
                  "yellow",
                  "cyan",
                  "red",
                  "green",
                  "tomato",
                  "orange",
                  "gold",
                  "cyan",
                  "navy",
                ]}
                height={350}
              />
            </div>
            <div className="grid place-items-center rounded-xl shadow-md px-[20px] my-[30px] bg-white">
              <span
                className={`text-black font-black ${
                  isDesktopOrLaptop
                    ? "text-[50px] py-[10px]"
                    : "text-[20px] py-[10px]"
                }`}
              >
                Sizes
              </span>
              <VictoryPie
                data={sizeData}
                colorScale={[
                  "pink",
                  "red",
                  "silver",
                  "blue",
                  "purple",
                  "tomato",
                  "orange",
                  "gold",
                  "cyan",
                  "navy",
                ]}
                height={350}
              />
            </div>
          </div>
          <div className="bg-gray-200 px-[40px] flex flex-wrap justify-evenly pb-[60px]">
            <span
              className={`text-black font-black w-screen flex justify-center ${
                isDesktopOrLaptop
                  ? "text-[70px] py-[25px]"
                  : "text-[40px] py-[25px]"
              }`}
            >
              History
            </span>
            <div className="my-[40px] mx-[2vw] bg-white w-screen rounded-sm shadow-md py-[20px]  overflow-x-auto ">
              <table
                className={`w-full items-center text-[30px] bg-white min-w-[800px]`}
              >
                <thead className="border-b-[2px] border-black">
                  <tr>
                    <th>S.no</th>
                    <th>Company</th>
                    <th>Cloth</th>
                    <th>Category</th>
                    <th>Size</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((obj, ind) => {
                    return (
                      <tr className="text-center" key={obj + ind}>
                        <td>{ind + 1}</td>
                        <td className="text-[20px] font-black">
                          {obj.Company}
                        </td>
                        <td className="text-[20px] font-bold">{obj.Type}</td>
                        <td className="text-[20px] font-bold">{obj.cat}</td>
                        <td className=" text-[20px]">
                          size - {obj.size.toUpperCase()}
                        </td>
                        <td className="text-[20px] font-bold">
                          ₹{obj.price * obj.quantity}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      <footer className="bg-black flex justify-evenly py-[100px] text-white">
        <span>developed by Tarun Jakkula</span>
        <span>For Cognida coding challenge</span>
      </footer>
    </div>
  );
}
