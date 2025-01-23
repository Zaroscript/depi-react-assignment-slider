import { Navigate } from "react-router-dom";

const Protectedroute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protectedroute;
