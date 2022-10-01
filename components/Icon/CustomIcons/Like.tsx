import React from "react";
import { IconProps } from "../Icon";

const Like = ({ size, color = "currentColor" }: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 45 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0999 4.95503L22.5004 6.32793L23.9005 4.95461C29.1074 -0.152722 38.476 1.71634 41.8025 7.91301C43.3852 10.8613 43.6868 15.0241 40.9212 20.2295C38.2175 25.3183 32.5921 31.3492 22.5 37.8743C12.4078 31.3492 6.78241 25.3187 4.07875 20.2304C1.31322 15.0257 1.61484 10.8636 3.19747 7.91584C6.52394 1.71998 15.893 -0.1493 21.0999 4.95503Z"
        stroke={color}
        stroke-width="4"
      />
    </svg>
  );
};

export default Like;
