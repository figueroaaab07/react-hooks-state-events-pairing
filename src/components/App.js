import React, { useState } from "react";
import Header from "./Header";
import HorizontalLine from "./HorizontalLine";
import UpDownButtons from "./UpDownButtons";
import HideButton from "./HideButton";
import CommentsList from "./CommentsList";
import video from "../data/video.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [hideComments, setHideComments] = useState(false);
  const [comments] = useState(video.comments);

  function onClickUpDown(event) {
    (event.target.className === "upvotes") ? setUpvotes(upvotes + 1) : setDownvotes(downvotes + 1);
  }

  function onClickHide(event) {
    setHideComments(!hideComments);
  }

  return (
    <div>
        <HorizontalLine background="black" color="black" borderColor="black" height="5px" />
        <Header embedUrl={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt} />
        <UpDownButtons upvotes={upvotes} downvotes={downvotes} onClickUpDown={onClickUpDown} />
        <HideButton hideComments={hideComments} onClickHide={onClickHide} />
        <HorizontalLine background="black" color="black" borderColor="black" height="1px" />
        <CommentsList comments={comments} hideComments={hideComments} />
    </div>
  );
}

export default App;
