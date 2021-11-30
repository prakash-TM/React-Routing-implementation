import { Link, useParams } from "react-router-dom";
import HeaderView from "./Components/HeaderView";

const RoutingV2B = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <>
    <HeaderView />
      <p>I'm inside RoutingV2B component</p>

      
    </>
  );
};

export default RoutingV2B;