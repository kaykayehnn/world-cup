import React from "react";

const PUBLIC_PATH = process.env.PUBLIC_PATH;

const Image = ({ src, ...props }) => <img src={PUBLIC_PATH + src} {...props} />;
export default Image;
