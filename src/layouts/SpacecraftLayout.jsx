import { Outlet, Link } from "react-router-dom";

const SpacecraftLayout = () => {
  return (
    <div className="spacecraft-layout">
      <h2>Hanger Bay</h2>
      <nav>
        <Link to="construct">Build New</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default SpacecraftLayout;
