import React from "react";

type Direction = "horizontal" | "vertical";

interface MarginerProps {
  direction?: Direction;
  margin?: string | number;
}

const Marginer: React.FC<MarginerProps> = ({
  direction = "vertical",
  margin = "0px",
}) => {
  const style =
    direction === "horizontal"
      ? { width: typeof margin === "number" ? `${margin}px` : margin }
      : { height: typeof margin === "number" ? `${margin}px` : margin };

  return <div className="flex" style={style} />;
};

export { Marginer };
