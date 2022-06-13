import React from "react";
import Comment from "./Comment";

function CommentsList({comments, hideComments}) {
  const commentsDisplay = comments.map(comment => <Comment key={comment.id} user={comment.user} comment={comment.comment} />);
  return (
    <div className="commentsList" style={{display: hideComments ? 'none' : 'block'}}>
      <h2>{comments.length} Comments</h2>
      {commentsDisplay}
    </div>
  )
}

export default CommentsList;