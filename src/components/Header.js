import React from "react";

function Header({embedUrl, title, views, createdAt}) {
  return (
    <div className="Header">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <header>{title}</header>
      <div className="subtitle">{views} Views | Uploaded {createdAt}</div>
    </div>
  )
}

export default Header;