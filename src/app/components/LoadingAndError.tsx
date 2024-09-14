import React from "react";
import { PropType } from "../Hook/Types/types";

const LoadingAndError = (props: PropType) => {
  if (props.isLoading) {
    // TYPICALLY YOU CAN PROVIDE YOUR OWN LOADING UI
    return <div>Loading ....</div>;
  }
  if (props.isError) {
    // PROVIDE YOUR OWN ERROR UI
    return <p>Error</p>;
  }

  return <>{props.children}</>;
};

export default LoadingAndError;
