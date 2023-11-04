import React, { FC, useState } from "react";

export enum CardVariant {
  outline = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children: React.ReactNode;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ onClick, width, height, variant, children }) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outline ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
