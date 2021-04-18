import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import { ReactComponent as SvgLogo } from "../../../components/Svg/Icons/texted-logo.svg";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <SvgLogo {...props} />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
