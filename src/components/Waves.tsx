import React, { FC } from "react";

interface props {
  depth: string;
  height: string;
  bars: number;
  startColor: string;
  endColor: string;
}

const Waves: FC<props> = ({ depth, height, bars, startColor, endColor }) => {
  let barsArray: number[] = [];
  for (let index = 0; index < bars; index++) {
    barsArray.push(index);
  }
  document.documentElement.style.setProperty("--height", height);
  document.documentElement.style.setProperty("--depth", depth);
  document.documentElement.style.setProperty("--startColor", startColor);
  document.documentElement.style.setProperty("--endColor", endColor);

  return (
    <div className="waves">
      {barsArray.map((barIndex) => {
        let style = {
          height: depth,
          width: (100 / bars).toString().concat("vw"),
          borderLeft: "2px solid black",
          borderRight: "2px solid black",
          animation: "waveAnim ease-in-out 5s forwards infinite",
          animationDelay: (barIndex * 100).toString().concat("ms"),
        } as React.CSSProperties;
        return <div className="bar" style={style}></div>;
      })}
    </div>
  );
};

export default Waves;
