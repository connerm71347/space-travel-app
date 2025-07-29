import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404: The Page Has Left the Atmosphere</h2>
      <p>
        Navigate Back to Mission Control <Link to="/">Beam Me Back</Link>
      </p>
    </div>
  );
};

export default NotFound;
