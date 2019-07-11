import React from "react";

// Remove leading forward slash in case there is one as it breaks image urls.
const PUBLIC_PATH = process.env.PUBLIC_PATH.replace(/\/$/, "");

const Image = ({ src, ...props }) => <img src={PUBLIC_PATH + src} {...props} />;
export default Image;
