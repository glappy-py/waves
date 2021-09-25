import React, { FC } from "react";

interface props {
  depth: string;
  height: string;
  bars?: number;
  startColor?: string;
  endColor?: string;
  waveLength?: number;
  waveVelocity?: number;
}
const Waves: FC<props> = ({
  depth,
  height,
  bars,
  startColor,
  endColor,
  waveLength,
  waveVelocity,
}) => {
  let barsArray: number[] = [];
  for (let index = 0; index < (bars ? bars : 500); index++) {
    barsArray.push(index);
  }
  document.documentElement.style.setProperty("--height", height);
  document.documentElement.style.setProperty("--depth", depth);
  document.documentElement.style.setProperty(
    "--startColor",
    startColor ? startColor : "white"
  );
  document.documentElement.style.setProperty(
    "--endColor",
    endColor ? endColor : "white"
  );

  return (
    <div className="waves">
      {barsArray.map((barIndex) => {
        let style = {
          height: depth,
          width: (100 / (bars ? bars : 500)).toString().concat("vw"),
          borderLeft: bars ? "2px solid black" : 0,
          borderRight: bars ? "2px solid black" : 0,
          animation:
            "waveAnim ease-in-out " +
            (waveVelocity ? (1 / waveVelocity) * 1 : 5) +
            "s forwards infinite",
          animationDelay: (barIndex * (waveLength ? 1000 / waveLength : 20))
            .toString()
            .concat("ms"),
        } as React.CSSProperties;
        return <div className="bar" style={style}></div>;
      })}
    </div>
  );
};

export default Waves;
