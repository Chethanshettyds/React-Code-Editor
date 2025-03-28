import React from "react";

const Preview = ({ code }) => {
  return (
    <iframe
      title="Preview"
      sandbox="allow-scripts"
      style={{ width: "100%", height: "100%", border: "none" }}
      srcDoc={`<html><body><script>${code}</script></body></html>`}
    />
  );
};

export default Preview;
