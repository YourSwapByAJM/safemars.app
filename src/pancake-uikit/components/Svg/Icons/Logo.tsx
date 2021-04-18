import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { ReactComponent as Logo } from './minimal-logo.svg';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Logo {...props} />
  );
};

export default Icon;
