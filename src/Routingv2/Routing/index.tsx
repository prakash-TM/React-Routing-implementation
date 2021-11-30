import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutingV2 from "../index";
import RoutingV2A from "../Routingv2A";
import RoutingV2B from "../Routingv2B";
import RoutingV2C from "../Routingv2C";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutingV2 />} />
        <Route path="first" element={<RoutingV2A />} />
        <Route path="second/:id" element={<RoutingV2B />} />
        <Route path="third" element={<RoutingV2C />} />

        
      </Routes>
    </BrowserRouter>
  
  );
};

export default Routing;