import React from "react";

function UpDownButtons({upvotes, downvotes, onClickUpDown}) {
  return (
    <div className="voteButtons">
      <button className="upvotes" onClick={onClickUpDown}>{upvotes} 👍</button>
      <button className="downvotes" onClick={onClickUpDown}>{downvotes} 👎</button>
    </div>
  );
}

export default UpDownButtons;