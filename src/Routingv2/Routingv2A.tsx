
import HeaderView from "./Components/HeaderView";
// import HeaderView from "./Components/HeaderView";

const RoutingV2A = () => {
  // const { search, state } = useLocation();
  // console.log({ search, state });
  return (
    <>
      <p>I'm inside RoutingV2A component</p>
      {/* <BrowserRouter>
        <Routes>
          <Route path="first" element={<RoutingV2A />} />
        </Routes>
      </BrowserRouter> */}
      <HeaderView />
    </>
  );
};

export default RoutingV2A;
