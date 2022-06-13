import React from "react";

function Comment({user, comment}) {
  return (
    <div>
      <div className="user">{user}</div>
      <div className="comment">{comment}</div>
    </div>
  );
}

export default Comment;