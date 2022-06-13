import React from "react";

function HideButton({hideComments, onClickHide}) {
  return (
    <div className="hideButton">
      {(!hideComments) ? <button onClick={onClickHide}>Hide Comments</button> : <button className="hideButton" onClick={onClickHide}>Show Comments</button>}
    </div>
  )
}

export default HideButton;