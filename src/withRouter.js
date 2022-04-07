import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { apiAxios } from "./API/api";

function withRouter(Component) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const api = apiAxios;
    return (
      <Component
        {...props}
        navigate={navigate}
        location={location}
        params={params}
        api={api}
      />
    );
  };
}

export default withRouter;
