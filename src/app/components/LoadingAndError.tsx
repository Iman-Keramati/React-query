import React from "react";
import { PropType } from "../Hook/Types/types";
import Loading from "../Styles/Loading";

const LoadingAndError = (props: PropType) => {
  const { isLoading, isError, loaderColor, loaderSize } = props;
  if (isLoading) {
    // TYPICALLY YOU CAN PROVIDE YOUR OWN LOADING UI
    return <Loading size={loaderSize} color={loaderColor} />;
  }
  if (isError) {
    // PROVIDE YOUR OWN ERROR UI
    return <p>Error</p>;
  }

  return <>{props.children}</>;
};

export default LoadingAndError;
