import { Link } from "react-router-dom";




const HeaderView = () => {
  return (
    <>
      <div style={{display:"flex",flexDirection:"column"}} >
        <Link to="/">Home</Link>
        <br />
        <Link to="/first">First Component</Link>
        <br />
        <Link to="/second/prakash">Second Component</Link>
        <br />
        <Link to="/third">Third Component</Link>
      </div>
    </>
  );
};

export default HeaderView;
