import { Link, useRouteError } from "react-router-dom";

const ErrorMessage = () => {
  const error = useRouteError();
  return (
    <div className="error-message">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Return to the home page</Link>
    </div>
  );
};

export default ErrorMessage;
