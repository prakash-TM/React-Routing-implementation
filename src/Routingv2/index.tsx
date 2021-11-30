import { useCallback, useEffect, useState } from "react";
import HeaderView from "./Components/HeaderView";

const RoutingV2 = () => {
  const [toggle, setToggle] = useState(true);

  const handleKeyUp = useCallback((event: { key: any; }) => {
    console.log("Event: ", event.key);
  }, []);

  useEffect(() => {
    console.log("I'm a useEffect");
    window.addEventListener("keyup", handleKeyUp);
    // Start the timer

      return () => {
        // Stop the timer & update the server
        window.removeEventListener("keyup", handleKeyUp);
      };
  }, []);

  return (
    <>
      <p>I'm inside home component</p>

      <HeaderView />
    </>
  );
};

export default RoutingV2;