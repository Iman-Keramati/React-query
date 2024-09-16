import React from "react";
import { LoadingPropType } from "../Hook/Types/types";

const Loading = (props: LoadingPropType) => {
  let { size, color } = props;

  if (!size) {
    size = 48;
    size.toString();
  } else {
    size.toString();
  }
  if (!color) {
    color = "#ed57ae";
  }
  return (
    <div
      className={`border-t-4 border-r-4 border-r-transparent rounded-full animate-spin`}
      style={{
        width: size + "px",
        height: size + "px",
        borderColor: color,
      }}
    ></div>
  );
};

export default Loading;
