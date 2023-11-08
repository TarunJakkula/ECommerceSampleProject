import Intro from "./Intro";
import Body from "./Body";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

function App({ cart }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const men = useRef(null);
  const women = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Intro
        isDesktopOrLaptop={isDesktopOrLaptop}
        men={men}
        women={women}
        scrollTo={scrollTo}
        cart={cart}
      />
      <Body isDesktopOrLaptop={isDesktopOrLaptop} men={men} women={women} />
      <footer className="bg-black flex justify-evenly py-[100px] text-white">
        <span>developed by Tarun Jakkula</span>
        <span>For Cognida coding challenge</span>
      </footer>
    </>
  );
}

export default App;
