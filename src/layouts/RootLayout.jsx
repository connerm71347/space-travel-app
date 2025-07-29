import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Space-Travel</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="spacecraft">Spacecraft</NavLink>
          <NavLink to="planets">Planets</NavLink>
        </nav>
      </header>
      {navigation.state === "loading" && <Loader />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
