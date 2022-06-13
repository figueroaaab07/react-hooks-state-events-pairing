import React from "react";

function HorizontalLine({background, color, borderColor, height}) {
  return (
    <div>
      <hr
        style={{
          background: background,
          color: color,
          borderColor: borderColor,
          height: height,
        }}
      />
    </div>
  )
}

export default HorizontalLine;