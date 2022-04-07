import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function withRouter(Component) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        navigate={navigate}
        location={location}
        params={params}
      />
    );
  };
}

export default withRouter;
