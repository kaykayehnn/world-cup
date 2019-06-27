import React from "react";

const imageUrl =
  "/images/Serious-business-man-showing-open-palm-or-stop-gesture-and-looking-at-camera.gif";

const Forbidden = () => (
  <div>
    <div className="forbidden-heading">You do not belong here.</div>
    <img className="forbidden-img" src={imageUrl} />
  </div>
);

export default Forbidden;
