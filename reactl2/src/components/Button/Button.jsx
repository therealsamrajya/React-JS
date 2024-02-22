import React from "react";
import { PiArrowCircleRightFill } from "react-icons/pi";

const Button = ({ className, value, icon }) => {
  return (
    <div className={className}>
      <p>{value}</p>
      {icon && <PiArrowCircleRightFill size={20} />}
    </div>
  );
};

export default Button;
